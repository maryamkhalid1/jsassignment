   


// CHAPTER#01 ("ALERT")

//1.Write a script to greet your website visitor using JS alert box.
//var greet=prompt("enter your greet");
//alert(greet);

//2.Write a script to display following message on your web page:
//alert('Erorr! Please enter valid password');

//3. Write a script to display following message on your web page: (Hint : Use line break)
//alert('Welcome On JS Land.... \n Happy Coding!');

//4. Write a script to display following messages in sequence:
//alert('Welcome On JS Land...');

//5. Generate the following message through browser’s developer console:
//alert('Hello... I can run JS through my web brower's console.')

//6. Make use of alerts in your new/existing HTML & CSS project:
//alert();

//7. Practice placement of <script></script> element in following sections of your project in exercise 6:
//a. Head b. Body (before your page’s HTML)
//c. Body (inside your page’s HTML) d. Body (after your page’s HTML)
//<html>
   // <head>
   //     <script>
//
  //      </script>
  //  </head>
  //  <script>
//
 //   </script>
 //   <body>
  //      <script>
//
       // </script>
   // </body>
   // <script>
//
 //   </script>
//</html>
       // CHAPTER#02 ("VARIABLES FOR STRINGS")

// 1. Declare a variable called username.
//var a = "username";
//alert(a);

//2.Declare a variable called myName & assign to it a string that represents your Full Name.
//var myName="MARYUM KHALID";
//alert('MARYUM KHALID');

//3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.
//var a="titled message";
//var b="Hello World";
//var c=a+b;
//alert(c);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
//var a="Jhone Doe";
//alert(a);
//var b="15 years old";
//alert(b);
//var c="Certified Mobile Application Development";
//alert(c);

//5. Write a script to display the following alert using one JS variable:
//alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
//var a="my email address id is  ";
//var b="example@example.com";
//var c=a+b;
//alert(c);

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
//var book="I am trying to learn from the Book A smarter way to learn JavaScript";
//alert(book);
 
//8. Write a script to display this in browser through JS:
//document.write('Yah! I can write HTML content through JavaScript');

//9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
//alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

//    CHAPTER#03 "VARIABLES FOR NUMBERS"

//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
//var age="I am 22 years old";
//alert(age);

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
//var visit="You have visited this site 14 times";
//for( x=1; x<=14; x++){ alert(visit)}

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
//var birthYear="My birth year is 1998";
//document.write(birthYear);

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
//document.write('Jhone Doe ordered 5T-shrit(s) on XYZclothing store');

// CHAPTER#04 "VARIABLE NAMES: LEGAL & ILLEGAL"

//1. Declare 3 variables in one statement.
//var a,b,c;

//2. Declare 5 legal & 5 illegal variable names.
//LEGAl variables:
//var userName;
//var _userName;
//var _userName123;
//var a1;
//var username123;
//ILLEGAL variables:
//var 1user;
//var #userName;
//var @user123;
//var &rose;
//var 'girl;

//3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________ ..
//document.write('<h1> " Rules for naming JS variables"\n  \n Variable names can only contain _names_____, __$____, ____-___ and __1stvaribles____. For example $my_1stVariable \n \n Variables must begin with a __$____, ___-___ or _names____. For example $name, _name or name \n \n Variable names are case ___sensetive______ \n \n Variable names should not be JS _keywords________ ')

// CHAPTER#05 "MATH EXPRESSIONS"

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//var a=3;
//var b=5;
//var c=a+b;
//document.write('The sum 3 and 5 is' + ' ' + c);

//2. Repeat task1 for subtraction, multiplication, division & modulus.
//Subtraction,
//var x=3;
//var y=5;
//var z=y-x;
//document.write('The sub 5 and 3 is' + ' ' + z);
//Multiplication,
//var a=5;
//var b=3;
//var c=a*b;
//document.write('The multiple 5 and 3 is' + ' ' + c);
//Division,
//var x=6;
//var y=2;
// var z=x/y;
//document.write('The division 6 and 2 is' + ' ' + z);
//Modulus,
//var a=9;
//var b=3;
//var c=a%b;
//document.write('The modulus 9 and 3 is' + ' ' + c);

