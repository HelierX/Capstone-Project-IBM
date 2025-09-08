// DOM Elements
const statusDisplay = document.querySelector('#status');
const board = document.querySelector('#board');
const buttonContainer = document.querySelector('.button-container');
const nextRoundBtn = document.querySelector('#nextRoundBtn');
const cells = document.querySelectorAll('.cell');
const player1Info = document.querySelector('#player1Info');
const player2Info = document.querySelector('#player2Info');
const player1Name = document.querySelector('#player1Name');
const player2Name = document.querySelector('#player2Name');
const player1Score = document.querySelector('#player1Score');
const player2Score = document.querySelector('#player2Score');
const player1Tag = document.querySelector('#player1Tag');
const player2Tag = document.querySelector('#player2Tag');
const gameTitle = document.querySelector('#gameTitle');

// Screens and Modals
const mainMenuScreen = document.querySelector('#mainMenuScreen');
const settingsModal = document.querySelector('#settingsModal');
const recapModal = document.querySelector('#recapModal');
const rulesModal = document.querySelector('#rulesModal');
const appContainer = document.querySelector('#app-container');
const roundDisplay = document.querySelector('#round-display');
const roundTitle = document.querySelector('#round-title');
const roundResultStatus = document.querySelector('#round-result-status');
const gameContainer = document.querySelector('.game-container');
const confettiContainer = document.getElementById('confetti-container');

// Recap Modal Elements
const recapTitle = document.querySelector('#recapTitle');
const recapNav = document.querySelector('#recap-nav');
const prevMatchBtn = document.querySelector('#prev-match-btn');
const nextMatchBtn = document.querySelector('#next-match-btn');
const matchCounter = document.querySelector('#match-counter');
const recapWinner = document.querySelector('#recapWinner');
const recapP1Name = document.querySelector('#recap-p1-name');
const recapP2Name = document.querySelector('#recap-p2-name');
const recapP1Score = document.querySelector('#recap-p1-score');
const recapP2Score = document.querySelector('#recap-p2-score');
const recapH2H = document.querySelector('#recap-h2h-score');
const recapHistoryTitle = document.querySelector('#recapHistoryTitle');
const recapTimeline = document.querySelector('#recap-timeline');
const recapCloseBtn = document.querySelector('#recap-close-btn');

// Menu and Settings Elements
const newGameBtn = document.querySelector('#newGameBtn');
const howToPlayOpenBtn = document.querySelector('#howToPlayOpenBtn');
const rulesOpenBtn = document.querySelector('#rulesOpenBtn');
const rulesCloseBtn = document.querySelector('#rules-close-btn');
const p1NameInput = document.querySelector('#p1NameInput');
const p2NameInput = document.querySelector('#p2NameInput');
const p1SymbolPicker = document.querySelector('#p1-symbol-picker');
const p2SymbolPicker = document.querySelector('#p2-symbol-picker');
const settingsError = document.querySelector('#settings-error');
const chooseP1Start = document.querySelector('#chooseP1Start');
const chooseP2Start = document.querySelector('#chooseP2Start');
const roundSlider = document.querySelector('#roundSlider');
const roundValueDisplay = document.querySelector('#roundValue');
const roundLabelText = document.querySelector('#roundLabelText');
const alternateTurnsCheck = document.querySelector('#alternateTurnsCheck');
const alternateRematchCheck = document.querySelector('#alternateRematchCheck');
const useColorsCheck = document.querySelector('#useColorsCheck');
const colorPickerContainer = document.querySelector('#color-picker-container');
const p1ColorOptions = document.querySelector('#p1-color-options');
const p2ColorOptions = document.querySelector('#p2-color-options');
const startGameBtn = document.querySelector('#startGameBtn');

// Rules Modal Tabs
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const howToPlayTabBtn = document.getElementById('howToPlayTabBtn');
const rulesTabBtn = document.getElementById('rulesTabBtn');
const howToPlayTitle = document.getElementById('howToPlayTitle');
const rulesTitle = document.getElementById('rulesTitle');
const howToPlayContent = document.getElementById('howToPlayContent');
const rulesContent = document.querySelector('#rulesContent');


