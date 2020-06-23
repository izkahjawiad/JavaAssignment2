

// // //Chapter No.21 to 25
// // //Q - 1
//     var firstName=prompt("Enter First Name!");
//     var lastName = prompt("Enter Last Name!");
//     var fullName= firstName+ " " +lastName;
//     document.write("<h1> Welcome " + fullName);

// // //Q - 2

//     var mobile=prompt("Enter your favorite mobile phone model!");

//     document.write("<h1> My favorite phone is: " + mobile);
//     document.write("<br>Length of string "+ mobile.length);

// // //Q - 3

//     var word="Pakistan";
//     var b = prompt("Letter: ");
//     var searchedIndex=word.indexOf(b);
//     document.write("<h1> String: "+word );
//     document.write("<br> Index: " + searchedIndex);

// // //Q - 4

//     var str = "Hello world.";
//     var searchWord=prompt("Letter: ");
//     var b = str.lastIndexOf(searchWord);
//     document.write("<h1> String: "+str + "<br> Last index of "+searchWord+" is " + b);

// // //Q - 5

//     var str="Pakistan";
//     var searchWord = prompt("Index: ");
//     document.write("<h1>String: " +str);
//     document.write("<br> Character at index 3:" +str[searchWord]);


// // //Q - 6

//     var str1 = "Hello ";
//     var str2 = "world!";
//     var str3 = " Have a nice day!";
//     var res = str1.concat(str2, str3);
//     var firstName=prompt("Enter First Name!");
//     var lastName = prompt("Enter Last Name!");
//     var fullName=firstName.concat(lastName);
//     document.write("<h1> Welcome " + fullName);

// // //Q - 7

//     var str = "Hyderabad";
//     var res = str.replace("Hyder", "Islam");
//     document.write("<h1> City: " + str +"<br> After replacement: " + res);

// // //Q - 8

//     var str = "Ali and Sami are best friends. They play cricket and football together.";
//     var res = str.replace(/and/g, "&");
//     document.write("<h1> Actual string: " + str +"<br> After replacement: " + res);

// // //Q - 9

//     var str = "472";
//     var num=parseInt(str);
//     document.write("<h1> Value: "+str + "<br> Type: string");
//     document.write("<h1> <br> Value: "+ num + "<br> Type: number");

// // //Q - 10

//     var str=prompt("Enter any text!");
//     var res = str.toLocaleUpperCase();
//     document.write("<h1> User input: " + str);
//     document.write("<br>Upper case "+ res);

// // //Q - 11

//     var str=prompt("Enter any text!");
//     document.write("<h1> User input: " + str);
//     str = str.toLowerCase();   
//     str = str.split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

//     }
//     str.join(' '); 
//     document.write("<br>Title case: "+ str);
    
// // //Q -12

//     var num = 35.36;
//     var myTrunc = num.toFixed(4);
//     document.write("<h1> Number: "+num );
//     document.write("<br> Result: "+ myTrunc);

// // //Q - 13

//     var userName=prompt("Enter Username!");
//     var found=0
//     for (let i=0; i<=userName.length; i++){
//         if (userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!')
//             {
                
//                 found=1;
//                 break;
//             }
//         }
//     if (found)
//     document.write("Please enter a valid username!");
//     else
//     document.write("Thank you! you entered a valid username");

// // //Q - 14

//     var a=["cake", "apple pie", "cookie", "chips", "patties"]
//     var order=prompt("Welcoe to ABC Bakery. What do you want to order sir/Ma'am?");
//     var found=0, i=0;

//     for( i =0; i<a.length;i++){
//         if(a[i] === order){
            
//             found=1;
//             break
//         }

//     }
//     if(found){
//         document.write(order+" is available at index "+ (i+1) +"in our bakery");
//     }
//     else{
//         document.write("We are sorry. "+ order +" is not available in our bakery.")
//     }

// // //Q - 15

//     var password=prompt("Enter valid passwordz");
//     var found=0, i=0;

//     for( i =0; i<a.length;i++){
//         if(a[i] === order){
            
//             found=1;
//             break
//         }

//     }
//     if(found){
//         document.write(order+" is available at index "+ (i+1) +"in our bakery");
//     }
//     else{
//         document.write("We are sorry. "+ order +" is not available in our bakery.")
//     }



// // //Q - 16

//     var str="University of Karachi";
//     str = str.split('');
//     for (let i =0; i<str.length; i++){
//         document.write(str[i]+"<br>");
//     }


