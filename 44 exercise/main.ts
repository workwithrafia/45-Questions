// define a function with the rest parameter that accept item argumentsrepresnting our sandwitches

function makeSandwitch(... items : string[]){
    console.log(" \nmaking a sandwitch with the followinhg items \n"); 

items.forEach(singleItem => console.log(singleItem));

console.log("\n now enjoy sandwitch");


}
// call the function with 3 argruments with diffrent number

makeSandwitch("Chesse","Chicken","Mayo","Egg");

makeSandwitch("Bread","Butter");

makeSandwitch("Chesse","Mayo","Bread","Chicken","Tomatto","Egg","Lettuce");