// Game State
let gameActive = false;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let currentLanguage = 'id';
let playerNames = { p1: "Pemain 1", p2: "Pemain 2" };
let playerSymbols = { p1: 'X', p2: 'O' };
let scores = { X: 0, O: 0 };
let headToHeadScores = { p1: 0, p2: 0 };
let matchCount = 0;
let gameSettings = {
    totalRounds: 3,
    alternateTurns: true,
    alternateOnRematch: true,
    useColors: false,
    p1Color: '#4CAF50',
    p2Color: '#a77dff',
    match1Round1Starter: 'p1'
};
let currentRound = 1;
let roundStarter = 'X';
let lastRoundResult = { winner: null, isDraw: false };
let matchHistories = [];
let currentRecapMatch = 1;
let recapTimeoutId = null;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const SVG_RETRY = `<svg class="retry-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" stroke-width="2"/><path d="M15.9922 12.3333C15.9922 14.5424 14.2043 16.3333 11.9922 16.3333C9.78002 16.3333 7.99219 14.5424 7.99219 12.3333C7.99219 10.1242 9.78002 8.33331 11.9922 8.33331C13.4337 8.33331 14.6934 9.07137 15.4422 10.1666" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M15.4414 7.25V10.1667H12.5248" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const RAINBOW_COLORS = ['#D32F2F', '#F57C00', '#E6A100', '#388E3C', '#1976D2', '#7B1FA2', '#C2185B'];

const translations = {
    id: {
        gameTitle: "Tic Tac Toe",
        playerXTurn: (name, symbol) => `Giliran ${name} (${symbol})`,
        roundWon: (name) => `${name} Memenangkan Babak Ini!`,
        roundDraw: "Babak Ini Seri!",
        nextRoundBtnText: "Babak Berikutnya >>",
        rematchBtn: "Ulangi",
        showRecapBtn: "Lihat Rekap",
        backToMenuBtn: "Kembali ke Menu",
        newGameBtn: "Permainan Baru",
        howToPlayBtnLabel: "Cara Bermain",
        rulesBtnLabel: "Aturan",
        settingsModalTitle: "Pengaturan Permainan",
        p1NamePlaceholder: "Nama Pemain 1",
        p2NamePlaceholder: "Nama Pemain 2",
        player1Tag: "Pemain 1",
        player2Tag: "Pemain 2",
        roundLabelText: "Jumlah Babak:",
        firstTurnLabel: "Siapa Mulai Babak 1?",
        alternateTurnsLabel: "Ganti Giliran Awal Tiap Babak",
        alternateRematchLabel: "Ganti Giliran Awal Tiap Pertandingan",
        useColorsLabel: "Gunakan Warna Pemain",
        p1ColorLabel: "Warna Pemain 1",
        p2ColorLabel: "Warna Pemain 2",
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
        recapMatchLabel: (matchNum) => `Pertandingan ${matchNum}`,
        recapRoundItem: (winnerName) => `${winnerName}`,
        recapRoundDraw: "SERI",
        howToPlayTitle: "Cara Bermain",
        rulesTitle: "Aturan Permainan",
        howToPlayTab: "Cara Bermain",
        rulesTab: "Aturan",
        howToPlayContent: `
            <h3>Tujuan Permainan</h3>
            <p>Jadilah pemain pertama yang berhasil membuat garis horizontal, vertikal, atau diagonal dengan tiga simbol (X atau O) milikmu.</p>
            <h3>Cara Bermain</h3>
            <ul>
                <li>Permainan dimainkan di papan 3x3.</li>
                <li>Pemain 1 dan Pemain 2 memilih simbol mereka (X atau O).</li>
                <li>Para pemain bergiliran menempatkan simbol mereka di kotak yang kosong.</li>
                <li>Pemain pertama yang mendapatkan 3 simbol berturut-turut adalah pemenang babak tersebut.</li>
            </ul>
        `,
        rulesContent: `
            <h3>Sistem Skor</h3>
            <p>Permainan terdiri dari beberapa babak (dapat diatur di pengaturan). Pemenang babak mendapatkan 1 poin. Jika papan penuh dan tidak ada pemenang, babak berakhir seri dan kedua pemain mendapatkan ½ poin. Pemain dengan skor tertinggi di akhir semua babak memenangkan pertandingan!</p>
            <h3>Aturan Nama</h3>
            <ul>
                <li>Nama pemain tidak boleh sama.</li>
                <li>Nama tidak boleh mengandung kata "seri", "tie", atau "draw" untuk menghindari kebingungan pada papan skor.</li>
                <li>Jika nama tidak diisi, akan otomatis menjadi "Pemain 1" dan "Pemain 2".</li>
            </ul>
        `,
        rulesCloseBtn: "Mengerti",
        errorForbiddenName: "Nama tidak disarankan. Cek Aturan untuk detail lebih lanjut.",
        errorSameName: "Nama pemain tidak boleh sama.",
        flag: "https://flagcdn.com/id.svg"
    },
    en: {
        gameTitle: "Tic Tac Toe",
        playerXTurn: (name, symbol) => `${name}'s Turn (${symbol})`,
        roundWon: (name) => `${name} Wins This Round!`,
        roundDraw: "This Round is a Draw!",
        nextRoundBtnText: "Next Round >>",
        rematchBtn: "Rematch",
        showRecapBtn: "View Recap",
        backToMenuBtn: "Back to Menu",
        newGameBtn: "New Game",
        howToPlayBtnLabel: "How to Play",
        rulesBtnLabel: "Rules",
        settingsModalTitle: "Game Settings",
        p1NamePlaceholder: "Player 1 Name",
        p2NamePlaceholder: "Player 2 Name",
        player1Tag: "Player 1",
        player2Tag: "Player 2",
        roundLabelText: "Number of Rounds:",
        firstTurnLabel: "Who Starts Round 1?",
        alternateTurnsLabel: "Alternate First Turn Each Round",
        alternateRematchLabel: "Alternate Starter Each Match",
        useColorsLabel: "Use Player Colors",
        p1ColorLabel: "Player 1 Color",
        p2ColorLabel: "Player 2 Color",
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
        recapMatchLabel: (matchNum) => `Match ${matchNum}`,
        recapRoundItem: (winnerName) => `${winnerName}`,
        recapRoundDraw: "TIE",
        howToPlayTitle: "How to Play",
        rulesTitle: "Game Rules",
        howToPlayTab: "How to Play",
        rulesTab: "Rules",
        howToPlayContent: `
            <h3>Objective</h3>
            <p>Be the first player to form a horizontal, vertical, or diagonal line of three of your symbols (X or O).</p>
            <h3>Gameplay</h3>
            <ul>
                <li>The game is played on a 3x3 grid.</li>
                <li>Player 1 and Player 2 choose their symbols (X or O).</li>
                <li>Players take turns placing their symbols in empty squares.</li>
                <li>The first player to get 3 of their symbols in a row is the winner of the round.</li>
            </ul>
        `,
        rulesContent: `
            <h3>Scoring System</h3>
            <p>The game consists of multiple rounds (configurable in settings). The winner of a round gets 1 point. If the board is full and there's no winner, the round is a draw, and both players get ½ a point. The player with the highest score at the end of all rounds wins the match!</p>
            <h3>Naming Rules</h3>
            <ul>
                <li>Player names cannot be the same.</li>
                <li>Names cannot contain the words "seri", "tie", or "draw" to avoid confusion on the scoreboard.</li>
                <li>If names are left blank, they will default to "Player 1" and "Player 2".</li>
            </ul>
        `,
        rulesCloseBtn: "Got It",
        errorForbiddenName: "Name not recommended. See Rules for details.",
        errorSameName: "Player names cannot be the same.",
        flag: "https://flagcdn.com/us.svg"
    }
};

function setLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    
    const elementsToTranslate = {
        mainMenuTitle: t.gameTitle, 
        newGameBtn: t.newGameBtn,
        settingsModalTitle: t.settingsModalTitle, 
        firstTurnLabel: t.firstTurnLabel,
        alternateTurnsLabel: t.alternateTurnsLabel, 
        startGameBtn: t.startGameBtn,
        recapTitle: t.recapTitle, 
        recapHistoryTitle: t.recapHistoryTitle,
        'recap-close-btn': t.recapCloseBtn, 
        gameTitle: t.gameTitle, 
        'round-title': t.roundTitle,
        alternateRematchLabel: t.alternateRematchLabel, 
        useColorsLabel: t.useColorsLabel,
        p1ColorLabel: t.p1ColorLabel, 
        p2ColorLabel: t.p2ColorLabel,
        'rules-close-btn': t.rulesCloseBtn,
        howToPlayTabBtn: t.howToPlayTab, 
        rulesTabBtn: t.rulesTab,
        howToPlayTitle: t.howToPlayTitle, 
        rulesTitle: t.rulesTitle
    };

    for (const id in elementsToTranslate) {
        const el = document.getElementById(id);
        if(el) el.textContent = elementsToTranslate[id];
    }
    
    rulesContent.innerHTML = t.rulesContent;
    howToPlayContent.innerHTML = t.howToPlayContent;
    howToPlayOpenBtn.setAttribute('aria-label', t.howToPlayBtnLabel);
    howToPlayOpenBtn.setAttribute('title', t.howToPlayBtnLabel);
    rulesOpenBtn.setAttribute('aria-label', t.rulesBtnLabel);
    rulesOpenBtn.setAttribute('title', t.rulesBtnLabel);
    
    document.querySelector('.language-option[data-lang="en"]').innerHTML = `<img src="https://flagcdn.com/us.svg" alt="Bendera Amerika"> English (US)`;

    p1NameInput.placeholder = t.p1NamePlaceholder;
    p2NameInput.placeholder = t.p2NamePlaceholder;
    chooseP1Start.textContent = t.player1Tag;
    chooseP2Start.textContent = t.player2Tag;
    roundLabelText.textContent = t.roundLabelText;
    document.querySelector('#currentFlag').src = t.flag;

    if (appContainer.classList.contains('active')) {
        updatePlayerTags();
        if (!gameActive && (lastRoundResult.winner || lastRoundResult.isDraw)) {
             if (lastRoundResult.isDraw) {
                statusDisplay.textContent = t.roundDraw;
                roundResultStatus.innerHTML = t.roundResultDraw;
             } else {
                const winnerName = lastRoundResult.winner === playerSymbols.p1 ? playerNames.p1 : playerNames.p2;
                statusDisplay.textContent = t.roundWon(winnerName);
                roundResultStatus.innerHTML = t.roundResultWinner(winnerName, lastRoundResult.winner);
             }
        } else if (gameActive) {
             const currentPlayerName = currentPlayer === playerSymbols.p1 ? playerNames.p1 : playerNames.p2;
             statusDisplay.textContent = t.playerXTurn(currentPlayerName, currentPlayer);
        }
        roundDisplay.textContent = t.roundStatus(currentRound, gameSettings.totalRounds);
        updateEndGameButtons();
        if (recapModal.classList.contains('active')) {
            populateRecapModal(currentRecapMatch);
        }
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
    player1Info.classList.toggle('active', currentPlayer === playerSymbols.p1);
    player2Info.classList.toggle('active', currentPlayer === playerSymbols.p2);
    setLanguage(currentLanguage);
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

    if (roundWon) {
        gameActive = false;
        scores[currentPlayer]++;
        updateScoreboard();
        lastRoundResult = { winner: currentPlayer, isDraw: false };
        matchHistories[matchCount - 1].rounds.push({ round: currentRound, winner: currentPlayer });
        statusDisplay.classList.add('win-animation');
        const winnerScoreElement = currentPlayer === playerSymbols.p1 ? player1Score : player2Score;
        winnerScoreElement.classList.add('win-animation');

        winningCells.forEach(index => {
            const cell = cells[index];
            cell.classList.add('win');
            if (gameSettings.useColors) {
                 cell.classList.add(currentPlayer === playerSymbols.p1 ? 'p1-win' : 'p2-win');
            }
        });
        setLanguage(currentLanguage);
        checkMatchOver();
        return;
    }

    if (!gameState.includes("")) {
        gameActive = false;
        scores.X += 0.5;
        scores.O += 0.5;
        updateScoreboard();
        lastRoundResult = { winner: null, isDraw: true };
        matchHistories[matchCount - 1].rounds.push({ round: currentRound, winner: null });
        setLanguage(currentLanguage);
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
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = roundStarter;
    lastRoundResult = { winner: null, isDraw: false };
    
    statusDisplay.classList.remove('win-animation');
    player1Score.classList.remove('win-animation');
    player2Score.classList.remove('win-animation');
    roundResultStatus.innerHTML = '';
    
    player1Info.classList.toggle('active', currentPlayer === playerSymbols.p1);
    player2Info.classList.toggle('active', currentPlayer === playerSymbols.p2);

    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('occupied', 'win', 'p1-win', 'p2-win');
    });
    
    clearEndGameButtons();
    nextRoundBtn.style.display = 'none';
    updateScoreboard();
    setLanguage(currentLanguage);
}

