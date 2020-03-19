import Observable from "../module/observable.js";

class VmProductModel extends Observable {
    constructor() {
        super();
        this.products;
        this.init();
        this.selectMoney;
    }
    async init() {
        const response = await fetch("./json/vmProduct.json");
        const data = await response.json();
        this.products = data.product;
        this.notify(this.products);
    }
    checkPrice(selectMoney) {
        // 버튼으로 상품 선택했을 때 분명히 이 함수까지 도달하는데 notify가 울리지 않는 버그가 있음 -> 이유 아직 못 찾음
        console.log('checkprice', selectMoney);
        this.selectMoney = selectMoney;
        this.products.forEach(product => {
            if (product.price <= this.selectMoney) {
                product.focus = "true";
                console.log(product);
            }
        });
        this.notify(this.products);

    }
}

export default VmProductModel;