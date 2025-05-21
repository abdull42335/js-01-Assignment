var laptopPrice = 50000
var smartphonePrice = 20000
var headphonePrice = 2000


var laptops_Pro1 = +prompt("Enter quantity of Laptops")
var smartphones_Pro2 = +prompt("Enter quantity of Smartphone")
var headphones_Pro3 = +prompt("Enter quantity of HeadPhone")

var laptopTotal = laptops_Pro1 * laptopPrice;
var smartphonetotal = smartphones_Pro2 * smartphonePrice;
var headphonestotal = headphones_Pro3 * headphonePrice;

var totalBill = laptopTotal + smartphonetotal + headphonestotal;

var discount = 0;

if (totalBill > 50000) {
    discount = totalBill * 20;
} else if (totalBill > 3000) {
    discount = totalBill * 15
} else if (totalBill > 1000) {
    discount = totalBill * 10;
}
const TotalAmount = totalBill - discount;

document.write(`<h2>Total Bill: Rs ${totalBill}<h2/>`)
document.write(`<h2>Discount: Rs ${discount}<h2/>`)
document.write(`<h2>Amount to Pay: Rs ${TotalAmount}<h2/>`)
