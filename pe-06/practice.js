function validateInput(input) {
    let attempts = 0;

    while (attempts < 3) {
        const number = Number(input);

        if (input !== "" && Number.isInteger(number) && number >= 0) {
            console.log("Valid input:", number);
            return number;
        }

        attempts++;
        console.log(`Invalid input. Attempt ${attempts} of 3.`);

        if (attempts === 3) {
            console.log("Maximum attempts reached.");
            return null;
        }
    }

    return null;
}

weeklyReport(lessons);

console.log("\nInput validation:");
validateInput("abc");