//3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”. 
// var num;
// document.write("Value after variable declaration is: " +num);
// num = 5;
// document.write("<br>Initial value: " + num);
// num = ++num;
// document.write("<br>Value after increment is: " + num);
// num = num + 7;
// document.write("<br>Value after addition is: " + num);
// num = --num;
// document.write("<br>Value after decrement is: " + num);
// num = num % 3;
// document.write("<br>The remainder is : " + num);


//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output.
//var a = 600 ;
//var b=5;
//var c=a*b;
//document.write('Total cost to buy 5 tickets is' + ' ' + c +'PKR');

//5. Write a script to display multiplication table of any number in your browser.
//for(var i=1; i<=10; i++){
 //  document.write('4' + '*' + 'i' + '=' + 4*i + '<br>')
//}

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 
//  var tc = +prompt("Enter Temperature(Celsius):");
// var tf = (tc *(9/5)) + 32;
// document.write(tc + "(Celsius) to " + tf + "(Fahrenheit) Temperature.");
// document.write("<br>");
// var tf = +prompt("Enter Temperature(Fahrenheit):");
// var tc = (tf - 32) * (5/9);
// document.write(tf + "(Fahrenheit) to " + tc + "(Celsius) Temperature.");


//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.
// var q1 = +prompt("Enter Quantity for item 1 (price:650 PKR):");
// var q2 = +prompt("Enter Quantity for item 2 (price:100 PKR):");
// var p1 = 650;
// var p2 = 100;
// var t1 = p1 * q1;
// var t2 = p2 * q2;
// var s = 100;
// var t = t1 + t2 + s;
// document.write("<h2>Shopping Cart</h2>");
// document.write("Price of Item 1 is " + p1 + " PKR");
// document.write("<br>Quantity of Item 1 is " + q1);
// document.write("<br>Price of Item 2 is " + p2 + " PKR");
// document.write("<br>Quantity of Item 2 is " + q2);
// document.write("<br>Shipping Charges " + s + " PKR");
// document.write("<br>Total Cost of your order is " + t + " PKR");


//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
// var totalMarks = +prompt("Enter Total Marks: ");
// var obtainedMarks = +prompt("Enter Obtained Marks: ");
// var per = (obtainedMarks/totalMarks)*100;
// document.write("<h2>Mark Sheet</h2>");
// document.write("Total Marks: " + totalMarks);
// document.write("<br>Obtained Marks: " + obtainedMarks);
// document.write("<br>Percentage: " + per + "%");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// var dollars = +prompt("Enter Amount (Dollar): ");
// var riyals = +prompt("Enter Amount (Riyal): ");
// var amount = dollars*104.80 + riyals*25;
// document.write("<h2>Currency in PKR</h2>");
// document.write("Total Currency in PKR: " + amount);



//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
// var number = +prompt("Enter any number: ");
// var result = ((number + 5)*10)/2;
// document.write("Result: " + result);


//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
//Output them to the screen like so: “They are either NN or NN years old”.
//  var currentYear = +prompt("Enter Current Year: ");
// var birthYear = +prompt("Enter Birth Year: ");
// var age = currentYear - birthYear;
// document.write("<h2>Age Calculator</h2>");
// document.write("Current Year: " + currentYear);
// document.write("<br>Birth Year: " + birthYear);
// document.write("<br>Your Age is: " + age);


//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// var radius = +prompt("Enter the value of radius:");
// var circumference = 2*3.142*radius;
// var area = 3.142*radius*radius;
// document.write("<h2>The Geometrizer</h2>");
// document.write("<br>Radius of a circle: " + radius);
// document.write("<br>The circumference is: " + circumference);
// document.write("<br>The area is: " + area);

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
// var snacks = prompt("Enter your favourite Snacks:");
// var currentAge = +prompt("Enter your current age:");
// var maximumAge = +prompt("Enter your maximum age(estimated):");
// var snacksAmount = +prompt("Enter your estimated amount per day (as a number):");
// var requiredSnacks = ((maximumAge - currentAge)*365)*snacksAmount;
// document.write("<h2>The Lifetime Supply Calculator</h2>");
// document.write("<br>Favourite Snack: " + snacks);
// document.write("<br>Current Age: " + currentAge);
// document.write("<br>Estimated Maximum Age : " + maximumAge);
// document.write("<br>Amount of Snacks per day: " + snacksAmount);
// document.write("<br>You will need " + requiredSnacks + " " + snacks + " to last you until the ripe old age of " + maximumAge);




