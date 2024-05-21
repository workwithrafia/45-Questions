// creating Array

let usersName = ["sara","aliza","zara","kinza","zoya"];
// using for each loop Array

usersName.forEach(oneUser => {
    if(oneUser === "Admins"){
        console.log(`Hello ${oneUser}, would you like to see a status report.`)
    }else {
        console.log(`Hello ${oneUser}, thankyou for logging in again.`)
    }

})