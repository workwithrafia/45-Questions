// creating a Guest List Array
let guestlist = ["Rafia","Varda","Maryam","Nabirah"];

// Making varaible for those guest who cant come
let dontcome = guestlist[0];

// print the name guest who cant come
console.log(dontcome, "Nahi ah sakty hain");

// Add or remove value from guest list Array
guestlist.splice(0, 1, "Aisha");

// Message Print For Bigger Table
console.log("God news ! We have Found a Bigger Table for Dinner.");

// Adding A New value At Starting Index Of Array
guestlist.unshift("Amna");

// Adding A New Valve At ending Index Of Array
guestlist.push("Aliza");

// Making A Varaible For Storing a Middle Index Of Our Guest List Of Array
let middleindex: number =Math.floor(guestlist.length / 2);

// Adding A New Guest to Middle Index of Array
guestlist.splice(middleindex, 0, "Alisbha");

// Print Message Of Updated List
console.log ("Updated List Of Our Guest");

// Sending A Invitation Message To Our guest One By One with Their Names
guestlist.forEach(oneguest=> console.log(`Salam ${oneguest}, would You Like To  Dinner With Me`));
