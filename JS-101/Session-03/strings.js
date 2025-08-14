// Strings are used to write alphabetical statements and Are Immutable (CANNOT BE UPdated)

let str = "";
let str1 = "Hello world";

console.log(str);
console.log(str.length);          // empty string legth is 0
console.log(str1);
console.log(str1.length);         // o/p is 11 as it even counts space 

//------------------------------ Escape Sequence -------------------------------

str = "This is doubt quote (\")";   // "\" is used as escape character, it will make immediate next character escape and priint it 
console.log(str);

str = "this is sinle slash \\"
// str1 = "this is double slash \\\";     // this will make error as first slash will make second escape and third will make the " escape due to which we wont be able to close
let str2= "this is double slash \\\\";

console.log(str);
console.log(str2);

// ------------------------------------- Concatenation and Add ons --------------------------------

str = "hello /n world";         // prints to next line 
str1 = "this is /t my code";        // adds tab space in between

console.log(str);
console.log(str1);

str1 = "concatenation1";
str2 = " +concatenation2";

console.log(str1 + str2);


//---------------------------------- String Indexes -------------------------------

//index starts from (0) , that is first character in string has index value 0

//------------------------------ charAt() method --------------------------

str = "Hello";
console.log(str.charAt(4));       // if we put index value out of range like charAt(30) it wont give error just will return white space

//------------------------------- box method -------------------------------

str = "Hello";
console.log(str[4])               // this solves the index of of range issue (it returns "undefined")which explains if there is white space or its out of range


//---------------------------------------- Question 1 ----------------------------------------------------

/* you are ceating a team name for that make a function "findTeamName()" which accepts 2 
values name1 and name2. the team name is concatination of first 2 charaters of name */

function findTeamName(name1,name2){
    let a = name1.charAt(0);
    let b = name2.charAt(0);
    let teamName = a + b;
    return teamName;
}

console.log("Team Name: "+findTeamName("akash","mohit"));    // names passed as parameters

//---- Optimal Solution ----------

function findTeamname1(name1,name2){
    return name1[0] + name2[0];
}
console.log("Team name : "+findTeamname1("Shreya","Sonu"));

//------------------------------------ Question 2 ---------------------------------

/* if values stored already how to use them in messages  */

let userName = "Divya";
let age = 21;

console.log("hey " +userName +"Welcome Back\nYour Current Age is " +age );


//------------------------------------------ Template String -------------------------

/* with template strings we dont need to concatenate the defined stuff and all we can directly use it 
also no need of "\n and \t"  
it is defind by `` instead of "" or ''
*/

userName = "Anaya";
age=21;

console.log(`Hey ${userName} how are you ? 
    today your age is ${age}`);                  // thats how pre defined are used using ${}


//---------------------------Question ------------------------------

/* Implement a function getCircle() where it takes a input r (radius) and print 
a string (if the radius is r then the diameter is 2r) where r and 2r should be the values */

function getCircle(r){
    let r2 = r * 2;
    return r2;
}

getCircle(r=2);
let r2 = r2;
r1 = r1;
console.log(`If the Radius is ${r} then the radius of the circle should be ${r2} `);