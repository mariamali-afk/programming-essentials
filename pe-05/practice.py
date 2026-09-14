training_minutes = [25, 40, 30, 15, 60, 20, 35]

total_minutes = 0
days_at_least_30 = 0
maximum_minutes = 0

for i in range(len(training_minutes)):
    current_minutes = training_minutes[i]

    total_minutes += current_minutes

    if current_minutes >= 30:
        days_at_least_30 += 1

    if current_minutes > maximum_minutes:
        maximum_minutes = current_minutes

    print(f"Day {i + 1}: {current_minutes} minutes")

print("----- Summary -----")
print(f"Total: {total_minutes} minutes")
print(f"Days with at least 30 minutes: {days_at_least_30}")
print(f"Maximum: {maximum_minutes} minutes")