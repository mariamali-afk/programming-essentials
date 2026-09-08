export {};
const score: number = 85;
const missedSessions: number = 0;
const askedForHelp: boolean = false;

let status: string;

if (score >= 80 && missedSessions <= 1) {
    status = "strong";
} else if (score < 60 || missedSessions > 1) {
    status = "follow-up";
} else {
    status = "developing";
}

console.log(status);