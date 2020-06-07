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
//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables.
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
//Output them to the screen like so: “They are either NN or NN years old”.
//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
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
//5.Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. 
//d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

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































