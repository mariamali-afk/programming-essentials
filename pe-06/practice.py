lessons = [
    {"name": "Variables", "completed": True, "minutes": 30},
    {"name": "Loops", "completed": False, "minutes": 45},
    {"name": "Functions", "completed": True, "minutes": 40},
    {"name": "Arrays", "completed": False, "minutes": 25}
]


def count_completed(lessons):
    count = 0

    for lesson in lessons:
        if lesson["completed"] is True:
            count += 1

    return count


def get_incomplete_lessons(lessons):
    incomplete = []

    for lesson in lessons:
        if lesson["completed"] is False:
            incomplete.append(lesson["name"])

    return incomplete


def calculate_total_minutes(lessons):
    total = 0

    for lesson in lessons:
        total += lesson["minutes"]

    return total


def print_lessons(lessons):
    if len(lessons) == 0:
        print("No lessons.")
        return

    for i in range(len(lessons)):
        print(f"{i + 1}. {lessons[i]['name']}")


def weekly_report(lessons):
    completed = count_completed(lessons)
    incomplete = get_incomplete_lessons(lessons)
    total_minutes = calculate_total_minutes(lessons)

    print("\nWeekly Learning Report")
    print("----------------------")
    print(f"Completed lessons: {completed}")

    if len(incomplete) == 0:
        print("Incomplete lessons: none")
    else:
        print("Incomplete lessons:")

        for name in incomplete:
            print(f"- {name}")

    print(f"Total minutes: {total_minutes}")
    print("Lessons:")

    print_lessons(lessons)


def validate_input(input_value):
    attempts = 0

    while attempts < 3:
        try:
            number = int(input_value)

            if number >= 0:
                print("Valid input:", number)
                return number

        except ValueError:
            pass

        attempts += 1
        print(f"Invalid input. Attempt {attempts} of 3.")

        if attempts == 3:
            print("Maximum attempts reached.")
            return None

    return None


weekly_report(lessons)

print("\nInput validation:")
validate_input("abc")