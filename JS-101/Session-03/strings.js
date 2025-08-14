// Strings are used to write alphabetical statements and 

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