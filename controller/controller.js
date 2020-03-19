import VmModel from "../vm/vmModel.js";
import VmProductModel from "../vm/vmProductModel.js"
import VmView from "../vm/vmView.js";
import VmProductView from "../vm/vmProductView.js";
import WalletModel from "../wallet/walletModel.js";
import WalletView from "../wallet/walletView.js";

const walletTotalView = document.querySelector(".wallet-total");
const walletMoneyQtyView = document.querySelectorAll(".wallet-money-qty");
const VMMoneyView = document.querySelector(".vm-select-money");
const vmMessageView = document.querySelector(".vm-select-message");
const vmSelectNumber = document.querySelector(".vm-select-number");
const walletList = document.querySelector(".wallet-list");

const walletTarget = {
    walletTotalView: walletTotalView,
    walletMoneyQtyView: walletMoneyQtyView,
};

const productUl = document.querySelector('.vm-product-menu > ul');

const vmTarget = {
    productUl: productUl,
    vmMessageView: vmMessageView,
    walletMoneyQtyView: walletMoneyQtyView,
    VMMoneyView: VMMoneyView
}

const vmProductModel = new VmProductModel();
const vmModel = new VmModel(vmProductModel);
const walletModel = new WalletModel();
const vmView = new VmView(vmModel, walletModel, vmTarget);
const vmProductView = new VmProductView(vmProductModel, vmTarget);
const walletView = new WalletView(walletModel, walletTarget);

walletList.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") return;
    walletModel.pay(Number(event.target.value));
    vmModel.insertMoney(walletModel.walletData.VMCash);
    vmProductModel.checkPrice(walletModel.walletData.VMCash);
});

vmSelectNumber.addEventListener("click", function (event) {
    if (event.target.tagName !== "LI") return;
    vmModel.selectNumber(event.target.value, vmProductModel.products);
});