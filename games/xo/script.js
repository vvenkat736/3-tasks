let board = ["", "", "", "", "", "", "", "", ""]
let turn = "X", gameOver = false

function play(i) {
    if (board[i] || gameOver) return
    board[i] = turn
    document.getElementById("b" + i).innerText = turn
    turn = turn === "X" ? "O" : "X"
    checkWin()
}

function checkWin() {
    let w = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for (let [a, b, c] of w) {
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            document.getElementById("winMsg").innerText = board[a] + " Wins!"
            gameOver = true
        }
    }
    if (!board.includes("") && !gameOver) document.getElementById("winMsg").innerText = "Draw!"
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""]
    turn = "X"
    gameOver = false
    document.getElementById("winMsg").innerText = ""
    for (let i = 0; i < 9; i++) document.getElementById("b" + i).innerText = ""
}
