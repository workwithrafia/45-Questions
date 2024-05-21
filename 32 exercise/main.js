// Array  of current user 
var current_users = ["Aliza", "Alisha", "Zoha", "Maryam", "Hina"];
// Array pf new users
var new_users = ["Hamza", "Alisha", "Zara", "Varda", "Rafia"];
// loop throught new_ users to check usernames avaibility
new_users.forEach(function (new_one_user) {
    // making a conditon for username already exist and save in condition varaible
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print diffrent message using if else statement
    if (our_condition) {
        console.log("sorrry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This ussername ".concat(new_one_user, " is available"));
    }
});
