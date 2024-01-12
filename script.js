let bundesland = [];
let letters = [];

async function init() {
    let file = 'bundesland.json';
    let response = await fetch(file);
    bundesland = await response.json();
    render();
}

function render(filter) {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < bundesland.length; i++) {
        const land = bundesland[i];
        const population = (land['population'] + '').replace('.', ',');
        const firstLetter = land['name'].charAt(0);

        if (!filter || filter == firstLetter) {
            content.innerHTML += generateInfoCard(land, population);
        }
        
        if (!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }
    }

    renderLetters();
}

function setFilter(letter) {
    render(letter);
}

function renderLetters() {
    let letterbox = document.getElementById('letterbox');
    letterbox.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        letterbox.innerHTML += /*html*/`
            <div onclick="setFilter('${letter}')" class="letter">${letter}</div>
        `;
        
    }
}

function generateInfoCard(land, population) {
    return `<a href="${land['url']}" target="_blank" class="infocard">
        <div>${land['name']}</div>
        <div>${population} Millionen</div>
    </a>`;
}