var userNames = ["sara", "varda", "ayan", "maryam", "zara"];
userNames = [];
if (userNames.length === 0) {
    console.log(" Your Array in empty we need to find some users! ");
}
else {
    // using for each loop Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admins") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report."));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
        }
    });
}
