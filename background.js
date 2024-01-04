chrome.alarms.create({
    periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addEventListener((alarm) => {
    console.log(alarm)
})
