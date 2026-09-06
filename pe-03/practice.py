lesson_minutes_text = "45"
practice_minutes_text = "35"

try:
    lesson_minutes = int(lesson_minutes_text)
    practice_minutes = int(practice_minutes_text)

    total_minutes = lesson_minutes + practice_minutes
    hours = total_minutes // 60
    remaining_minutes = total_minutes % 60

    print(f"{hours} ساعة و{remaining_minutes} دقيقة")

except ValueError:
    print("خطأ: قيمة الدقائق غير صالحة")
    