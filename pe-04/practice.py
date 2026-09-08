score = 85
missed_sessions = 0
asked_for_help = False

status = ""

if score >= 80 and missed_sessions <= 1:
    status = "strong"
elif score < 60 or missed_sessions > 1:
    status = "follow-up"
else:
    status = "developing"

print(status)