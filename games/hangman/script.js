const words = ["DELHI", "MUMBAI", "CHENNAI", "KOLKATA", "BANGALORE"];
let word, guessed, attempts;

function init() {
    word = words[Math.floor(Math.random() * words.length)];
    guessed = Array(word.length).fill("_");
    attempts = 6;
    update();
    createButtons();
    resetHangman();
}

function update() {
    document.getElementById("word").textContent = guessed.join(" ");
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("result").textContent = guessed.includes("_") ? "" : "🎉 You Win!";
}

function createButtons() {
    let buttons = document.getElementById("buttons");
    buttons.innerHTML = "";
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
        let btn = document.createElement("button");
        btn.textContent = letter;
        btn.onclick = () => check(btn, letter);
        buttons.appendChild(btn);
    });
}

function check(btn, letter) {
    btn.disabled = true;
    if (word.includes(letter)) {
        word.split("").forEach((ch, i) => { if (ch === letter) guessed[i] = letter; });
    } else {
        attempts--;
        updateHangman();
    }
    if (attempts === 0) document.getElementById("result").textContent = "❌ You Lose! " + word;
    update();
}

function resetHangman() {
    document.querySelectorAll("#hangman div").forEach(part => part.style.display = "none");
}

function updateHangman() {
    const parts = [".rope", ".head", ".body", ".arms", ".legs"];
    let part = parts[6 - attempts - 1];
    if (part) document.querySelector(part).style.display = "block";
}

document.getElementById("restart").onclick = init;
init();
