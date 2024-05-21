// creating Array
var usersName = ["sara", "aliza", "zara", "kinza", "zoya"];
// using for each loop Array
usersName.forEach(function (oneUser) {
    if (oneUser === "Admins") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report."));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
    }
});