// // //Q - 17

//     var str=prompt("Enter any input?");
//     document.write("<h1> User input: " + str);
//     document.write("<br> Last character: " + str[str.length-1])

// // //Q - 18

//     var str="The quick brown fox jumps over the lazy dog.";
//     var word="the";
//     var a = str.toLowerCase();   
//     var a = a.split(" "); 
//     let count = 0; 
//     for (let i = 0; i <= a.length; i++)  
//     { 
    
//     if (a[i] === word) 
//         count++; 
//     }
//     document.write("<h1> Text: " + str);
//     document.write("<br> There are " + count + " occurrence(s) of word" + word)


// //// Chapter No.26 to 30

// // //Q - 1

//     var n=prompt("Enter any positive integer?");
//     document.write("<h1> number: " + n);
//     document.write("<br> round off value: "+ Math.round(n));
//     document.write("<br> floor value: "+ Math.floor(n));
//     document.write("<br> ceil value: "+ Math.ceil(n));

// // //Q - 2

//     var n=prompt("Enter any negative integer?");
//     document.write("<h1> number: " + n);
//     document.write("<br> round off value: "+ Math.round(n));
//     document.write("<br> floor value: "+ Math.floor(n));
//     document.write("<br> ceil value: "+ Math.ceil(n));

// // //Q - 3

//     var n=prompt("Enter any number?");
//     document.write("<h1> The absolute value of " + n + " is "+ Math.abs(n));

// // //Q - 4

//     var bigDecimal = Math.random();
//     var improvedNum = (bigDecimal * 6) + 1;
//     var numberOfStars = Math.floor(improvedNum);
//     document.write("<h1> random dice value: " +  numberOfStars);

// // //Q - 5

//     var bigDecimal = Math.random();
//     var improvedNum = (bigDecimal * 2) + 1;
//     var numberOfStars = Math.floor(improvedNum);
//     if (numberOfStars === 1)
//         document.write("<h1>" +  numberOfStars +"<br> random coin value: Tails");
//     else
//         document.write("<h1>" +  numberOfStars +"<br> random coin value: Heads");

// // //Q - 6

//     var bigDecimal = Math.random();
//     var improvedNum = (bigDecimal * 100) + 1;
//     var numberOfStars = Math.floor(improvedNum);
//     document.write("<h1> random number between 1 and 100: " +  numberOfStars );

// // //Q - 7

//     var weight =prompt("Enter your weight in kilograms?");
//     var parseWet=parseFloat(weight);
//     document.write("<h1> The weight of user is "+ parseWet +" kilograms");

// // //Q - 8

//     var bigDecimal = Math.random();
//     var improvedNum = (bigDecimal * 10) + 1;
//     var numberSecret = Math.floor(improvedNum);

//     var userInput =prompt("Enter your any number in between 1 to 10?");
//     if (numberSecret === userInput)
//     document.write("<h1> Congratulations the user");
//     else
//     document.write("<h1> Try again"+ numberSecret);

// //// Chapter No.31 to 34
// // //Q - 1

// var rightNow= new Date();
// document.write("<h1>"+ rightNow);

// // //Q - 2

//     var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var rightNow= new Date();
//     var theMonth= rightNow.getMonth()
//     document.write("<h1> Current month: "+ monthName[theMonth]);
    
// // //Q - 3

//     var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     var now = new Date();
//     var theDay = now.getDay();
//     var nameOfToday = dayNames[theDay];
//     document.write("<h1> Today is "+ nameOfToday);
    
// // //Q - 5

//     var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     var now = new Date();
//     var theDay = now.getDay();
//     var nameOfToday = dayNames[theDay];
//     if (theDay === 0 || theDay === 6)
//         document.write("<h1> its Fun Day ");
//     else {
//         document.write("<h1> Its working Day ");
//     }

// // //Q - 6

//     var now = new Date();
//     var theDate = now.getDate();
//     if (theDate < 15 )
//         document.write("<h1> First fifteen days of the month.");
//     else {
//         document.write("<h1> Last days of the month ");
//     }
// // //Q - 7

//     var firstDate = new Date("Jan 1, 1970");
//     var today= new Date();
//     var msTday=today.getTime();
//     var msFirstDate=firstDate.getTime();
//     var msDiff=msTday-msFirstDate;
//     var mintDiff = msDiff / (1000 * 60);

