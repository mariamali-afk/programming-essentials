type Lesson = {
    name: string;
    completed: boolean;
    minutes: number;
};

const lessons: Lesson[] = [
    { name: "Variables", completed: true, minutes: 30 },
    { name: "Loops", completed: false, minutes: 45 },
    { name: "Functions", completed: true, minutes: 40 },
    { name: "Arrays", completed: false, minutes: 25 }
];

function countCompleted(lessons: Lesson[]): number {
    let count = 0;

    for (const lesson of lessons) {
        if (lesson.completed === true) {
            count++;
        }
    }

    return count;
}

function getIncompleteLessons(lessons: Lesson[]): string[] {
    const incomplete: string[] = [];

    for (const lesson of lessons) {
        if (lesson.completed === false) {
            incomplete.push(lesson.name);
        }
    }

    return incomplete;
}

function calculateTotalMinutes(lessons: Lesson[]): number {
    let total = 0;

    for (const lesson of lessons) {
        total += lesson.minutes;
    }

    return total;
}

function printLessons(lessons: Lesson[]): void {
    if (lessons.length === 0) {
        console.log("No lessons.");
        return;
    }

    for (let i = 0; i < lessons.length; i++) {
        console.log(`${i + 1}. ${lessons[i].name}`);
    }
}

function weeklyReport(lessons: Lesson[]): void {
    const completed = countCompleted(lessons);
    const incomplete = getIncompleteLessons(lessons);
    const totalMinutes = calculateTotalMinutes(lessons);

    console.log("\nWeekly Learning Report");
    console.log("----------------------");
    console.log(`Completed lessons: ${completed}`);

    if (incomplete.length === 0) {
        console.log("Incomplete lessons: none");
    } else {
        console.log("Incomplete lessons:");

        for (const name of incomplete) {
            console.log(`- ${name}`);
        }
    }

    console.log(`Total minutes: ${totalMinutes}`);
    console.log("Lessons:");

    printLessons(lessons);
}

function validateInput(input: string): number | null {
    let attempts = 0;

    while (attempts < 3) {
        const number = Number(input);

        if (
            input.trim() !== "" &&
            Number.isInteger(number) &&
            number >= 0
        ) {
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