//   CHAPTERS#6-9

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
//var x=10;
//var y=++a + a++ + --a + a--;
//alert(y);

//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
//var a=2;
//var b=1;
//var c=--a - --b + ++b + b--;
//alert(c);

//3. Write a program that takes input a name from user & greet the user.
//var a=prompt("Enter your name", "Your name is:");
//var b=prompt("Enter your greet", "Your greet is:");
//alert(a,b);

//4.Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// var num = +prompt("Enter a number: ","For Table");
// var i;
// if(num === 0){
//     document.write("Table of 5");
//     document.write("<br>");
//     for( i = 1 ; i <= 10; i++){
//         document.write( 5 + " x " + i + " = " + 5*i);
//         document.write("<br>");
//     }
// }
// else{
//     document.write("Table of " + num);
//     document.write("<br>");
//     for( i = 1 ; i <= 10; i++){
//         document.write( num + " x " + i + " = " + num*i);
//         document.write("<br>");
//     }
// }


//5.Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. 
//d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var subject1 = prompt("Enter First Subject Name: ");
// var subject2 = prompt("Enter Second Subject Name: ");
// var subject3 = prompt("Enter Third Subject Name: ");
// var maxMarks = 100;
// var totalMarks = maxMarks*3;
// var obtainedMarks1 = +prompt("Enter " + subject1 + " Marks:");
// var obtainedMarks2 = +prompt("Enter " + subject2 + " Marks:");
// var obtainedMarks3 = +prompt("Enter " + subject3 + " Marks:");
// var obtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var per = (obtainedMarks/totalMarks)*100;
// var per1 = (obtainedMarks1/maxMarks)*100;
// var per2 = (obtainedMarks2/maxMarks)*100;
// var per3 = (obtainedMarks3/maxMarks)*100;
// document.write("<h4>Subjects &nbsp; Total Marks &nbsp; Obtained Marks &nbsp; Percentage</h4>");
// document.write(subject1 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + maxMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks1 + "&nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per1 + "%");
// document.write("<br>");
// document.write(subject2 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + maxMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks2 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per2 + "%");
// document.write("<br>");
// document.write(subject3 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + maxMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks3 + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per3 + "%");
// document.write("<br>");
// document.write("&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + totalMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + obtainedMarks + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + per + "%");




//CHPTERS#9-11

//1.Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”.
//var city=+prompt('Enter your city name');
//if(city==='Karachi'){
   //alert('Welcome to city of lights')
//}
//else{
   //alert('Welcome to good city')
//}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
//var gender=+prompt('Enter your gender');
//if(gender==='male'){
   //alert('Good Morning Sir:')
//}
//else if(gender==='female'){
   //alert('Good Morning Madam:')
//}
//else{
   //alert('Good Morning')
//}

// // 3
// var signal = prompt("Enter your Traffic Signal Color:");
// if(signal=="RED" || signal=="Red" || signal=="red"){
//     alert("Must Stop");
// }
// else if(signal=="YELLOW" || signal=="Yellow" || signal=="yellow"){
//     alert("Ready to Move");
// }
// else if(signal=="GREEN" || signal=="Green" || signal=="green"){
//     alert("Move now");
// }
// else{
//     alert("Please enter correct Traffic Signal Color like Red, Yellow or Green!");
// }

// // 4
// var fuel = +prompt("Enter your remaining Fuel in Car (Litres)");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car");
// }

