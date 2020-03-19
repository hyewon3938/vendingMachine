class VmView {
  constructor(vmModel, walletModel, target) {
    this.vmModel = vmModel;
    this.walletModel = walletModel;
    this.target = target;
    this.vmModel.subscribe(this.render.bind(this));
    this.walletModel.subscribe(this.walletDataRender.bind(this));
  }
  render(message) {
    this.target.vmMessageView.innerHTML += message;
  }
  walletDataRender(data) {
    this.target.VMMoneyView.innerHTML = `${data.VMCash + " 원"}`;
    const dataIndex = data.currentIndex;
    if (dataIndex == null) return;
    this.target.vmMessageView.innerHTML += `${data.walletMoney[dataIndex].money + " 원이 투입되었습니다."}<br><br>`;
  }

  // selectProductMessage(){
  //   if (this.vmModel.selectedNumber == "") return;
  //   this.target.vmMessageView.innerHTML += `${this.vmModel.selectedNumber + "번 상품을 선택하셨습니다."}<br><br>`;
  // }
}

export default VmView;