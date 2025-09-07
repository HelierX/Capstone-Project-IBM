// DOM Elements
const statusDisplay = document.querySelector('#status');
const board = document.querySelector('#board');
const buttonContainer = document.querySelector('.button-container');
const nextRoundBtn = document.querySelector('#nextRoundBtn');
const cells = document.querySelectorAll('.cell');
const playerXInfo = document.querySelector('#playerXInfo');
const playerOInfo = document.querySelector('#playerOInfo');
const playerXName = document.querySelector('#playerXName');
const playerOName = document.querySelector('#playerOName');
const playerXScore = document.querySelector('#playerXScore');
const playerOScore = document.querySelector('#playerOScore');
const playerXTag = document.querySelector('#playerXTag');
const playerOTag = document.querySelector('#playerOTag');
const gameTitle = document.querySelector('#gameTitle');

// Screens and Modals
const mainMenuScreen = document.querySelector('#mainMenuScreen');
const settingsModal = document.querySelector('#settingsModal');
const recapModal = document.querySelector('#recapModal');
const appContainer = document.querySelector('#app-container');
const roundDisplay = document.querySelector('#round-display');
const roundTitle = document.querySelector('#round-title');
const roundResultStatus = document.querySelector('#round-result-status');

// Recap Modal Elements
const recapTitle = document.querySelector('#recapTitle');
const recapWinner = document.querySelector('#recapWinner');
const recapScores = document.querySelector('#recap-scores');
const recapHistoryTitle = document.querySelector('#recapHistoryTitle');
const recapRoundList = document.querySelector('#recap-round-list');
const recapCloseBtn = document.querySelector('#recap-close-btn');

// Menu and Settings Elements
const newGameBtn = document.querySelector('#newGameBtn');
const p1NameInput = document.querySelector('#p1NameInput');
const p2NameInput = document.querySelector('#p2NameInput');
const roundSlider = document.querySelector('#roundSlider');
const roundValueDisplay = document.querySelector('#roundValue');
const roundLabelText = document.querySelector('#roundLabelText');
const chooseP1Start = document.querySelector('#chooseP1Start');
const chooseP2Start = document.querySelector('#chooseP2Start');
const alternateTurnsCheck = document.querySelector('#alternateTurnsCheck');
const startGameBtn = document.querySelector('#startGameBtn');

// Game State
let gameActive = false;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let currentLanguage = 'id';
let playerNames = { X: "Pemain X", O: "Pemain O" };
let scores = { X: 0, O: 0 };
let gameSettings = {
    totalRounds: 3,
    alternateTurns: true,
    round1Starter: 'X'
};
let currentRound = 1;
let roundStarter = 'X';
let lastRoundResult = { winner: null, isDraw: false };
let roundHistory = [];

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const translations = {
    id: {
        gameTitle: "Tic Tac Te",
        playerXTurn: "Giliran Pemain X",
        playerOTurn: "Giliran Pemain O",
        roundWon: (name) => `${name} Memenangkan Babak Ini!`,
        roundDraw: "Babak Ini Seri!",
        nextRoundBtn: "Babak Berikutnya >>",
        rematchBtn: "Ulangi",
        showRecapBtn: "Lihat Rekap",
        backToMenuBtn: "Kembali ke Menu",
        newGameBtn: "Permainan Baru",
        settingsModalTitle: "Pengaturan Permainan",
        p1NamePlaceholder: "Nama Pemain 1",
        p2NamePlaceholder: "Nama Pemain 2",
        player1Tag: "Pemain 1",
        player2Tag: "Pemain 2",
        roundLabelText: "Jumlah Babak:",
        firstTurnLabel: "Siapa Mulai Babak 1?",
        chooseP1Start: "Pemain 1",
        chooseP2Start: "Pemain 2",
        alternateTurnsLabel: "Ganti Giliran Awal Tiap Babak",
        startGameBtn: "Mulai Bermain!",
        roundTitle: "Babak",
        roundStatus: (round, total) => `${round} DARI ${total}`,
        matchWinner: (name) => `${name} MEMENANGKAN PERMAINAN!`,
        matchDraw: "PERMAINAN BERAKHIR SERI!",
        roundResultWinner: (name, symbol) => `${name} (${symbol})<br>+1 Poin`,
        roundResultDraw: "Kedua Pemain<br>+½ Poin",
        recapTitle: "Hasil Akhir",
        recapHistoryTitle: "Riwayat Babak",
        recapCloseBtn: "Kembali",
        recapRoundItem: (roundNum, winnerName) => `Babak ${roundNum}: Dimenangkan oleh ${winnerName}`,
        recapRoundDraw: (roundNum) => `Babak ${roundNum}: Seri`,
        flag: "https://flagcdn.com/id.svg"
    },
    en: {
        gameTitle: "Tic ac Toe",
        playerXTurn: "Player X's Turn",
        playerOTurn: "Player O's Turn",
        roundWon: (name) => `${name} Wins This Round!`,
        roundDraw: "This Round is a Draw!",
        nextRoundBtn: "Next Round >>",
        rematchBtn: "Rematch",
        showRecapBtn: "View Recap",
        backToMenuBtn: "Back to Menu",
        newGameBtn: "New Game",
        settingsModalTitle: "Game Settings",
        p1NamePlaceholder: "Player 1 Name",
        p2NamePlaceholder: "Player 2 Name",
        player1Tag: "Player 1",
        player2Tag: "Player 2",
        roundLabelText: "Number of Rounds:",
        firstTurnLabel: "Who Starts Round 1?",
        chooseP1Start: "Player 1",
        chooseP2Start: "Player 2",
        alternateTurnsLabel: "Alternate First Turn Each Round",
        startGameBtn: "Start Playing!",
        roundTitle: "Round",
        roundStatus: (round, total) => `${round} OF ${total}`,
        matchWinner: (name) => `${name} WINS THE GAME!`,
        matchDraw: "THE GAME IS A DRAW!",
        roundResultWinner: (name, symbol) => `${name} (${symbol})<br>+1 Point`,
        roundResultDraw: "Both Players<br>+½ Point",
        recapTitle: "Final Result",
        recapHistoryTitle: "Round History",
        recapCloseBtn: "Back",
        recapRoundItem: (roundNum, winnerName) => `Round ${roundNum}: Won by ${winnerName}`,
        recapRoundDraw: (roundNum) => `Round ${roundNum}: Draw`,
        flag: "https://flagcdn.com/us.svg"
    }
};

function setLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];

    gameTitle.textContent = t.gameTitle;
    roundTitle.textContent = t.roundTitle;
    document.querySelector('#currentFlag').src = t.flag;
    document.querySelector('#mainMenuTitle').textContent = t.gameTitle;
    document.querySelector('#newGameBtn').textContent = t.newGameBtn;
    document.querySelector('#settingsModalTitle').textContent = t.settingsModalTitle;
    p1NameInput.placeholder = t.p1NamePlaceholder;
    p2NameInput.placeholder = t.p2NamePlaceholder;
    roundLabelText.textContent = t.roundLabelText;
    document.querySelector('#firstTurnLabel').textContent = t.firstTurnLabel;
    chooseP1Start.textContent = t.chooseP1Start;
    chooseP2Start.textContent = t.chooseP2Start;
    document.querySelector('#alternateTurnsLabel').textContent = t.alternateTurnsLabel;
    document.querySelector('#startGameBtn').textContent = t.startGameBtn;
    recapTitle.textContent = t.recapTitle;
    recapHistoryTitle.textContent = t.recapHistoryTitle;
    recapCloseBtn.textContent = t.recapCloseBtn;
    
    if (appContainer.classList.contains('active')) {
        playerNames.X = document.getElementById('playerXName').textContent;
        playerNames.O = document.getElementById('playerOName').textContent;

        if (!gameActive && (lastRoundResult.winner || lastRoundResult.isDraw)) {
             if (lastRoundResult.isDraw) {
                statusDisplay.textContent = t.roundDraw;
                roundResultStatus.innerHTML = t.roundResultDraw;
             } else {
                statusDisplay.textContent = t.roundWon(playerNames[lastRoundResult.winner]);
                roundResultStatus.innerHTML = t.roundResultWinner(playerNames[lastRoundResult.winner], lastRoundResult.winner);
             }
        } else if (gameActive) {
             statusDisplay.textContent = currentPlayer === 'X' ? t.playerXTurn : t.playerOTurn;
        }

        roundDisplay.textContent = t.roundStatus(currentRound, gameSettings.totalRounds);
        updateEndGameButtons();
        populateRecapModal(); // Update recap text on language change
    }
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    if (currentPlayer === 'O') {
        clickedCell.innerHTML = `<svg class="o-char-svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" /></svg>`;
    } else {
        clickedCell.innerHTML = `<span class="x-char">X</span>`;
    }
    clickedCell.classList.add('occupied');
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    const t = translations[currentLanguage];
    statusDisplay.textContent = currentPlayer === 'X' ? t.playerXTurn : t.playerOTurn;
    playerOInfo.classList.toggle('active');
    playerXInfo.classList.toggle('active');
}