// // 5
// // ...........a...........
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // ...........b...........
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // ...........c...........
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // ...........d...........
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // ...........e...........
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// // ...........f...........
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// // 6
// var totalMarks=300;
// var marks1 = +prompt("Enter First Subject Marks: ");
// var marks2 = +prompt("Enter Second Subject Marks: ");
// var marks3 = +prompt("Enter Third Subject Marks: ");
// var obtainedMarks = marks1 + marks2 + marks3;
// var per = (obtainedMarks/totalMarks)*100;
// document.write("<h2>Mark Sheet</h2>");
// document.write("<br>Total Marks: " + totalMarks);
// document.write("<br>Obtained Marks: " + obtainedMarks);
// document.write("<br>Percentage: " + per + "%");
// if(per>=80 && per<=100){
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// }
// else if(per>=70 && per<=80){
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good");
// }
// else if(per>=60 && per<=70){
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// }
// else if(per<60){
//     document.write("<br>Grade: Fail");
//     document.write("<br>Remarks: Sorry");
// }

// // 7
// var secrectnum = 6;
// var num = +prompt("Guess the Number Between 1-10");
// if(num==secrectnum){
//     alert("Bingo! Correct answer");
// }
// else if(num+1 == secrectnum || num-1 == secrectnum){
//     alert("Close enough to the correct answer");
// }
// else if(num>10){
//     alert("You Entered a number which is beyond the limit So Enter again a number which is between 1-10");
// }
// else{
//     alert("You Entered Wrong Number!")
// }

// // 8
// var num = +prompt("Enter a number to check whether it is divisible by 3 or not?");
// if(num%3 == 0){
//     alert("Yes, " + num + " is divisible by 3");
// }
// else{
//     alert("No, " + num + " is not divisible by 3");
// }

// // 9
// var num = +prompt("Enter a number to check whether it is EVEN or ODD Number?");
// if(num%2 == 0){
//     alert(num + " is an Even Number");
// }
// else{
//     alert(num + " is an Odd Number");
// }

// // 10
// var tem = +prompt("Enter Temperature in celsius: ");
// if(tem>40){
//     alert("It is too hot outside.");
// }
// else if(tem>30){
//     alert("The Weather today is Normal.");
// }
// else if(tem>20){
//     alert("Today’s Weather is cool.");
// }
// else if(tem>10){
//     alert("OMG! Today’s weather is so Cool.");
// } 

// // 11
// var num;
// var num1 = +prompt("Enter First Number:");
// var num2 = +prompt("Enter Second Number:");
// var operator = prompt("Enter Operator (+, -, *, /, %)");
// if(operator == "+"){
//     num = num1 + num2;
//     alert(num1 + " + " + num2 + " = " + num);
// }
// else if(operator == "-"){
//     num = num1 - num2;
//     alert(num1 + " - " + num2 + " = " + num);
// }
// else if(operator == "*"){
//     num = num1 * num2;
//     alert(num1 + " x " + num2 + " = " + num);
// }
// else if(operator == "/"){
//     num = num1 / num2;
//     alert(num1 + " / " + num2 + " = " + num);
// }
// else if(operator == "%"){
//     num = num1 % num2;
//     alert(num1 + " % " + num2 + " = " + num);
// }
// else{
//     alert("You Entered Wrong Operator");
// }



// // Assignment # 12-13
// // 1
// var response = prompt("Enter any Character:");
// if(+response >=0 && +response <= 9){
//     alert("It is a Number");
// }
// else if(response.charCodeAt(0) >=65 && response.charCodeAt(0) <= 90){
//     alert("It is a Uppercase Letter");
// }
// else if(response.charCodeAt(0) >=97 && response.charCodeAt(0) <= 122){
//     alert("It is a Lowercase Letter");
// }
// else{
//     alert("It is not a Number or Upper and Lower Case letter.");
// }

// // 2
// var integer1 = +prompt("Enter First Integer:");
// var integer2 = +prompt("Enter Second Integer:");
// if(integer1<integer2){
//     alert(integer2 + " is greater than " + integer1);
// }
// else if(integer1>integer2){
//     alert(integer1 + " is greater than " + integer2);
// }
// else{
//     alert(integer1 + " and " + integer2 + " are equal.");
// }

