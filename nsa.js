function checkCredentials(utasniiDugaar, correctPassword, hereglegchiinOruulsanNumber, hereglegchiinOruulsanPassword) {
    if (utasniiDugaar === hereglegchiinOruulsanNumber && correctPassword === hereglegchiinOruulsanPassword) {
        console.log("Successfully logged in.");
    } else if (utasniiDugaar === hereglegchiinOruulsanNumber && correctPassword !== hereglegchiinOruulsanPassword) {
        console.log("Wrong password.");
    } else if (utasniiDugaar !== hereglegchiinOruulsanNumber && correctPassword === hereglegchiinOruulsanPassword) {
        console.log("Incorrect phone number.");
    } else {
        console.log("No account found. Please verify your phone number and password.");
    }
}
const utasniiDugaar = "12345678"; 
const correctPassword = "secret"; 
