class VmProductView {
    constructor(vmProductModel, target) {
        this.vmProductModel = vmProductModel;
        this.target = target;
        this.vmProductModel.subscribe(this.render.bind(this));
    }
    render(products) {
        this.target.productUl.innerHTML = "";
        let className = "";
        products.forEach(product => {
            if (product.focus === "true") {
                className = "product-name-focus";
            } else {
                className = "product-name";
            }
            const template = `<li><div class="${className}"><div class="product-id">${product.id}</div>${product.name}</div><p class="product-price">${product.price}</p></li>`;
            this.target.productUl.innerHTML += template;
        });
    }
}

export default VmProductView;