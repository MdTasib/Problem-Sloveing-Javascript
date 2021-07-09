// copy to clipboard
function handleClick() {
    let text = document.querySelector('#text');
    copyToClipboard(text.innerText);
}

function copyToClipboard(text) {
    console.log(text);
}