//     document.write("<h2> Current Date: "+ today);
//     document.write("<br> Elapsed milliseconds since January 1, 1970: "+ msDiff);
//     document.write("<br> Elapsed minutes since January 1, 1970: "+ mintDiff);
    

// // //Q - 8

//     var now = new Date();
//     var theHours = now.getHours;
//     if (theHours >= 12 )
//         document.write("<h1> It's PM.");
//     else {
//         document.write("<h1> It's AM ");
//     }

// // //Q - 9

//     var laterDate = new Date("Dec 31, 2020");
//     document.write("<h1> Later date: " + laterDate)

// // //Q - 10
// function calcDayOfRamzan(){
//     var ramzanDate = new Date("June 18, 2015");
//     var today= new Date();
//     var msTday=today.getTime();
//     var msRamzanDate=ramzanDate.getTime();
//     var msDiff=msTday-msRamzanDate
//     var dayDiff = msDiff / (1000 * 60 * 60 * 24);
//     dayDiff = Math.floor(dayDiff);
//     document.write("<h1> " + dayDiff + " days have passed since 1st Ramzan, 2015");
// }

// // //Q - 11

//     var referDate = new Date("Dec 05, 2015");
//     var beginningDate = new Date("Jan 1, 2015");
//     var msReferDate=referDate.getTime();
//     var msBeginningDate=beginningDate.getTime();
//     var msDiff=msReferDate-msBeginningDate;
//     var secondDiff = msDiff / (1000 * 60 );
//     secondDiff = Math.floor(secondDiff);
//     document.write("<h1> On reference date " + referDate );

//     document.write("<br> " + secondDiff + " second had passed sience beginning of 2015");

// // //Q - 12

//     var today = new Date();
//     var oneHourAgo =  new Date();   
//     oneHourAgo.setHours(today.getHours() - 1);
//     document.write("<h1> Current date: " + today );
//     document.write("<br> 1 hour ago, it was " + oneHourAgo);

// // //Q - 13

//     var today = new Date();
//     var hundredYearsAgo =  new Date();   
//     hundredYearsAgo.setFullYear(today.getFullYear() - 100);
//     alert("Current date: " + today + "\n100 years back, it was " + hundredYearsAgo);

// // //Q - 14

//     var age=prompt("Enter your age");
//     var birthYear = new Date();
//     birthYear.setFullYear(birthYear.getFullYear() - age);
//     document.write("<h1> Your age is " + age );
//     document.write("<br> Your birth year is " + birthYear.getFullYear());

// // //Q - 15

//     var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var name="ABC Customer";
//     var currentDate = new Date();
//     var month=currentDate.getMonth();
//     var consumedUnit=410;
//     var pricePerUnit=16;
//     var surcharge=350;
//     var netAmount=consumedUnit*pricePerUnit;
//     var grossAmount=netAmount+surcharge;

//     document.write("<h1> K-Electric Bill </h1>");
//     document.write("<h2> <br>  Customer Name: " + name);
//     document.write("<br> Month: " + monthName[month]);
//     document.write("<br> Number of units: " + consumedUnit);
//     document.write("<br> Charges per unit: " + pricePerUnit);
//     document.write("<br><br> Net Amount Payable (within Due Date): " + netAmount );
//     document.write("<br> Late payment surcharge: " + surcharge);
//     document.write("<br> Gross Amount Payable (after Due Date): " + grossAmount );

// ////Chapter NO.35 TO 38
// // //Q - 1
// function currentDateTime(){
// var now= new Date();
// document.write("<h1>" + now);
// }
// currentDateTime();

// // //Q - 2
// function greetings(firstName, lastName){
//     var fullName=firstName+lastName;
// document.write("<h1> Welcome " +fullName);
// }
// firstName = prompt("First Name: ");
// lastName = prompt("Last Name: ");
// greetings(firstName,lastName);

// // //Q - 3
// function addTwoNum(){
//     var a =+prompt("Enter first number?");
//     var b = +prompt("Enter 2nd number?");
//     var c=0;
//     c=add(a,b);
//     document.write("<h1>Sum: " +c);
// }
// function add(num1,num2){
//     return(num1 +num2);
// }
// addTwoNum();

