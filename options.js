const nameInput = document.getElementById('name-input')
const saveBtn = document.getElementById('save-btn')

saveBtn.addEventListener('click',() => {
    const name = nameInput.name
    chrome.storage.sync.set({ name: name }, () => {
        console.log("Value is set");
    })
})