function handleResultValidation() {
    let roundWon = false;
    let winningCells = [];
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') continue;
        if (a === b && b === c) {
            roundWon = true;
            winningCells = winCondition;
            break;
        }
    }

    const t = translations[currentLanguage];
    if (roundWon) {
        lastRoundResult = { winner: currentPlayer, isDraw: false };
        roundHistory.push({ round: currentRound, winner: currentPlayer });
        statusDisplay.textContent = t.roundWon(playerNames[currentPlayer]);
        statusDisplay.classList.add('win-animation');
        const winnerScoreElement = (currentPlayer === 'X') ? playerXScore : playerOScore;
        winnerScoreElement.classList.add('win-animation');

        gameActive = false;
        winningCells.forEach(index => cells[index].classList.add('win'));
        scores[currentPlayer]++;
        updateScoreboard();
        roundResultStatus.innerHTML = t.roundResultWinner(playerNames[currentPlayer], currentPlayer);
        checkMatchOver();
        return;
    }

    const roundDraw = !gameState.includes("");
    if (roundDraw) {
        lastRoundResult = { winner: null, isDraw: true };
        roundHistory.push({ round: currentRound, winner: null });
        statusDisplay.textContent = t.roundDraw;
        gameActive = false;
        scores.X += 0.5;
        scores.O += 0.5;
        updateScoreboard();
        roundResultStatus.innerHTML = t.roundResultDraw;
        checkMatchOver();
        return;
    }

    handlePlayerChange();
}

function handleCellClick(e) {
    const clickedCell = e.target.closest('.cell');
    if (!clickedCell) return;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
    if (gameState[clickedCellIndex] !== '' || !gameActive) return;
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function startNewRound() {
    gameActive = true;
    currentPlayer = roundStarter;
    gameState = ['', '', '', '', '', '', '', '', ''];
    lastRoundResult = { winner: null, isDraw: false };
    
    const t = translations[currentLanguage];
    statusDisplay.textContent = currentPlayer === 'X' ? t.playerXTurn : t.playerOTurn;
    roundDisplay.textContent = t.roundStatus(currentRound, gameSettings.totalRounds);
    
    statusDisplay.classList.remove('win-animation');
    playerXScore.classList.remove('win-animation');
    playerOScore.classList.remove('win-animation');
    roundResultStatus.innerHTML = '';
    
    playerXInfo.classList.remove('active');
    playerOInfo.classList.remove('active');
    if (currentPlayer === 'X') playerXInfo.classList.add('active');
    else playerOInfo.classList.add('active');

    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('occupied', 'win');
    });
    
    nextRoundBtn.style.display = 'none';
    clearEndGameButtons();
}

function formatScore(score) {
    if (score === 0) return '0';
    const integerPart = Math.floor(score);
    const hasHalf = (score % 1 !== 0);
    let result = '';
    if (integerPart > 0) result += integerPart;
    if (hasHalf) {
      if (integerPart > 0) result += ' ';
      result += '½';
    }
    return result;
}

function updateScoreboard() {
    playerXScore.textContent = formatScore(scores.X);
    playerOScore.textContent = formatScore(scores.O);
}

function checkMatchOver() {
    if (currentRound >= gameSettings.totalRounds && !gameActive) {
        populateRecapModal();
        recapModal.classList.add('active');
        updateEndGameButtons();
    } else if (!gameActive) {
        nextRoundBtn.style.display = 'block';
    }
}

function populateRecapModal() {
    const t = translations[currentLanguage];
    let winnerName = "";
    if (scores.X > scores.O) {
        winnerName = playerNames.X;
        recapWinner.textContent = t.matchWinner(winnerName);
    } else if (scores.O > scores.X) {
        winnerName = playerNames.O;
        recapWinner.textContent = t.matchWinner(winnerName);
    } else {
        recapWinner.textContent = t.matchDraw;
    }

    recapScores.textContent = `${playerNames.X}: ${formatScore(scores.X)} - ${playerNames.O}: ${formatScore(scores.O)}`;
    recapRoundList.innerHTML = '';
    roundHistory.forEach(round => {
        const li = document.createElement('li');
        let resultText = '';
        if (round.winner) {
            resultText = t.recapRoundItem(round.round, playerNames[round.winner]);
        } else {
            resultText = t.recapRoundDraw(round.round);
        }
        li.innerHTML = resultText;
        recapRoundList.appendChild(li);
    });
}

function clearEndGameButtons() {
    buttonContainer.innerHTML = ''; // Clear old buttons
    buttonContainer.appendChild(nextRoundBtn); // Re-add the next round button
}

