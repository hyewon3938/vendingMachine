import Observable from "../module/observable.js";

class WalletModel extends Observable {
  constructor() {
    super();
    this.init();
    this.walletData = {
      walletMoney: {},
      walletTotal: 0,
      VMCash: 0,
      currentIndex: null
    };
  }
  async init() {
    const response = await fetch("./json/walletMoney.json");
    const data = await response.json();
    this.walletData.walletMoney = data;
    await this.setWalletData(data);
}
  pay(cash) {
    for (let i = 0; i < this.walletData.walletMoney.length; i++) {
      const moneyData = this.walletData.walletMoney[i];
      if (moneyData.money == cash && moneyData.money_qty > 0) {
        this.walletData.currentIndex = i;
        this.walletData.walletTotal -= cash;
        this.walletData.VMCash += cash;
        this.walletData.walletMoney[i].money_qty -= 1;
      }
    }
    this.notify(this.walletData);
  }
  
  setWalletData(initialData) {
    this.walletData.walletMoney = initialData;
    const walletTotal = initialData.reduce(
      (total, data) => (total += data.money * data.money_qty),
      0
    );

    this.walletData.walletTotal = walletTotal;
    this.notify(this.walletData);
  }
}

export default WalletModel;