// // //Q - 4
// function Calc(){
//     var a =+prompt("Enter first number?");
//     var op =prompt("Enter operator for operatioin?");
//     var b = +prompt("Enter 2nd number?");
//     var c=0;
//     c=calculator35(a,op,b);
//     document.write("<h1>Result: " +c);
// }
// function calculator35(num1,op, num2){
//     switch(op){
//         case "+" :
//             return(num1+num2);
//             break;
//         case "-" :
//             return(num1-num2);
//             break;
//         case "*" :
//             return(num1*num2);
//             break;
//         case "/" :
//             return(num1/num2);
//             break;
//         case "%" :
//             return(num1%num2);
//             break;
//         default :
//             return("Invalid!")
//     }
// }
// Calc();

// // //Q - 5
// function squares(num1){
//     document.write("<h1> Squares= " + (num1*num1));
// }
// var num1 = prompt("Number: ");
// squares(num1);

// // //Q - 6
// function fact(){
//     var n=+prompt("Enter any number for factorial?");
//     document.write("<h1> Factorial of "+n+ " is: "+ factorial(n));
// }
// function factorial(num){
//     var fact=1;
//     for (let i=num; i>=1; i--)
//         {
//             fact=fact*i;
//         }
//         return fact;
// }
// fact();

// // //Q - 7
// function countingPrint(){
//     var startNum=+prompt("Enter start number?");
//     var endNum=+prompt("Enter end limit?");
//     for (let i=startNum; i<=endNum; i++)
//         {
//             document.write(i+"<br>");
//         }
// }
// countingPrint();

// // //Q - 8
// function calculateHypotenuse(){
//     var base=+prompt("Enter base of triangle?");
//     var perpendicular =+prompt("Enter perpendicular?");
//     var hypotenuse = calculateSquar(base) + calculateSquar(perpendicular);
//     document.write("<h1> Hypotenuse of a right angle triangle is: " +calculateSquar(hypotenuse));


//     function calculateSquar(num){
//         return (num*num);
//     }
// }
// calculateHypotenuse();

// // //Q - 9
// function areaOfTriangle(width, height){
//     return (width*height);
// }
// function calculateAreaOfTriangle(){
//     var width=prompt("Enter width of Triangle?");
//     var height=prompt("Enter height of Triangle?");
//     document.write("<h1> Area of Triangle is: " +areaOfTriangle(width,height))
// }
// calculateAreaOfTriangle();

// // //Q - 10
// function palindrome(str) {
//     var len = str.length;
//     var mid = Math.floor(len/2);
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// function pal(){
//     var str=prompt("Enter any string for Palindrome check?");
//     if (palindrome(str))
//         {
//             document.write("<h1> The string " + str +" is palindrome.")
//         }
//     else
//         document.write("<h1> The string " + str +" is not palindrome.")
// }
// pal();

// // //Q - 11
// function strC(a){
//     var b = stringTitalCase(a);
// }
// function stringTitalCase(){
//     var str=prompt("Enter any text!");
//     document.write("<h1> User input: " + str);

//     str = str.toLowerCase();   
//     str = str.split(' ');
 
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

//     }
//     var c = str.join(' '); 
//     document.write("<br>Title case: "+ c);

// }
// var a = "izkah jawaid";
// strC(a);

// // //Q - 12
// function findLongestWord(str) {

//     var strSplit = str.split(' ');
    
//     var longestWord = 0;
//     var longestIndex = 0;

//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){ 
//       longestWord = strSplit[i].length; 
//       longestIndex=i;
//        }
//     }
    
//     document.write("Longest Word: "+strSplit[longestIndex]);
//   }

// var str=prompt("Enter any string for finding longest word?");
// findLongestWord(str);

// // //Q - 13
// function wordCount(str, word){

//     var a = str.toLowerCase();   
//     var a = a.split(""); 
  
    
//     let count = 0; 
//     for (let i = 0; i <= a.length; i++)  
//     { 
    
//     if (a[i] === word) 
//         count++; 
//     }
//     document.write("<h1> Occurrence of letter " + word +" is: " + count); 
// }
// var str=prompt("Enter string?");
// var word=prompt("Enter letter to check its occurrence?");
// wordCount(str, word);

// // //Q - 14
// function calCircumference(radi){
//     const pi=3.14;
//     var a = 2*pi*radi;
//     return a;
// }
// function calArea(radi){
//     const pi=3.14;
//     var b = pi*radi*radi;
//     return b;

// }
// function rad(){
//     var r=prompt("Enter radius of circle?");
//     document.write("<h1> The circumference is " + calCircumference(r));
//     document.write("<br> The area is " + calArea(r));
// }

// rad();







