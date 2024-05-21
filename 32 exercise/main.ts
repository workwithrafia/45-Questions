// Array  of current user 
let current_users = ["Aliza","Alisha","Zoha","Maryam","Hina"]


// Array pf new users
let new_users = ["Hamza","Alisha","Zara","Varda","Rafia"]

// loop throught new_ users to check usernames avaibility
new_users.forEach(new_one_user => {
    // making a conditon for username already exist and save in condition varaible
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase() )
    // print diffrent message using if else statement
    if(our_condition){
        console.log(`sorrry ${new_one_user} is already taken!`)
    
    

    }else{
        console.log(`This ussername ${new_one_user} is available`)
    }
})