// // 3
// var number = +prompt("Enter Any Number:");
// if(number<0){
//     alert(number + " is a negative number.");
// }
// else if(number>0){
//     alert(number + " is a positive number.");
// }
// else{
//     alert(number + " is zero.");
// }

// // 4
// var vowels = prompt("Enter Any Character:");
// if(vowels === "A" || vowels === "a" || vowels === "E" || vowels === "e" || vowels === "I" || vowels === "i" || vowels === "O" || vowels === "o" || vowels === "U" || vowels === "u"){
//     alert(vowels + " is a vowel");
// }
// else{
//     alert(vowels + " is not a vowel");
// }

// // 5
// var password = "Usama Aqeel";
// var userPassword = prompt("Enter Your Password: ");
// if(userPassword == 0){
//     alert("Please enter your Password!");
// }
// else if(userPassword === password){
//     alert("“Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }

// // 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// alert(greeting);

// // 7
// var time = +prompt("Enter Time in 24 Hour Format like(19.00, 21.00, 00.00 etc");
// if(time>=5 && time<12){
//     alert("Good Morning");
// }
// else if(time>=12 && time<17){
//     alert("Good Afternoon");
// }
// else if(time>=17 && time<21){
//     alert("Good Evening");
// }
// else if(time>=21 && time<=23.59){
//     alert("Good Night");
// }
// else if(time>=0 && time<5){
//     alert("Good Night");
// }
// else{
//     alert("Please, Enter Correct Time!");
// }





// // Assignment # 14-16
// // 1
// var arr = [];

// // 2
// var arr1 = new Array();

// // 3
// var student = ["Abu Bakar", "Umar", "Usman", "Ali", "Muavia", "Hassan", "Hussain"];

// // 4
// var number = [6, 11, 12, 13, 15, 20, 26];

// // 5
// var boolean = [true, false, true];

// // 6
// var mixed = ["Usama", 53, "Aqeel", true];

// // 7
// var qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil.", "Phd"];
// document.write("<h3><br>QUALIFICATIONS:</h3>");
// for(var i=0; i<qualification.length; i++){
//     document.write("<br>" + (i+1) + ") " + qualification[i]);
// }

// // 8
// var students = ["Muhammad", "Usama", "Aqeel"];
// var marks = [450, 300, 400];
// for(var i=0; i<marks.length; i++){
//     per = (marks[i]/500)*100;
//     document.write("<br>Score of " + students[i] + " is " + marks[i] + ". Percentage: " + per + "%");
// }

// // 9
// var color = ["green", "white", "yellow", "orange"];
// document.write(" <h4>Orignal Array with four Colors:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........a...........
// var add = prompt("Enter a color which you want to add in beginning:");
// color.unshift(add)
// document.write("<br> <h4>After Addition in Beginning:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........b...........
// var add = prompt("Enter a color which you want to add in end:");
// color.push(add)
// document.write("<br> <h4>After Addition in Last:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........c...........
// var add1 = prompt("Enter first color which you want to add in beginning:");
// var add2 = prompt("Enter second color which you want to add in beginning:");
// color.unshift(add1, add2)
// document.write("<br> <h4>After Addition of two Colors in Beginning:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........d...........
// color.shift()
// document.write("<br> <h4>After Deletion in Beginning:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........e...........
// color.pop()
// document.write("<br> <h4>After Deletion in End:</h4>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........f...........
// var index = +prompt("Enter index number where you want to add color");
// var add = prompt("Enter a color which you want to add in index[" + index + "]:");
// color.splice(index, 0, add)
// document.write("<br> <h4>After Addition in Middle of the colors Array:</h4>");
// document.write("You Added a Color at index[" + index + "]<br>");
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }
// // ...........g...........
// var index = +prompt("Enter index number where you want to delete color");
// var quantity = prompt("How many colors do you want to delete from index[" + index + "]?");
// color.splice(index, quantity)
// document.write("<br> <h4>After Deletion in Middle of the colors Array:</h4>");
// document.write("You Delete " + quantity + " Colors at index[" + index + "]<br>" );
// for(var i=0; i<color.length; i++){
//     document.write(color[i] + "<br>");
// }