function formatScore(score) {
    if (score === 0) return '0';
    const integerPart = Math.floor(score);
    const hasHalf = (score % 1 !== 0);
    let result = '';
    if (integerPart > 0 || !hasHalf) result += integerPart;
    if (hasHalf) {
      result += `<span class="score-fraction">½</span>`;
    }
    return result;
}

function updateScoreboard() {
    player1Score.innerHTML = formatScore(scores[playerSymbols.p1]);
    player2Score.innerHTML = formatScore(scores[playerSymbols.p2]);
}

function triggerCelebration() {
    const p1MatchScore = scores[playerSymbols.p1];
    const p2MatchScore = scores[playerSymbols.p2];
    let winner = null;
    if (p1MatchScore > p2MatchScore) winner = 'p1';
    else if (p2MatchScore > p1MatchScore) winner = 'p2';

    if (winner && gameSettings.useColors) {
        gameContainer.classList.add(`${winner}-wins`);
        setTimeout(() => {
            gameContainer.classList.remove(`${winner}-wins`);
        }, 2000);
    }
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confetti.style.backgroundColor = RAINBOW_COLORS[Math.floor(Math.random() * RAINBOW_COLORS.length)];
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}


function checkMatchOver() {
    if (currentRound >= gameSettings.totalRounds && !gameActive) {
        const p1MatchScore = scores[playerSymbols.p1];
        const p2MatchScore = scores[playerSymbols.p2];
        
        let currentH2H = {...headToHeadScores};

        if (p1MatchScore > p2MatchScore) {
            headToHeadScores.p1++;
        } else if (p2MatchScore > p1MatchScore) {
            headToHeadScores.p2++;
        }
        
        matchHistories[matchCount-1].finalScores = {...scores};
        matchHistories[matchCount-1].finalH2H = {...headToHeadScores};
        matchHistories[matchCount-1].initialH2H = currentH2H;

        triggerCelebration();

        recapTimeoutId = setTimeout(() => {
            currentRecapMatch = matchCount;
            populateRecapModal(currentRecapMatch);
            recapModal.classList.add('active');
        }, 2000);

        updateEndGameButtons();
    } else if (!gameActive) {
        nextRoundBtn.style.display = 'block';
    }
}

