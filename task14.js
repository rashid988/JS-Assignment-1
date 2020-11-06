////////1
var pizza= "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert (pizza);


////////2
var age =21;
alert ("I am " + age + "year old");
alert ("You have visited this sites 15 times");


//////3
document.write( "<h1>" + "The document.write example" + "</h1>");
var birthYear = 1999;
document.write("My birth year is: "+ birthYear + "<br>" + "Data type of my declared value is " + typeof + birthYear + "<br>");


///////4
document.write( "<h1>" + "Order From Store Example" + "</h1>");
var name ="Rashid Ali";
var product = "T-shirts";
var quanity = 3;
document.write( name + " Ordered " + product + ' ' + " On  XYZ Clothing Store" + "<br>");


///////5
document.write( "<h1>" + "TicketPrice Calculation Example" + "</h1>");
var oneTicketPrice = 600;
var fiveTicketPrice = oneTicketPrice * 5;
document.write(  "Total cost of buying 5 tickets to a movie is " + fiveTicketPrice + "PKR" + "<br>" );


//////6
document.write( "<h1>" + "Table of 4 Example" + "</h1>");
document.write( "Table of 4 ");
{
for( var T4 = 1; T4 <= 10; T4++ )
 document.write( "<br>" + 4 + " * " + T4 + " = " + 4*T4);
}


//////7
document.write( "<h1>" + "Order From Online Store Example" + "</h1>");
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shipCharges = 100;

document.write( "<h1>" + "Shopping Cart" + "</h1>");
document.write( "<p>" + "Price of Item 1 is " + priceItem1 );
document.write( "<br>" + "Quantity of Item 1 is " + quantityItem1 );
document.write( "<br>" + "Price of Item 2 is " + priceItem2 );
document.write( "<br>" + "Quantity of Item 2 is " + quantityItem2 );
document.write( "<br>" + "Shipping Charges: " + shipCharges );

var totalCoat = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shipCharges;

document.write( "<p>" + "Total cost of your order is " + totalCoat );


/////8
document.write( "<h1>" + "Marks Percentage Example " + "</h1>");
var totalMarks = 980;
var marksObt = 804;

var per = marksObt/totalMarks * 100;
document.write( "Percentage: " + per );


////////9
document.write( "<h1>" + "Calculation Example" + "</h1>");
var iniNum = 10;
var calc = iniNum + 5 * 10 / 2;
document.write("The result is: " + calc);


/////10
document.write( "<h1>" + "Age Calculator" + "</h1>");

var currentYear = 2020;
var birthYear = 1999;
var age = currentYear - birthYear;

document.write( "Current year: " + currentYear);
document.write( "<br>" + "Birth year: " + birthYear);
document.write( "<br>" +  "Your Age: " + age);



/////////////////////12 

document.write( "<h1>" + "The Geometrizer" + "</h1>");

var rad = 20; //in cm 
var circum = 2 * 3.142 * rad;
var area = 3.142 * rad * rad;

document.write("The radius of circle is: " + rad + " cm");
document.write("<br>" + "The circumference is: " + circum + " cm" );
document.write("<br>" + "The area is: " + area + " cm^2" );




/////////////////////////13

document.write( "<h1>" + "The Lifetime Supply Calculator" + "</h1>");

var favSnack = "Lays chips";
var curAge = 21;
var maxAge = 65;
var amountPerDay = 20;
var totalEat = (maxAge - curAge) * 1 * 365;
var totalPrice = (maxAge - curAge) * 20 * 365;

document.write( "Favourite snack: " + favSnack);
document.write( "<br>" + "Current age: " + curAge);
document.write( "<br>" + "Estimated maximun age: " + maxAge);
document.write( "<br>" + "Amount of snacks per day: " + amountPerDay);
document.write( "<br>" + "You will need " + totalEat + ' ' + favSnack + " to last you until the ripe old age of " + maxAge);
document.write( "<br>" + "You will need total price:  " + totalPrice +"PKR"  + " for Lays to last you until the ripe old age of " + maxAge);
