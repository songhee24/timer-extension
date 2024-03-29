const timeElement = document.getElementById('time')
const nameElement = document.getElementById('name')
const timerElement = document.getElementById('timer')

function updateTimeElements() {
    chrome.storage.local.get(["timer"], (result) => {
        const timer = result.timer ?? 0
        timerElement.textContent = `The timer is at: ${timer} seconds`
    });
    const currentTime = new Date().toLocaleTimeString()
    timeElement.textContent = `The time is: ${currentTime}`
}

updateTimeElements()
setInterval(updateTimeElements, 1000)
// chrome.action.setBadgeText({
//     text: 'TIME',
// }, () => {
//     console.log('Finished setting the badge text.')
// })

chrome.storage.sync.get(["name"], (result) => {
    console.log("Value is " + JSON.stringify(result));
    nameElement.textContent = `Your name is ${result.name}`
});

const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

startBtn.addEventListener('click', () => {
    chrome.storage.local.set({isRunning: true}, (result) => {});
})

stopBtn.addEventListener('click', () => {
    chrome.storage.local.set({isRunning: false}, (result) => {});
})

resetBtn.addEventListener('click', () => {
    chrome.storage.local.set({isRunning: false, timer: 0}, (result) => {});
})