function populateRecapModal(matchNum) {
    if (!matchHistories[matchNum-1]) return;
    const t = translations[currentLanguage];
    const history = matchHistories[matchNum-1];
    
    const { p1Name, p2Name, p1Symbol, p2Symbol, finalScores, finalH2H, rounds } = history;
    
    const p1MatchScore = finalScores[p1Symbol];
    const p2MatchScore = finalScores[p2Symbol];

    if (p1MatchScore > p2MatchScore) {
        recapWinner.textContent = t.matchWinner(p1Name);
    } else if (p2MatchScore > p1MatchScore) {
        recapWinner.textContent = t.matchWinner(p2Name);
    } else {
        recapWinner.textContent = t.matchDraw;
    }

    recapP1Name.textContent = p1Name;
    recapP2Name.textContent = p2Name;
    recapP1Score.innerHTML = formatScore(p1MatchScore);
    recapP2Score.innerHTML = formatScore(p2MatchScore);

    matchCounter.textContent = t.recapMatchLabel(matchNum);
    recapNav.style.display = matchHistories.length > 1 ? 'flex' : 'none';
    prevMatchBtn.disabled = matchNum <= 1;
    nextMatchBtn.disabled = matchNum >= matchHistories.length;

    recapH2H.textContent = `(${finalH2H.p1} - ${finalH2H.p2})`;
    recapH2H.style.visibility = 'visible';

    recapTimeline.innerHTML = '';
    rounds.forEach(round => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        let winnerTop = '';
        let winnerBottom = '';
        let dotClass = 'draw';

        if(round.winner) {
            const winnerIsP1 = round.winner === p1Symbol;
            winnerTop = winnerIsP1 ? t.recapRoundItem(p1Name) : '';
            winnerBottom = !winnerIsP1 ? t.recapRoundItem(p2Name) : '';
            dotClass = winnerIsP1 ? 'p1-win' : 'p2-win';
        } else {
            winnerTop = t.recapRoundDraw;
        }

        item.innerHTML = `
            <span class="winner-label winner-top">${winnerTop}</span>
            <div class="timeline-dot ${gameSettings.useColors ? dotClass : ''}">${round.round}</div>
            <span class="winner-label winner-bottom">${winnerBottom}</span>
        `;
        recapTimeline.appendChild(item);
    });
}

