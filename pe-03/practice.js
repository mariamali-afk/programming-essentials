const lessonMinutesText = "45";
const practiceMinutesText = "35";

const lessonMinutes = Number(lessonMinutesText);
const practiceMinutes = Number(practiceMinutesText);

if (Number.isNaN(lessonMinutes) || Number.isNaN(practiceMinutes)) {
    console.log("خطأ: قيمة الدقائق غير صالحة");
} else {
    const totalMinutes = lessonMinutes + practiceMinutes;
    const hours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    console.log(`${hours} ساعة و${remainingMinutes} دقيقة`);
    
}