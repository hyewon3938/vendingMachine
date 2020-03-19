import Observable from "../module/observable.js";

class VmModel extends Observable {
  constructor(vmProductModel) {
    super();
    this.vmProductModel = vmProductModel;
    this.products;
    this.selectMoney;
    this.selectedNumber = "";
  }
  insertMoney(money) {
    this.selectMoney = money;
  }
  selectNumber(number, products) {
    this.products = products;
    if (number == "10") {
      if (parseInt(this.selectedNumber) <= this.products.length) {
        this.selectProduct();
      }
      this.selectedNumber = "";
    } else {
      this.selectedNumber += number;
    }
  }
  selectProduct() {
    this.products.forEach(product => {
      if (product.id == this.selectedNumber) {
        if (product.price <= this.selectMoney) {
          this.selectMoney = this.selectMoney - product.price;
          console.log('check', this.selectMoney);
          this.notify(product.id + "번 상품을 구매하셨습니다.<br><br>");
          this.vmProductModel.checkPrice(this.selectMoney);
        } else {
          this.notify("투입 금액이 부족합니다.<br><br>");
        }
      }
    });
  }
}

export default VmModel;