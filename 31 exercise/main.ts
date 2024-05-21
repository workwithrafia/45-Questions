let userNames = ["sara", "varda", "ayan", "maryam", "zara"]
userNames = []

if(userNames.length ===0){
console.log (" Your Array in empty we need to find some users! ")
}else{
// using for each loop Array

userNames.forEach(oneUser => {
    if(oneUser === "Admins"){
        console.log(`Hello ${oneUser}, would you like to see a status report.`)
    }else {
        console.log(`Hello ${oneUser}, thankyou for logging in again.`)
    }

})
}