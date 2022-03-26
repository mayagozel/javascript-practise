/*
A store manager needs a program to set discounts for products.
The program should take the product ID, price and discount as input and output the discounted price. However, the changePrice method, which should calculate the discount, is incomplete. Fix it!
Sample Input
LD1493
1700
15
Sample Output
LD1493 price: 1700
LD1493 new price: 1445
The first input is the product ID, the second is the price before discounting, and the third is discount percentage.
So after discounting the new price will be 1700-(0.15*1700) = 1445.
*/

function main() {
    var prodID = readLine();
    var price = parseInt(readLine(), 10);
    var discount = parseInt(readLine(), 10);

    var prod1 = new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);

    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        //your code goes here
        this.price = price - (discount / 100 * price);
    }
}