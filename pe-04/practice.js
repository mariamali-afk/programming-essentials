const score = 85;
const missedSessions = 0;
const askedForHelp = false;

let status;

if (score >= 80 && missedSessions <= 1) {
    status = "strong";
} else if (score < 60 || missedSessions > 1) {
    status = "follow-up";
} else {
    status = "developing";
}

console.log(status);