function clearEndGameButtons() {
    buttonContainer.innerHTML = '';
    buttonContainer.appendChild(nextRoundBtn);
}

function updateEndGameButtons() {
    const t = translations[currentLanguage];
    clearEndGameButtons();
    if (!gameActive && currentRound < gameSettings.totalRounds) {
        nextRoundBtn.style.display = 'block';
        nextRoundBtn.textContent = t.nextRoundBtnText;
    } else if (!gameActive && currentRound >= gameSettings.totalRounds) {
        nextRoundBtn.style.display = 'none';

        const rematchBtn = document.createElement('button');
        rematchBtn.id = 'rematchBtn';
        rematchBtn.innerHTML = `${SVG_RETRY} ${t.rematchBtn}`;
        rematchBtn.onclick = startRematch;

        const showRecapBtn = document.createElement('button');
        showRecapBtn.id = 'showRecapBtn';
        showRecapBtn.textContent = t.showRecapBtn;
        showRecapBtn.onclick = () => {
             clearTimeout(recapTimeoutId);
             currentRecapMatch = matchCount;
             setLanguage(currentLanguage);
             populateRecapModal(currentRecapMatch);
             recapModal.classList.add('active');
        };
        
        const backToMenuBtn = document.createElement('button');
        backToMenuBtn.id = 'backToMenuBtn';
        backToMenuBtn.textContent = t.backToMenuBtn;
        backToMenuBtn.onclick = returnToMainMenu;
        
        buttonContainer.appendChild(rematchBtn);
        buttonContainer.appendChild(showRecapBtn);
        buttonContainer.appendChild(backToMenuBtn);
    }
}

function startFirstMatch() {
    matchCount = 0;
    headToHeadScores = { p1: 0, p2: 0 };
    matchHistories = [];
    startMatch();
}

function startRematch() {
    clearTimeout(recapTimeoutId);
    if (gameSettings.alternateOnRematch) {
        gameSettings.match1Round1Starter = gameSettings.match1Round1Starter === 'p1' ? 'p2' : 'p1';
    }
    startMatch();
}

function startMatch() {
    scores = { X: 0, O: 0 };
    currentRound = 1;

    matchCount++;
    matchHistories.push({
        matchNum: matchCount,
        p1Name: playerNames.p1,
        p2Name: playerNames.p2,
        p1Symbol: playerSymbols.p1,
        p2Symbol: playerSymbols.p2,
        rounds: [],
        finalScores: {},
        initialH2H: {...headToHeadScores}
    });

    roundStarter = gameSettings.match1Round1Starter === 'p1' ? playerSymbols.p1 : playerSymbols.p2;

    updatePlayerTags();
    startNewRound();
}

function returnToMainMenu() {
    clearTimeout(recapTimeoutId);
    appContainer.classList.remove('active');
    mainMenuScreen.classList.add('active');
    recapModal.classList.remove('active');

    lastRoundResult = { winner: null, isDraw: false };
    
    statusDisplay.innerHTML = '&nbsp;';
    roundResultStatus.innerHTML = '';
    
    const t = translations[currentLanguage];
    roundDisplay.textContent = t.roundStatus(1, gameSettings.totalRounds);
    
    p1NameInput.value = '';
    p2NameInput.value = '';

    gameSettings.match1Round1Starter = 'p1';
    chooseP1Start.classList.add('selected');
    chooseP2Start.classList.remove('selected');
}

