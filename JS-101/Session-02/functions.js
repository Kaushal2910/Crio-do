// Functions are the bloack of code which are executed whenever the user call it. 


// 1)find square and cube

function getSquare(num1){                // this is parameter (input to the functions)
    console.log(num1 ** 2);
}
function getCube(num1){
    console.log(num1 ** 3);
}

getSquare(3);                         // this is arguments = actual values that are passed
getSquare(5);
getCube(3);

// 2) find summation and average of numbers

function avg (a,b,c,d){
    console.log("summation: " +(a+b,+c+d));
    console.log("Average: " +(a+b+c+d)/4);
}

avg(10,20,30,40);

// 3) use getSum function, print summaion of numbers, then your name and then avg. numbers are 100,200.

function getSum (a,b){
    let sum = a+b;
    console.log("Summation: " +sum)
    console.log("Kaushal Sonawane");
    console.log("Average: " +sum/2);
}

getSum(100,200);


//------------------------------ 2ways to save value -------------------------------------------

function square (number){
    let answer = number ** 2;
    return answer;                //return should always be the last statementt 
}

console.log(square(4));        // Here we are directly displaying the answer without saving it

let answer1 = square(3);      //the answer is saved (this will take space too) but can be used anytime
console.log(answer1);


// 4) get square of 2 numbers (2,5) and store it and then print smmation of that. store in sq1 and sq2, use getdouble()

function getdouble(num){
    let answer = num * 2;
    return answer;
}


let sq1 = getdouble(2);
let sq2 = getdouble(5);


console.log("question 4");
console.log(sq1+sq2);


//----------------------------- non - parametric functions ---------------------------

function greetings(){
    console.log("hello brother");

}

greetings();