export {};
const learnerName: string = "Mariam";
let age: number = 25;
let completedLessons: number = 3;
const isReady: boolean = true;
let trainerName: string | undefined = "Ahmad";

console.log(learnerName, typeof learnerName);
console.log(age, typeof age);
console.log(completedLessons, typeof completedLessons);
console.log(isReady, typeof isReady);
console.log(trainerName, typeof trainerName);


age = 22;
completedLessons = 4;

console.log("After update:");
console.log(age);
console.log(completedLessons);