// Code your solutions in this file
const students = ["Guadalupe", "Ollie", "Aki"];

function writeCards(students) {
    let messages = []; 
    for (let i = 0; i < students.length; i++) {
        const message = `Thank you, ${students[i]}, for the wonderful surprise gift!`;
        console.log(message);
        messages.push(message); 
    }

    return messages;
}

// function countDown() {
//     let startingNumber = 11
//     while (startingNumber > 0) {
//         console.log(startingNumber--)
//     }
// }

function countDown(startingNumber) {
    while (startingNumber >= 0) {  
        console.log(startingNumber);
        startingNumber--;
    }
}
