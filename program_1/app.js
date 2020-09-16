/*
==========================================
Assignment: Program 1 – Hipster's Local Vinyl Records
Author: Devin Davis
Date: Sep 14, 2020
===========================================
*/

/*
===============================
PSEUDOCODE
===============================
*/

const readLine = require("readline");
const readlineSync = require("readline-sync");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Define Global Variables
var customerName, totalKilo, productTotal;

/*
===============================
ORDER CLASS
===============================
*/

class Order {
  constructor(customerName, procTotal, kilo) {
    this.procTotal = procTotal;
    this.kilo = kilo;
    this.customerName = customerName;
  }

  getCustomerName() {
    return this.customerName;
  }

  getCustomerTotal() {
    return this.procTotal;
  }

  getKilometers() {
    return this.kilo;
  }

  getCustomerTotalTaxed(taxRate) {
    return this.calculateSalesTax(taxRate) + this.procTotal;
  }

  calculateDeliveryPrice(kiloCost) {
    return kiloCost * this.kilo;
  }

  calculateSalesTax(taxRate) {
    return this.procTotal * taxRate;
  }

  calculateTotal(taxRate, kiloCost) {
    return (
      this.calculateDeliveryPrice(kiloCost) +
      this.getCustomerTotal() +
      this.calculateSalesTax(taxRate)
    );
  }
}

/*
===============================
USER PROMPTS
===============================
*/
const questions = [
  { question: "\nEnter the customer's name: ", type: "string" },
  {
    question: "\nEnter the distance in kilometers for delivery: ",
    type: "number",
  },
  { question: "\nEnter the total cost of records purchased: ", type: "number" },
];

function checkValidAnwser(q) {
  let an = readlineSync.question(q.question);
  if (Number(an)) {
    return an;
  } else {
    return an;
  }
}

let anwsers = questions.map((q) => checkValidAnwser(q));

console.log(anwsers);

// (() => {
//   // Insert Application Title
//   rl.write(
//     "=============================\nHipster's Local Vinyl Records\n============================= \n"
//   );

//   // Ask Question 1
//   rl.question("\nEnter the customer's name: ", (name) => {
//     // get customer name & add to variable
//     customerName = name;
//     // Ask Question 2
//     rl.question("Enter the distance in kilometers for delivery: ", (kilo) => {
//       // get total kilometers & add to variable
//       totalKilo = kilo;
//       // Ask Question 3
//       rl.question("Enter the total cost of records purchased: ", (total) => {
//         // get product total
//         productTotal = total;
//         // create new order
//         let newOrder = new Order(
//           customerName,
//           Number(productTotal),
//           Number(totalKilo)
//         );

//         // get customer order info
//         let customerOrder = {};
//         customerOrder.total = newOrder.calculateTotal(0.14, 15);
//         customerOrder.name = newOrder.getCustomerName();
//         customerOrder.deliveryCost = newOrder.calculateDeliveryPrice(15);
//         customerOrder.purchaseCost = newOrder.getCustomerTotalTaxed(0.14);

//         // log order info to console
//         console.log(
//           `\nPurchase summary for: ${customerOrder.name} \nDelivery Cost: $${customerOrder.deliveryCost} \nPurchase Cost: $${customerOrder.purchaseCost} \nTotal Cost: $${customerOrder.total}`
//         );
//         // close application
//         rl.close();
//       });
//     });
//   });
// })();