function updatePlayerTags() {
    const t = translations[currentLanguage];
    
    player1Name.textContent = playerNames.p1;
    player2Name.textContent = playerNames.p2;

    player1Tag.textContent = `${t.player1Tag} (${playerSymbols.p1})`;
    player2Tag.textContent = `${t.player2Tag} (${playerSymbols.p2})`;
    
    const indicator1 = player1Info.querySelector('.indicator');
    const indicator2 = player2Info.querySelector('.indicator');
    indicator1.className = 'indicator';
    indicator2.className = 'indicator';
    if(gameSettings.useColors) {
        indicator1.classList.add('p1-color');
        indicator2.classList.add('p2-color');
    }
}

function updateSymbolButtonColors() {
    document.body.classList.toggle('custom-colors-active', gameSettings.useColors);
    const p1Selected = p1SymbolPicker.querySelector('.selected');
    const p2Selected = p2SymbolPicker.querySelector('.selected');
    
    p1SymbolPicker.querySelectorAll('.symbol-btn').forEach(b => b.classList.remove('p1-color','p2-color'));
    p2SymbolPicker.querySelectorAll('.symbol-btn').forEach(b => b.classList.remove('p1-color','p2-color'));

    if (p1Selected) p1Selected.classList.add('p1-color');
    if (p2Selected) p2Selected.classList.add('p2-color');
}

function generateColorSwatches() {
    [p1ColorOptions, p2ColorOptions].forEach((container, playerIndex) => {
        container.innerHTML = '';
        RAINBOW_COLORS.forEach(color => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = color;
            swatch.dataset.color = color;
            
            const isP1 = playerIndex === 0;
            if ((isP1 && color === gameSettings.p1Color) || (!isP1 && color === gameSettings.p2Color)) {
                swatch.classList.add('selected');
            }

            swatch.addEventListener('click', () => {
                const otherPlayerColor = isP1 ? gameSettings.p2Color : gameSettings.p1Color;
                if (color === otherPlayerColor) return;

                const player = isP1 ? 'p1' : 'p2';
                gameSettings[`${player}Color`] = color;
                document.documentElement.style.setProperty(`--${player}-color`, color);
                
                container.querySelector('.selected')?.classList.remove('selected');
                swatch.classList.add('selected');

                const otherContainer = isP1 ? p2ColorOptions : p1ColorOptions;
                otherContainer.querySelectorAll('.color-swatch').forEach(s => {
                    s.classList.toggle('disabled', s.dataset.color === color);
                });
                updateSymbolButtonColors();
            });
            container.appendChild(swatch);
        });
    });
     p2ColorOptions.querySelector(`[data-color="${gameSettings.p1Color}"]`)?.classList.add('disabled');
     p1ColorOptions.querySelector(`[data-color="${gameSettings.p2Color}"]`)?.classList.add('disabled');
}

function initializeSettings() {
    [p1SymbolPicker, p2SymbolPicker].forEach((picker, index) => {
        const isP1 = index === 0;
        picker.addEventListener('click', (e) => {
            if (e.target.classList.contains('symbol-btn')) {
                const selectedSymbol = e.target.dataset.symbol;
                const otherSymbol = selectedSymbol === 'X' ? 'O' : 'X';
                
                playerSymbols[isP1 ? 'p1' : 'p2'] = selectedSymbol;
                playerSymbols[isP1 ? 'p2' : 'p1'] = otherSymbol;

                picker.querySelector('.selected')?.classList.remove('selected');
                e.target.classList.add('selected');

                const otherPicker = isP1 ? p2SymbolPicker : p1SymbolPicker;
                otherPicker.querySelector('.selected')?.classList.remove('selected');
                otherPicker.querySelector(`[data-symbol="${otherSymbol}"]`).classList.add('selected');
                updateSymbolButtonColors();
            }
        });
    });
     p1SymbolPicker.querySelector('[data-symbol="X"]').classList.add('selected');
     p2SymbolPicker.querySelector('[data-symbol="O"]').classList.add('selected');
}

