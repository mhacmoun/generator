const firstarray = ["good morning", "good afternoon", "good evening"];
const secondtarray = ["have a good", "have a wonderfull", "have a nice"];
const thirdtarray = ["week", "day", "holiday"];


const generated_inspirational_message = firstarray[Math.floor(Math.random() * "3")] + " " + secondtarray[Math.floor(Math.random() * "3")] + " " + thirdtarray[Math.floor(Math.random() * "3")];

console.log(generated_inspirational_message);
// un changement