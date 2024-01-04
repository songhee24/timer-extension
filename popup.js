const timeElement = document.getElementById('time')
const nameElement = document.getElementById('name')
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The time is: ${currentTime}`

// chrome.action.setBadgeText({
//     text: 'TIME',
// }, () => {
//     console.log('Finished setting the badge text.')
// })

chrome.storage.sync.get(["name"], (result) => {
    console.log("Value is " + JSON.stringify(result));
    nameElement.textContent = `Your name is ${result.name}`
});
