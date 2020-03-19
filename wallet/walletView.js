class WalletView {
  constructor(model, target) {
    this.target = target;
    this.model = model;
    this.model.subscribe(this.render.bind(this));
  }

  render(data) {
    this.target.walletTotalView.innerHTML = `${data.walletTotal + " 원"}`;
    for (var i = 0; i < data.walletMoney.length; i++) {
      this.target.walletMoneyQtyView[i].innerHTML = `${data.walletMoney[i].money_qty + " 개"}`;
    }

  }
}

export default WalletView;