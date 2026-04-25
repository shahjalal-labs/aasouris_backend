# Badge Rules

## Bronze

**First Brush**  
At least one session of any type exists.  
`totalSessions > 0`

**3‑Day Streak**  
Current streak ≥ 3 days.  
`currentStreak >= 3`

**Cavity Fighter**  
At least one calendar day with both a morning and a night session.  
Count of distinct `dateKey` values where session count ≥ 2.

**On Time**  
Any session (morning or night) created within ±30 minutes of the user’s corresponding reminder time (`morningReminder` / `nightReminder`).  
Check the last 100 sessions; compare local time (user’s time zone) with the reminder string.

---

## Silver

**7‑Day Streak**  
Current streak ≥ 7 days.  
`currentStreak >= 7`

**Perfect Week**  
Same as 7‑Day Streak – a full week of consecutive days with both sessions.  
`currentStreak >= 7`

**Morning Hero**  
At least 7 morning sessions **ever**.  
`morningCount >= 7`

**Night Champion**  
At least 7 night sessions **ever**.  
`nightCount >= 7`

---

## Gold

**30‑Day Streak**  
Current streak ≥ 30 days.  
`currentStreak >= 30`

**Master Brusher**  
Total sessions (morning + night) ≥ 30.  
`totalSessions >= 30`

**Legend**  
Total sessions ≥ 100.  
`totalSessions >= 100`

**Super Star**  
Total stars earned ≥ 500.  
`(user.starEarned ?? 0) >= 500`  
(Each session gives 10 stars → 500 stars = 50 sessions.)
