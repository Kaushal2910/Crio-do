// print the biggest number of 3 numbers  use && opeerator

let a = 10;
let b = 20;
let c = 30;

console.log("Biggest number");
if (a>=b && a>=c){
    console.log("a:" +a);              
}
else if(b>=a && b>=c){
    console.log("b:" +b);
}
else{
    console.log("c:" +c);
}


// print the smallest number of 3 numbers  use && opeerator 

a = 10;              // Reassignment of values that were decleared eariler
b = 20;
c = 30;

console.log("Smallest Number");
if (a<=b && a<=c){
    console.log("a:" +a);
}
else if(b<=a && b<=c){
    console.log("b:" +b);
}
else{
    console.log("c:" +c);
}

// print the smallest number of 3 numbers  use && opeerator and do inside a function

console.log("Smallest using fuction");
function getSmallest(a,b,c){
    if (a<=b && a<=c){
        console.log("a:" +a);               // In function this wont give error but if one part is  executed(if part worked) the else part will return "undefined" in terminal
                                        
    }
    else if(b<=a && b<=c){
        console.log("b:" +b);
    }
    else{
        console.log("c:" +c);
    }
}

console.log(getSmallest(30,50,40));


/* Write a function to determine wheter the person is eligible for blood donation
if the age is under 18 print underage. 
else if age is grater than or equal to 18 and weight is less than or equal to 50 return not eligible 
else eligible */

console.log("Blood Donation using fuction");
function bloodDonation(age,weight){
    if(age<18){
        return("Underage");
    }
    else{
        if(weight<=50){
            return("NOT Eligible");     // Return statement wont return undefined 
        }
        else{
            return("Eligible");
        }
    }
}

console.log(bloodDonation(30,40));     //parameter will be passed to function, then it will return some value, which will be saved here and printed out