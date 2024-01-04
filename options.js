const nameInput = document.getElementById('name-input')
const saveBtn = document.getElementById('save-btn')

saveBtn.addEventListener('click',() => {
    const name = nameInput.value
    chrome.storage.sync.set({ name: name }, () => {
        console.log("Value is set");
    })
})

chrome.storage.sync.get(["name"], (result) => {
    console.log("Value is " + JSON.stringify(result));
    nameInput.value = result.name
});
