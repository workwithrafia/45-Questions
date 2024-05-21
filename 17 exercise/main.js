// creating a Guest List Array
var guestlist = ["Rafia", "Varda", "Maryam", "Nabirah"];
// Making varaible for those guest who cant come
var dontcome = guestlist[0];
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
var middleindex = Math.floor(guestlist.length / 2);
// Adding A New Guest to Middle Index of Array
guestlist.splice(middleindex, 0, "Alisbha");
// Print Message Of Updated List
console.log("Updated List Of Our Guest");
// Sending A Invitation Message To Our guest One By One with Their Names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would You Like To  Dinner With Me")); });
// Inform that only two guest can be invited for dinner
console.log("unfortunately,the new diiner table wont arrive on time ,so i can only invite two guest to dinner with me");
// until while-loop to remove guest from the Array until onlt two names remains
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("sorry, ".concat(removedguest, " i can invited to you to dinner"));
}
//Sending  a invitation to the last two guest on the  list
console.log("Invitation the last 2 Guest");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, " You are still inviteed to dinner")); });
// Removing last two guest form the list
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);