// // 10
// var score = [320, 230, 480, 120,];
// document.write("<br><h3>Scores of Students: ");
// for(var i=0; i<score.length; i++){
//     document.write(score[i] + ", ");
// }
// score.sort()
// document.write("<br>Ordered Scores of Students: ");
// for(var i=0; i<score.length; i++){
//     document.write(score[i] + ", ");
// }

// // 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = [];
// selectedCities = cities.slice(2,5)
// document.write("<h4>Cities List:<br>");
// document.write(cities);
// document.write("<br>");
// document.write("<br>Selected Cities List:<br>");
// document.write(selectedCities);

// // 12
// var arr = ["This", "is", "my", "cat"];
// document.write("<h3>Array:<br>");
// document.write(arr);
// document.write("<br><br>String:<br>");
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i] + " ");
// }

// // 13
// var arr = [];
// arr.push("Usama");
// document.write(arr + "<br>");
// arr.push("Talha");
// document.write(arr + "<br>");
// arr.push("Haris");
// document.write(arr + "<br>");
// arr.push("Misal");
// document.write(arr + "<br>");

// // 14
// var arr = [];
// arr.unshift("Usama");
// document.write(arr + "<br>");
// arr.unshift("Talha");
// document.write(arr + "<br>");
// arr.unshift("Haris");
// document.write(arr + "<br>");
// arr.unshift("Misal");
// document.write(arr + "<br>");

// // 15






// // Assignment # 17-20
// // 1
// var student = [["Usama",22],["Haris",23]["Talha",23]];
// document.write(student[1][1]);

// // 2
// var num = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// document.write("<h1>");
// for(var i=0; i<num.length; i++){
//     for(var j=0; j<4; j++){
//         document.write(num[i][j] + " ");
//     }
//     document.write("<br>");
// }

// // 3
// for(var i=1; i<=10; i++){
//     document.write("<h2>" + i);
// }

// // 4
// var num = +prompt("Enter a number to show its Multiplication Table:");
// var length = +prompt("Enter the length of Multiplication Table:");
// document.write("<h2>Table of " + num + "</h2>");
// document.write("<h4><br>");
// for(var i = 1 ; i <= length; i++){
//     document.write( num + " x " + i + " = " + num*i);
//     document.write("<br>");
// }

// // 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write("<h3>");
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>");
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// // 6
// document.write("<br><h3>Counting:</h3>");
// for(var i=1; i<=15; i++){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Reverse Counting:</h3>");
// for(var i=10; i>=1; i--){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Even:</h3>");
// for(var i=0; i<=20; i=i+2){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Odd:</h3>");
// for(var i=1; i<=20; i=i+2){
//     document.write(i + ", ");
// }
// document.write("<br>");
// document.write("<br><h3>Series:</h3>");
// for(var i=2; i<=20; i=i+2){
//     document.write(i + "k, ");
// }

// // 7
// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to our Bakery. What do you want to order Sir/Ma'am?");
// for(var i=0; i<A.length; i++){
//     if(A[i]==order){
//         alert(A[i] + " is available at index " + i + " in our Bakery.");
//         break;
//     }      
// }

// // 8
// var A = [24, 53, 78, 91, 12];
// var max = A[0];
// for(var i=1; i<A.length; i++){
//     if(A[i]>max){
//         max=A[i];
//     }
// }
// document.write("<br><h3>Array Items: " + A);
// document.write("<br>The Largest Number is: " + max);

// // 9
// var A = [24, 53, 78, 91, 12];
// var min = A[0];
// for(var i=1; i<A.length; i++){
//     if(A[i]<min){
//         min=A[i];
//     }
// }
// document.write("<br><h3>Array Items: " + A);
// document.write("<br>The Smallest Number is: " + min);

// // 10
// for(var i=5; i<=100; i=i+5){
//     document.write(i + ", ");
// }






























