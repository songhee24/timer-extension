const nameInput = document.getElementById('name-input')
const timeInput = document.getElementById('time-input')

const saveBtn = document.getElementById('save-btn')

saveBtn.addEventListener('click',() => {
    const name = timeInput.value
    const notificationTime = timeBtn.value
    chrome.storage.sync.set({ name: name, notificationTime: notificationTime }, () => {
        console.log("Value is set");
    })
})

chrome.storage.sync.get(["name", "notificationTime"], (result) => {
    nameInput.value = result.name ?? ''
    timeInput.value = result.notificationTime ?? 1000
});
