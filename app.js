// //------------------------------------------chapter # 4-------------------------------------
// chap 4 is not workin and causing some kind issue in letting next chapters run therefore
// i commented out chapater 4


// //question 1

// var x, y, z;
// //legal
// var myVariable;
// var $price;
// var _count;
// var camelCaseVariable;
// var firstName;
// //illegal
// var 123variable; 
// var my-variable; 
// var var ; 
// var my variable; 
// var % discount;

// document.write("<h1>Multiplication Table of 4</h1>");
// document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.</p>");
// document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.</p>");
// document.write("<p>Variable names are case-sensitive.</p>");
// document.write("<p>Variable names should not be JS reserved keywords.</p>");

//------------------------------------------chapter # 5-------------------------------------

//question 1
var number1 = 5;
var number2 = 3;
var sum = number1 + number2;
document.write("The sum of " + number1 + " and " + number2 + " is " + sum);

//question 2
var subtraction = number1 - number2;
var multiplication = number1 * number2;
var division = number1 / number2;
var modulus = number1 % number2;
document.write("Subtraction: " + number1 + " - " + number2 + " = " + subtraction + "<br>");
document.write("Multiplication: " + number1 + " * " + number2 + " = " + multiplication + "<br>");
document.write("Division: " + number1 + " / " + number2 + " = " + division + "<br>");
document.write("Modulus: " + number1 + " % " + number2 + " = " + modulus);

//question 4
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("Cost of one movie ticket: " + ticketPrice + " PKR<br>");
document.write("Number of tickets: " + numberOfTickets + "<br>");
document.write("Total cost for " + numberOfTickets + " tickets: " + totalCost + " PKR");

//question 5

document.write("<h2>Multiplication Table of 4</h2>");

for (var i = 1; i <= 10; i++) {
    var result = 4 * i;
    document.write("4 * " + i + " = " + result + "<br>");
}

//question 7

var priceItem1 = 500;
var priceItem2 = 700;
var quantityItem1 = 2;
var quantityItem2 = 3;
var shippingCharges = 100;

var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;

var subtotal = totalCostItem1 + totalCostItem2;
var totalCost = subtotal + shippingCharges;
document.write("<h2>Receipt</h2>");
document.write("Price of item 1: " + priceItem1 + " PKR<br>");
document.write("Ordered quantity of item 1: " + quantityItem1 + "<br>");
document.write("Total cost of item 1: " + totalCostItem1 + " PKR<br>");
document.write("<br>");
document.write("Price of item 2: " + priceItem2 + " PKR<br>");
document.write("Ordered quantity of item 2: " + quantityItem2 + "<br>");
document.write("Total cost of item 2: " + totalCostItem2 + " PKR<br>");
document.write("<br>");
document.write("Subtotal: " + subtotal + " PKR<br>");
document.write("Shipping charges: " + shippingCharges + " PKR<br>");
document.write("<strong>Total cost including shipping charges: " + totalCost + " PKR</strong>");

//question 8

var totalMarks = 980;
var marksObtained = 840;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Percentage Calculator</h2>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("<strong>Percentage: " + percentage.toFixed(2) + "%</strong>" + "<br>");

//question 9
var totalCurrencyInPKR = (10 * 104.80) + (25 * 28);
document.write("<h2>Currency Convertor</h2>");
document.write(totalCurrencyInPKR + "<br>");

//question 10
var initialNumber = 3;
var result = (((initialNumber + 5) * 10) / 2);
document.write("<h2>ques 10</h2>");
document.write(result + "<br>");

//question 12


var radius = 10; 
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("<h2>Circumferance</h2>");
document.write("The circumference is " + circumference);
document.write("The area is " + area);

//question 13


var favoriteSnack = "chocolate";
var currentAge = 25; 

var maxAge = 80;
var amountPerDay = 2;

var yearsRemaining = maxAge - currentAge;
var daysRemaining = yearsRemaining * 365; 
var totalSnacksNeeded = daysRemaining * amountPerDay;
document.write("<h2>fav snack</h2>");
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);


//------------------------------------------chapter # 5-------------------------------------
//question 3
var userName = prompt("Enter your name:");
alert("Hello, " + userName + "! Welcome to our website.");

// quest 6
    
     var subject1 = prompt("Enter name of subject 1:");
     var subject2 = prompt("Enter name of subject 2:");
     var subject3 = prompt("Enter name of subject 3:");
     var totalMarks = 100;
     var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
     var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
     var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

     var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
     var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

     document.write("<h2>Result</h2>");
     document.write("<table border='1'>");
     document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
     document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
     document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
     document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
     document.write("</table>");
     document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
     document.write("<p>Percentage: " + percentage + "%</p>");