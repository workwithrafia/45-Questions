// define a function with the rest parameter that accept item argumentsrepresnting our sandwitches
function makeSandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log(" \nmaking a sandwitch with the followinhg items \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n now enjoy sandwitch");
}
// call the function with 3 argruments with diffrent number
makeSandwitch("Chesse", "Chicken", "Mayo", "Egg");
makeSandwitch("Bread", "Butter");
makeSandwitch("Chesse", "Mayo", "Bread", "Chicken", "Tomatto", "Egg", "Lettuce");
