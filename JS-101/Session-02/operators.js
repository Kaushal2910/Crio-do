console.log(10 / 2);   // o/p = 5  (division gives quotient) 
console.log(10 % 2);   // o/p = 0  (modulus gives remainder) 

console.log(11 + 3 * 2 - 8); // js solves this and evaluates therfore this is call Expression

console.log(2 ** 3);   // o/p: 8 This means 2 with power 3 (exponent/power)


//Js follows bedmmas rule Brackets , exponent, division, multiplication, modulus, addtion, subtraction

console.log(1 + 2 ** 3);  // o/p: 7
console.log(1 + 2 ** 3 * 4 /5);
console.log("");

// Relational Operators
// add table

let a= 10;
let b = 20;
console.log(a == b);    //checks value 
console.log(a === b);   // checks values and also type
console.log(a >= b);    //checks is greator
console.log(a <= b);    // checks is smaller
console.log(a !== b);   //checks if its not equal 
console.log(a != b);    
console.log("");


//--------------  == VS === ---------------------

console.log('5' == 5);    // o/p : true
console.log('5' === 5);   // o/p : false
console.log("");

// === checks value as well as data type


//--------------- != VS !== ---------------------------

console.log('6' != 6);    // o/p: false (this checks if its not equal but isnt strict)
console.log('6' !== 6);   // o/p: true  (its strict even checks datatypes)
console.log("");

//---------------- Equality with boolean operand ----------------------------

console.log("Equality with boolean operand")
console.log(0 == false);
console.log(0 === false);
console.log("");

// in non strict comparison == , js emplicitly performs type conversion
// where it convers '5' -> 5 , false -> 0 , true -> 1


//--------------------- Relationship operators ---------------------
// && operators, || operatos
a = 20;
b = 10;

console.log("relationship operator")
console.log(a>b && b<=15);    //Both statement should be true then only o/p is true
console.log(a<b || b<=15);    // though one is false still o/p will be true