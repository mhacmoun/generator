const firstarray = ["good morning", "good afternoon", "good evening", "good night"];
const secondarray = ["have a good", "have a wonderfull", "have a nice", "have a nice rest"];
const thirdarray = ["week", "day", "holiday", "weekend"];


const generated_inspirational_message = firstarray[Math.floor(Math.random() * "4")] + " " + secondarray[Math.floor(Math.random() * "4")] + " " + thirdarray[Math.floor(Math.random() * "4")];

console.log(generated_inspirational_message);
