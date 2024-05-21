// define varaibles
let apple = "apple";
let uppercaseApple = "APPLE";
let ten=10;
let twenty=20;
let fruits = ["Apple","Orange","Banana"];


// test for quality or inquality with strings


console.log("Is apple is equal to apple?");
console.log(apple =="apple");

console.log("\n Is apple is not equal to apple?");
console.log(apple !="apple");

// test using Lowercase funtion
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()=="apple");

console.log ("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");


// numerical test
console.log("\n Is ten is equal to twenty?");
console.log(ten ==twenty);
// not equal to


console.log("\nIs ten is equal to twenty? ");
console.log(ten != twenty);
// greter then

console.log("\n ten is greter then zero?");
console.log(ten > 0);

// less then
console.log("\nIs twenty is less then 10?");
console.log(twenty < 10);

// greter then or equal to
console.log("\nIs ten is greater then lor equal to 5?");
console.log(ten >= 5);

// less then or equal to
console.log("\n twenty is less then or equal to  10");
console.log(twenty <= 10);

// test using "and & "or" operaters
// usin && (and)
console.log("\n twenty is equal to 10  and twenty is greter then 10?");
console.log(twenty != 10 && twenty > 10);


console.log("\n twenty is equal to 10  and twenty is greter then 10?");
console.log(twenty != 10 && twenty > 30);

// using || (or)
console.log("\n 20 is greter then 50  OR  20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greter then 50  OR  20 is not  equal to 20");
console.log(20 > 50 || 20 != 20);



// test weathe rain item include in Array

console.log ("\n Is orange include in my fruits Array");
console.log(fruits.includes("Orange"));

// not include
console.log ("\n Is orange is not include in my fruits Array");
console.log(!fruits.includes("Orange"));

