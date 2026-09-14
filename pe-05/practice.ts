export {};
const trainingMinutes: number[] = [25, 40, 30, 15, 60, 20, 35];

let totalMinutes: number = 0;
let daysAtLeast30: number = 0;
let maximumMinutes: number = 0;

for (let i = 0; i < trainingMinutes.length; i++) {
    const currentMinutes: number = trainingMinutes[i];

    totalMinutes += currentMinutes;

    if (currentMinutes >= 30) {
        daysAtLeast30++;
    }

    if (currentMinutes > maximumMinutes) {
        maximumMinutes = currentMinutes;
    }

    console.log(`Day ${i + 1}: ${currentMinutes} minutes`);
}

console.log("----- Summary -----");
console.log(`Total: ${totalMinutes} minutes`);
console.log(`Days with at least 30 minutes: ${daysAtLeast30}`);
console.log(`Maximum: ${maximumMinutes} minutes`);