function updateEndGameButtons() {
    clearEndGameButtons();
    nextRoundBtn.style.display = 'none';

    const t = translations[currentLanguage];
    if (currentRound >= gameSettings.totalRounds && !gameActive) {
        const rematchBtn = document.createElement('button');
        rematchBtn.id = 'rematchBtn';
        rematchBtn.textContent = t.rematchBtn;
        rematchBtn.onclick = startRematch;

        const showRecapBtn = document.createElement('button');
        showRecapBtn.id = 'showRecapBtn';
        showRecapBtn.textContent = t.showRecapBtn;
        showRecapBtn.onclick = () => recapModal.classList.add('active');
        
        const backToMenuBtn = document.createElement('button');
        backToMenuBtn.id = 'backToMenuBtn';
        backToMenuBtn.textContent = t.backToMenuBtn;
        backToMenuBtn.onclick = returnToMainMenu;
        
        buttonContainer.appendChild(rematchBtn);
        buttonContainer.appendChild(showRecapBtn);
        buttonContainer.appendChild(backToMenuBtn);
    }
}


function startRematch() {
    scores = { X: 0, O: 0 };
    currentRound = 1;
    roundHistory = [];
    roundStarter = gameSettings.round1Starter;
    startNewRound();
}

function returnToMainMenu() {
    appContainer.classList.remove('active');
    mainMenuScreen.classList.add('active');
}

// Event Listeners
newGameBtn.addEventListener('click', () => {
    mainMenuScreen.classList.remove('active');
    settingsModal.classList.add('active');
});

chooseP1Start.addEventListener('click', () => {
    gameSettings.round1Starter = 'X';
    chooseP1Start.classList.add('selected');
    chooseP2Start.classList.remove('selected');
    p1NameInput.placeholder = "Pemain 1 (X)";
    p2NameInput.placeholder = "Pemain 2 (O)";
});

chooseP2Start.addEventListener('click', () => {
    gameSettings.round1Starter = 'O';
    chooseP1Start.classList.remove('selected');
    chooseP2Start.classList.add('selected');
    p1NameInput.placeholder = "Pemain 1 (O)";
    p2NameInput.placeholder = "Pemain 2 (X)";
});

startGameBtn.addEventListener('click', () => {
    gameSettings.totalRounds = parseInt(roundSlider.value);
    gameSettings.alternateTurns = alternateTurnsCheck.checked;
    
    const t = translations[currentLanguage];
    const p1Symbol = gameSettings.round1Starter === 'X' ? 'X' : 'O';
    const p2Symbol = p1Symbol === 'X' ? 'O' : 'X';
    
    playerNames[p1Symbol] = p1NameInput.value.trim() || t.player1Tag;
    playerNames[p2Symbol] = p2NameInput.value.trim() || t.player2Tag;
    
    playerXName.textContent = playerNames.X;
    playerOName.textContent = playerNames.O;
    
    playerXTag.textContent = p1Symbol === 'X' ? `${t.player1Tag} (X)` : `${t.player2Tag} (X)`;
    playerOTag.textContent = p1Symbol === 'O' ? `${t.player1Tag} (O)` : `${t.player2Tag} (O)`;
    
    roundHistory = [];
    startRematch(); // Use rematch logic to start the game
    
    settingsModal.classList.remove('active');
    appContainer.classList.add('active');
});

roundSlider.addEventListener('input', () => {
    roundValueDisplay.textContent = roundSlider.value;
});

nextRoundBtn.addEventListener('click', () => {
    currentRound++;
    if (gameSettings.alternateTurns) {
        roundStarter = (roundStarter === 'X') ? 'O' : 'X';
    }
    startNewRound();
});

// Modal Close Listeners
[settingsModal, recapModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            if (modal === settingsModal) {
                 mainMenuScreen.classList.add('active');
            }
        }
    });
});

recapCloseBtn.addEventListener('click', () => {
    recapModal.classList.remove('active');
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if(settingsModal.classList.contains('active')) {
            settingsModal.classList.remove('active');
            mainMenuScreen.classList.add('active');
        }
        if(recapModal.classList.contains('active')) {
            recapModal.classList.remove('active');
        }
    }
});

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelectorAll('.language-option').forEach(btn => btn.addEventListener('click', (e) => {
    const lang = e.target.closest('.language-option').dataset.lang;
    if(lang) setLanguage(lang);
}));

window.addEventListener('load', () => {
    setLanguage('id');
    chooseP1Start.classList.add('selected');
});


