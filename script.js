let bundesland = [];

async function init() {
    let file = 'bundesland.json';
    let response = await fetch(file);
    bundesland = await response.json();
    loadCard();
}

function loadCard() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    for (let i = 0; i < bundesland.length; i++) {
        const land = bundesland[i];
        content.innerHTML += /*html*/`
        <a href="">
            <div>${land['name']}</div>
        </a>
    `
    }
}

