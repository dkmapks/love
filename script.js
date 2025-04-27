let clicks = 0;
let cps = 0;
let clickPower = 1;
let modCode = "74322008";

function updateDisplay() {
    document.getElementById('counter').innerText = "Kliknięcia: " + clicks;
}

function clickButton() {
    clicks += clickPower;
    updateDisplay();
    saveGame();
}

document.getElementById('clickButton').addEventListener('click', clickButton);

function buyUpgrade(type) {
    if (type === 'cps' && clicks >= 50) {
        clicks -= 50;
        cps += 1;
    } else if (type === 'clickPower' && clicks >= 30) {
        clicks -= 30;
        clickPower += 1;
    }
    updateDisplay();
    saveGame();
}

setInterval(() => {
    clicks += cps;
    updateDisplay();
    saveGame();
}, 1000);

function addService() {
    let name = document.getElementById('serviceName').value;
    let price = parseInt(document.getElementById('servicePrice').value);

    if (name && price > 0) {
        let serviceDiv = document.createElement('div');
        serviceDiv.innerHTML = `
            <p>${name} - ${price} kliknięć <button onclick="buyService(${price})">Kup</button></p>
        `;
        document.getElementById('serviceList').appendChild(serviceDiv);
    }
    document.getElementById('serviceName').value = '';
    document.getElementById('servicePrice').value = '';
}

function buyService(price) {
    if (clicks >= price) {
        clicks -= price;
        updateDisplay();
        saveGame();
    } else {
        alert("Za mało kliknięć!");
    }
}

function openSettings() {
    let code = prompt("Podaj kod dostępu:");
    if (code === modCode) {
        document.getElementById('modMenu').style.display = 'block';
    } else {
        alert("Zły kod!");
    }
}

function addClicks() {
    let amount = parseInt(document.getElementById('addClicksAmount').value);
    if (!isNaN(amount)) {
        clicks += amount;
        updateDisplay();
        saveGame();
    }
}

// Save/Load Game
function saveGame() {
    localStorage.setItem('clickerGame', JSON.stringify({
        clicks,
        cps,
        clickPower
    }));
}

function loadGame() {
    let save = JSON.parse(localStorage.getItem('clickerGame'));
    if (save) {
        clicks = save.clicks;
        cps = save.cps;
        clickPower = save.clickPower;
        updateDisplay();
    }
}

loadGame();
