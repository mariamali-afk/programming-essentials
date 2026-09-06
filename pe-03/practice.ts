export{};
const lessonMinutesText: string = "45";
const practiceMinutesText: string = "35";

const lessonMinutes: number = Number(lessonMinutesText);
const practiceMinutes: number = Number(practiceMinutesText);

if (Number.isNaN(lessonMinutes) || Number.isNaN(practiceMinutes)) {
    console.log("خطأ: قيمة الدقائق غير صالحة");
} else {
    const totalMinutes: number = lessonMinutes + practiceMinutes;
    const hours: number = Math.floor(totalMinutes / 60);
    const remainingMinutes: number = totalMinutes % 60;

    console.log(`${hours} ساعة و${remainingMinutes} دقيقة`);
}