function validateSettings() {
    const t = translations[currentLanguage];
    const forbiddenNames = ["seri", "draw", "tie"];
    settingsError.textContent = '';

    let p1Name = p1NameInput.value.trim();
    let p2Name = p2NameInput.value.trim();
    
    if (forbiddenNames.includes(p1Name.toLowerCase()) || forbiddenNames.includes(p2Name.toLowerCase())) {
        settingsError.textContent = t.errorForbiddenName;
        return false;
    }
    if (p1Name && p1Name.toLowerCase() === p2Name.toLowerCase()) {
        settingsError.textContent = t.errorSameName;
        return false;
    }

    playerNames.p1 = p1Name || t.player1Tag;
    playerNames.p2 = p2Name || t.player2Tag;
    return true;
}

function openRulesModal(activeTabId) {
    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    const tabToActivate = document.querySelector(`.tab-link[data-tab="${activeTabId}"]`);
    const contentToActivate = document.getElementById(activeTabId);

    if (tabToActivate) tabToActivate.classList.add('active');
    if (contentToActivate) contentToActivate.classList.add('active');
    
    rulesModal.classList.add('active');
}

// Event Listeners
newGameBtn.addEventListener('click', () => {
    mainMenuScreen.classList.remove('active');
    settingsModal.classList.add('active');
});

howToPlayOpenBtn.addEventListener('click', () => {
    openRulesModal('howToPlayTab');
});

rulesOpenBtn.addEventListener('click', () => {
    openRulesModal('rulesTab');
});

chooseP1Start.addEventListener('click', () => {
    gameSettings.match1Round1Starter = 'p1';
    chooseP1Start.classList.add('selected');
    chooseP2Start.classList.remove('selected');
});
chooseP2Start.addEventListener('click', () => {
    gameSettings.match1Round1Starter = 'p2';
    chooseP2Start.classList.add('selected');
    chooseP1Start.classList.remove('selected');
});

useColorsCheck.addEventListener('change', (e) => {
    gameSettings.useColors = e.target.checked;
    colorPickerContainer.classList.toggle('visible', gameSettings.useColors);
    document.body.classList.toggle('custom-colors-active', gameSettings.useColors);
    updateSymbolButtonColors();
});

startGameBtn.addEventListener('click', () => {
    if (!validateSettings()) return;

    gameSettings.totalRounds = parseInt(roundSlider.value);
    gameSettings.alternateTurns = alternateTurnsCheck.checked;
    gameSettings.alternateOnRematch = alternateRematchCheck.checked;
    
    settingsModal.classList.remove('active');
    appContainer.classList.add('active');
    
    startFirstMatch();
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

[settingsModal, recapModal, rulesModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            if (modal === settingsModal) mainMenuScreen.classList.add('active');
        }
    });
});
recapCloseBtn.addEventListener('click', () => recapModal.classList.remove('active'));
rulesCloseBtn.addEventListener('click', () => rulesModal.classList.remove('active'));

tabLinks.forEach(tab => {
    tab.addEventListener('click', () => {
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

prevMatchBtn.addEventListener('click', () => {
    if (currentRecapMatch > 1) {
        currentRecapMatch--;
        populateRecapModal(currentRecapMatch);
    }
});
nextMatchBtn.addEventListener('click', () => {
    if (currentRecapMatch < matchHistories.length) {
        currentRecapMatch++;
        populateRecapModal(currentRecapMatch);
    }
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
        if(rulesModal.classList.contains('active')) {
            rulesModal.classList.remove('active');
        }
    }
});

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelectorAll('.language-option').forEach(btn => btn.addEventListener('click', (e) => {
    const lang = e.target.closest('.language-option').dataset.lang;
    if(lang) setLanguage(lang);
}));

window.addEventListener('load', () => {
    initializeSettings();
    setLanguage('id');
    generateColorSwatches();
    chooseP1Start.classList.add('selected');
    document.documentElement.style.setProperty('--p1-color', gameSettings.p1Color);
    document.documentElement.style.setProperty('--p2-color', gameSettings.p2Color);
});

