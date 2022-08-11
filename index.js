const names = ["Guadalupe", "Ollie", "Aki"];
const events = []; 
function writeCards(names) { 
    for (let i = 0; i < names.length; i++) {
        events.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)        
    }
    return events
}
function countDown() {
    let countDown = 10;
    while (countDown > 9) {
        countDown --
        console.log(countDown);
    }
    while (countDown > 8) {
        countDown --
        console.log(countDown);
    }
    while (countDown > 7) {
        countDown --
        console.log(countDown);
    }
    while (countDown > 6) {
        countDown --
        console.log(countDown);
    }
    while (countDown > 5) {
        countDown --
        console.log(countDown);
    }
    while (countDown > 4) {
        countDown --
        console.log(countDown);
    }
    while (countDown > 3) {
        countDown --
        console.log(countDown);
    }
    while (countDown > 2) {
        countDown --
        console.log(countDown);
    }
    while (countDown > 1) {
        countDown --
        console.log(countDown);
    }
    while (countDown > -1) {
        countDown --
        console.log(countDown);
    }
}