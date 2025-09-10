// DOM Elements
const statusDisplay = document.querySelector('#status');
const board = document.querySelector('#board');
const superBoard = document.querySelector('#superBoard');
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
const matchDisplayInGame = document.querySelector('#match-display-ingame');

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
const recapCloseBtnX = document.querySelector('#recap-close-btn-x');


// Menu and Settings Elements
const newGameBtn = document.querySelector('#newGameBtn');
const newGameBtnText = document.querySelector('#newGameBtnText');
const howToPlayOpenBtn = document.querySelector('#howToPlayOpenBtn');
const rulesOpenBtn = document.querySelector('#rulesOpenBtn');
const settingsOpenBtn = document.querySelector('#settingsOpenBtn');
const rulesCloseBtn = document.querySelector('#rules-close-btn');
const rulesCloseBtnX = document.querySelector('#rules-close-btn-x');
const settingsCloseBtnX = document.querySelector('#settings-close-btn-x');
const modeNormalBtn = document.getElementById('modeNormalBtn');
const modeSuperBtn = document.getElementById('modeSuperBtn');
const p1NameInput = document.querySelector('#p1NameInput');
const p2NameInput = document.querySelector('#p2NameInput');
const p1SymbolPicker = document.querySelector('#p1-symbol-picker');
const p2SymbolPicker = document.querySelector('#p2-symbol-picker');
const settingsError = document.querySelector('#settings-error');
const roundSettingsContainer = document.getElementById('round-settings-container');
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
const tieBreakerSetting = document.querySelector('.tie-breaker-setting');
const tieBreakerCheck = document.getElementById('tieBreakerCheck');

// Rules Modal Tabs
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const subTabLinks = document.querySelectorAll('.sub-tab-link');
const subTabContents = document.querySelectorAll('.sub-tab-content');
const howToPlayTitle = document.getElementById('howToPlayTitle');
const rulesTitle = document.getElementById('rulesTitle');
const howToPlayNormalContent = document.getElementById('howToPlayNormal');
const howToPlaySuperContent = document.getElementById('howToPlaySuper');
const rulesContent = document.getElementById('rulesContent');
const howToPlayTabBtn = document.getElementById('howToPlayTabBtn');
const rulesTabBtn = document.getElementById('rulesTabBtn');

// In-Game Controls & Settings
const inGameSettingsModal = document.querySelector('#inGameSettingsModal');
const exitGameBtn = document.querySelector('#exitGameBtn');
const inGameSettingsBtn = document.querySelector('#inGameSettingsBtn');
const inGameSettingsCloseBtn = document.querySelector('#inGameSettingsCloseBtn');
const alignTopBtn = document.querySelector('#alignTopBtn');
const alignCenterBtn = document.querySelector('#alignCenterBtn');
const alignBottomBtn = document.querySelector('#alignBottomBtn');
const drawIndicatorOnBtn = document.querySelector('#drawIndicatorOnBtn');
const drawIndicatorHoverOneBtn = document.querySelector('#drawIndicatorHoverOneBtn');
const drawIndicatorHoverAllBtn = document.querySelector('#drawIndicatorHoverAllBtn');
const drawIndicatorOffBtn = document.querySelector('#drawIndicatorOffBtn');
const mainContentWrapper = document.querySelector('#main-content-wrapper');
const exitConfirmationModal = document.querySelector('#exitConfirmationModal');
const cancelExitBtn = document.querySelector('#cancelExitBtn');
const confirmExitBtn = document.querySelector('#confirmExitBtn');
const infoPanel = document.querySelector('#info-panel');
const inGameControls = document.querySelector('.in-game-controls');
const controlsTopBtn = document.querySelector('#controlsTopBtn');
const controlsCenterBtn = document.querySelector('#controlsCenterBtn');
const controlsBottomBtn = document.querySelector('#controlsBottomBtn');
const currentLangInGame = document.querySelector('#currentLangInGame');
const currentFlagInGame = document.querySelector('#currentFlagInGame');


// Game State
let gameActive = false;
let currentPlayer = 'X';
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
    p1Color: '#D32F2F', 
    p2Color: '#1976D2', 
    match1Round1Starter: 'p1',
    useTieBreaker: false,
    scoreboardAlign: 'center',
    controlsAlign: 'top',
    drawIndicatorMode: 'on'
};
let settingsCache = {
    normal: { totalRounds: 3 },
    super: { totalRounds: 2, useTieBreaker: false }
};
let currentRound = 1;
let roundStarter = 'X';
let lastRoundResult = { winner: null, isDraw: false };
let matchHistories = [];
let currentRecapMatch = 1;
let recapTimeoutId = null;

// Mode-specific states
let currentGameMode = 'normal';
let gameState = ['', '', '', '', '', '', '', '', '']; // For normal mode
let smallBoardStates = []; // For super mode
let mainBoardState = []; // For super mode
let nextActiveBoardIndex = null; // For super mode

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const SVG_RETRY = `<svg class="retry-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" stroke-width="2"/><path d="M15.9922 12.3333C15.9922 14.5424 14.2043 16.3333 11.9922 16.3333C9.78002 16.3333 7.99219 14.5424 7.99219 12.3333C7.99219 10.1242 9.78002 8.33331 11.9922 8.33331C13.4337 8.33331 14.6934 9.07137 15.4422 10.1666" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M15.4414 7.25V10.1667H12.5248" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const RAINBOW_COLORS = ['#D32F2F', '#F57C00', '#E6A100', '#388E3C', '#1976D2', '#7B1FA2', '#C2185B'];
const SVG_O_OVERLAY = `<svg class="o-char-svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" /></svg>`;

const translations = {
    id: {
        gameTitleNormal: "Tic Tac Toe",
        gameTitleSuper: "Super Tic Tac Toe",
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
        settingsBtnLabel: "Pengaturan",
        settingsModalTitle: "Pengaturan Permainan",
        gameModeLabel: "Mode Permainan",
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
        startGameBtn: "Mulai Permainan!",
        roundTitle: "Babak",
        roundStatus: (round, total) => `${round} DARI ${total}`,
        matchWinner: (name) => `${name} MEMENANGKAN PERMAINAN!`,
        matchDraw: "PERMAINAN BERAKHIR SERI!",
        roundResultWinner: (name, symbol) => `${name} (${symbol})<br>+1 Poin`,
        roundResultDraw: `Kedua Pemain<br>+½ Poin`,
        recapTitle: "Hasil Akhir",
        recapHistoryTitle: "Riwayat Babak",
        recapCloseBtn: "Kembali",
        matchDisplayLabel: (matchNum) => `Pertandingan ${matchNum}`,
        recapMatchLabel: (matchNum) => `Pertandingan ${matchNum}`,
        recapRoundItem: (winnerName) => `${winnerName}`,
        recapRoundDraw: "SERI",
        howToPlayTitle: "Cara Bermain",
        rulesTitle: "Aturan Permainan",
        howToPlayTab: "Cara Bermain",
        rulesTab: "Aturan",
        tieBreakerLabel: "Gunakan Tie-Breaker Saat Seri",
        alternateTurnsTooltip: "Jika aktif, pemain yang memulai babak akan bergantian setiap babak baru.",
        alternateRematchTooltip: "Jika aktif, pemain yang memulai pertandingan pertama akan bergantian di pertandingan ulang berikutnya.",
        tieBreakerTooltip: "Khusus Mode Super: Jika babak berakhir seri, pemenang ditentukan dari jumlah kotak yang dimenangkan.",
        howToPlayNormalContent: `<h3>Tujuan</h3><p>Menjadi pemain pertama yang membuat garis horizontal, vertikal, atau diagonal dengan tiga simbol.</p><h3>Cara Bermain</h3><ul><li>Permainan dimainkan di papan 3x3.</li><li>Pemain bergiliran menempatkan simbol mereka di kotak yang kosong.</li><li>Pemain pertama yang mendapatkan 3 simbol berturut-turut adalah pemenang babak tersebut.</li></ul>`,
        howToPlaySuperContent: `<h3>Konsep</h3><p>Permainan ini terdiri dari 9 papan Tic Tac Toe kecil dalam satu papan besar. Untuk memenangkan satu babak, Anda harus memenangkan 3 papan kecil dalam satu baris (horizontal, vertikal, atau diagonal) di papan besar.</p><h3>Aturan Main</h3><ul><li>Langkah pertama bebas di papan mana saja.</li><li>Langkah Anda di sebuah kotak kecil akan <b>menentukan di papan kecil mana lawan harus bermain selanjutnya.</b> Contoh: jika Anda bermain di kotak kanan atas pada papan kecil, lawan Anda harus bermain di papan kecil yang berada di posisi kanan atas.</li><li>Jika papan tujuan sudah dimenangkan atau seri, lawan boleh bermain di papan kecil mana pun yang masih tersedia.</li></ul>`,
        rulesContent: `<h3>Sistem Skor</h3><p>Permainan terdiri dari beberapa babak (dapat diatur). Pemenang babak mendapatkan 1 poin. Jika papan penuh dan tidak ada pemenang, babak berakhir seri dan kedua pemain mendapatkan ½ poin. Pemain dengan skor tertinggi di akhir semua babak memenangkan pertandingan!</p><h3>Aturan Tie-Breaker (Mode Super)</h3><p>Jika opsi ini aktif dan babak berakhir seri (tidak ada 3 baris di papan besar), pemenang akan ditentukan berdasarkan siapa yang memenangkan lebih banyak papan kecil. Jika jumlah kemenangan papan kecil juga sama, barulah babak dinyatakan benar-benar seri.</p><h3>Aturan Nama</h3><ul><li>Nama pemain tidak boleh sama.</li><li>Nama tidak boleh mengandung kata "seri", "tie", atau "draw" untuk menghindari kebingungan.</li></ul>`,
        rulesCloseBtn: "Mengerti",
        errorForbiddenName: "Nama tidak disarankan. Cek Aturan.",
        errorSameName: "Nama pemain tidak boleh sama.",
        flag: "https://flagcdn.com/id.svg",
        langName: "Indonesia",
        inGameSettingsTitle: "Pengaturan Dalam Game",
        languageSelectLabel: "Pilih Bahasa",
        scoreboardAlignLabel: "Posisi Papan Skor",
        alignTop: "Atas",
        alignCenter: "Tengah",
        alignBottom: "Bawah",
        drawIndicatorLabel: "Penanda Seri (Mode Super)",
        drawIndicatorOn: "Selalu Aktif",
        drawIndicatorHoverOne: "Hover (Satu)",
        drawIndicatorHoverAll: "Hover (Semua)",
        drawIndicatorOff: "Nonaktif",
        inGameSettingsClose: "Kembali",
        exitGameTitle: "Keluar",
        inGameSettingsTitleAttr: "Pengaturan",
        drawChar: 'S',
        exitConfirmTitle: 'Keluar dari Permainan?',
        exitConfirmText: 'Tindakan ini akan mengakhiri pertandingan saat ini dan kembali ke menu utama.',
        cancel: 'Batal',
        exit: 'Keluar',
        controlsPositionLabel: 'Posisi Tombol Kontrol'
    },
    en: {
        gameTitleNormal: "Tic Tac Toe",
        gameTitleSuper: "Super Tic Tac Toe",
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
        settingsBtnLabel: "Settings",
        settingsModalTitle: "Game Settings",
        gameModeLabel: "Game Mode",
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
        roundResultDraw: `Both Players<br>+½ Point`,
        recapTitle: "Final Result",
        recapHistoryTitle: "Round History",
        recapCloseBtn: "Back",
        matchDisplayLabel: (matchNum) => `Match ${matchNum}`,
        recapMatchLabel: (matchNum) => `Match ${matchNum}`,
        recapRoundItem: (winnerName) => `${winnerName}`,
        recapRoundDraw: "TIE",
        howToPlayTitle: "How to Play",
        rulesTitle: "Game Rules",
        howToPlayTab: "How to Play",
        rulesTab: "Rules",
        tieBreakerLabel: "Use Tie-Breaker on Draw",
        alternateTurnsTooltip: "If active, the starting player will alternate each new round.",
        alternateRematchTooltip: "If active, the player who started the first match will alternate in the next rematch.",
        tieBreakerTooltip: "Super Mode Only: If a round ends in a draw, the winner is decided by who won the most small boards.",
        howToPlayNormalContent: `<h3>Objective</h3><p>Be the first player to form a horizontal, vertical, or diagonal line of three of your symbols.</p><h3>Gameplay</h3><ul><li>The game is played on a 3x3 grid.</li><li>Players take turns placing their symbols in empty squares.</li><li>The first player to get 3 of their symbols in a row is the winner of the round.</li></ul>`,
        howToPlaySuperContent: `<h3>Concept</h3><p>This game consists of 9 small Tic Tac Toe boards within one large board. To win a round, you must win 3 small boards in a row (horizontally, vertically, or diagonally) on the main board.</p><h3>Gameplay</h3><ul><li>The first move is a free choice on any board.</li><li>Your move in a small square <b>determines which small board the opponent must play in next.</b> For example, if you play in the top-right square of a small board, your opponent must then play in the top-right small board.</li><li>If the target board is already won or drawn, the opponent is free to play in any available small board.</li></ul>`,
        rulesContent: `<h3>Scoring System</h3><p>The game consists of multiple rounds (configurable). The winner of a round gets 1 point. If the board is full and there's no winner, the round is a draw, and both players get ½ a point. The player with the highest score at the end of all rounds wins the match!</p><h3>Tie-Breaker Rule (Super Mode)</h3><p>If this option is active and a round ends in a draw (no 3-in-a-row on the main board), the winner will be decided by who won the most small boards. If the number of won small boards is also equal, then the round is a true draw.</p><h3>Naming Rules</h3><ul><li>Player names cannot be the same.</li><li>Names cannot contain the words "seri", "tie", or "draw".</li></ul>`,
        rulesCloseBtn: "Got It",
        errorForbiddenName: "Name not recommended. See Rules.",
        errorSameName: "Player names cannot be the same.",
        flag: "https://flagcdn.com/us.svg",
        langName: "English (US)",
        inGameSettingsTitle: "In-Game Settings",
        languageSelectLabel: "Select Language",
        scoreboardAlignLabel: "Scoreboard Position",
        alignTop: "Top",
        alignCenter: "Center",
        alignBottom: "Bottom",
        drawIndicatorLabel: "Draw Marker (Super Mode)",
        drawIndicatorOn: "Always On",
        drawIndicatorHoverOne: "Hover (One)",
        drawIndicatorHoverAll: "Hover (All)",
        drawIndicatorOff: "Off",
        inGameSettingsClose: "Back",
        exitGameTitle: "Exit",
        inGameSettingsTitleAttr: "Settings",
        drawChar: 'T',
        exitConfirmTitle: 'Exit Game?',
        exitConfirmText: 'This will end the current match and return you to the main menu.',
        cancel: 'Cancel',
        exit: 'Exit',
        controlsPositionLabel: 'Controls Position'
    }
};

function setLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    
    const elementsToTranslate = {
        'newGameBtnText': t.newGameBtn,
        'settingsModalTitle': t.settingsModalTitle, 'firstTurnLabel': t.firstTurnLabel,
        'startGameBtnText': t.startGameBtn,
        'recapTitle': t.recapTitle, 'recapHistoryTitle': t.recapHistoryTitle,
        'recap-close-btn': t.recapCloseBtn, 'round-title': t.roundTitle, 
        'p1ColorLabel': t.p1ColorLabel, 'p2ColorLabel': t.p2ColorLabel, 
        'rules-close-btn': t.rulesCloseBtn, 'gameModeLabel': t.gameModeLabel, 
        'howToPlayTitle': t.howToPlayTitle, 'rulesTitle': t.rulesTitle,
        'howToPlayTabBtn': t.howToPlayTab, 'rulesTabBtn': t.rulesTab,
        'useColorsLabel': t.useColorsLabel,
        'inGameSettingsTitle': t.inGameSettingsTitle,
        'languageSelectLabel': t.languageSelectLabel,
        'scoreboardAlignLabel': t.scoreboardAlignLabel,
        'alignTopBtn': t.alignTop,
        'alignCenterBtn': t.alignCenter,
        'alignBottomBtn': t.alignBottom,
        'drawIndicatorLabel': t.drawIndicatorLabel,
        'drawIndicatorOnBtn': t.drawIndicatorOn,
        'drawIndicatorHoverOneBtn': t.drawIndicatorHoverOne,
        'drawIndicatorHoverAllBtn': t.drawIndicatorHoverAll,
        'drawIndicatorOffBtn': t.drawIndicatorOff,
        'inGameSettingsCloseBtn': t.inGameSettingsClose,
        'exitConfirmTitle': t.exitConfirmTitle,
        'exitConfirmText': t.exitConfirmText,
        'cancelExitBtn': t.cancel,
        'confirmExitBtn': t.exit,
        'controlsPositionLabel': t.controlsPositionLabel,
        'controlsTopBtn': t.alignTop,
        'controlsCenterBtn': t.alignCenter,
        'controlsBottomBtn': t.alignBottom
    };

    for (const id in elementsToTranslate) {
        const el = document.getElementById(id);
        if(el) el.textContent = elementsToTranslate[id];
    }
    
    howToPlayNormalContent.innerHTML = t.howToPlayNormalContent;
    howToPlaySuperContent.innerHTML = t.howToPlaySuperContent;
    rulesContent.innerHTML = t.rulesContent;

    document.querySelector('#alternateTurnsLabel span').textContent = t.alternateTurnsLabel;
    document.querySelector('#alternateRematchLabel span').textContent = t.alternateRematchLabel;
    document.querySelector('#tieBreakerLabel span').textContent = t.tieBreakerLabel;

    document.querySelector('[data-tooltip-id="alternateTurnsTooltip"]').setAttribute('data-tooltip', t.alternateTurnsTooltip);
    document.querySelector('[data-tooltip-id="alternateRematchTooltip"]').setAttribute('data-tooltip', t.alternateRematchTooltip);
    document.querySelector('[data-tooltip-id="tieBreakerTooltip"]').setAttribute('data-tooltip', t.tieBreakerTooltip);

    howToPlayOpenBtn.setAttribute('title', t.howToPlayBtnLabel);
    rulesOpenBtn.setAttribute('title', t.rulesBtnLabel);
    settingsOpenBtn.setAttribute('title', t.settingsBtnLabel);
    exitGameBtn.setAttribute('title', t.exitGameTitle);
    inGameSettingsBtn.setAttribute('title', t.inGameSettingsTitleAttr);
    p1NameInput.placeholder = t.p1NamePlaceholder;
    p2NameInput.placeholder = t.p2NamePlaceholder;
    chooseP1Start.textContent = t.player1Tag;
    chooseP2Start.textContent = t.player2Tag;
    
    document.querySelector('#roundLabelText').textContent = t.roundLabelText;
    
    // Update flags and text for both dropdowns
    document.querySelector('#currentFlag').src = t.flag;
    document.querySelector('#currentFlagInGame').src = t.flag;
    document.querySelector('#currentLangInGame').textContent = t.langName;


    // Highlight selected language
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.lang === lang) {
            btn.classList.add('selected');
        }
    });

    if (appContainer.classList.contains('active')) {
        gameTitle.textContent = currentGameMode === 'normal' ? t.gameTitleNormal : t.gameTitleSuper;
        updatePlayerTags();
        if (!gameActive) {
            updateStatusForEndState();
        } else {
            const currentPlayerName = currentPlayer === playerSymbols.p1 ? playerNames.p1 : playerNames.p2;
            statusDisplay.textContent = t.playerXTurn(currentPlayerName, currentPlayer);
        }
        roundDisplay.textContent = t.roundStatus(currentRound, gameSettings.totalRounds);
        matchDisplayInGame.textContent = t.matchDisplayLabel(matchCount);
        updateEndGameButtons();
        if (recapModal.classList.contains('active')) {
            populateRecapModal(currentRecapMatch);
        }
    }
    
    if (superBoard.style.display === 'grid') {
        updateDrawMarkersLanguage();
    }
}

function updateStatusForEndState() {
    const t = translations[currentLanguage];
    if (lastRoundResult.isDraw) {
        statusDisplay.textContent = t.roundDraw;
        roundResultStatus.innerHTML = t.roundResultDraw;
    } else if (lastRoundResult.winner) {
        const winnerName = lastRoundResult.winner === playerSymbols.p1 ? playerNames.p1 : playerNames.p2;
        statusDisplay.textContent = t.roundWon(winnerName);
        roundResultStatus.innerHTML = t.roundResultWinner(winnerName, lastRoundResult.winner);
    }
}

function checkWinner(boardState) {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (boardState[a] && boardState[a] !== 'D' && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return { winner: boardState[a], line: winningConditions[i] };
        }
    }
    if (!boardState.includes('')) return { winner: 'D', line: [] };
    return { winner: null, line: [] };
}

function handleCellPlayed(clickedCell, symbol) {
    if (symbol === 'O') {
        clickedCell.innerHTML = `<svg class="o-char-svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" /></svg>`;
    } else {
        clickedCell.innerHTML = `<span class="x-char">${symbol}</span>`;
    }
    clickedCell.classList.add('occupied');
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === playerSymbols.p1 ? playerSymbols.p2 : playerSymbols.p1;
    player1Info.classList.toggle('active', currentPlayer === playerSymbols.p1);
    player2Info.classList.toggle('active', currentPlayer === playerSymbols.p2);
    document.body.classList.toggle('p2-turn', currentPlayer === playerSymbols.p2);
    setLanguage(currentLanguage);
}

function handleEndRound(winner) {
    gameActive = false;
    
    if (winner === 'D' && currentGameMode === 'super' && gameSettings.useTieBreaker) {
        const p1Boards = mainBoardState.filter(s => s === playerSymbols.p1).length;
        const p2Boards = mainBoardState.filter(s => s === playerSymbols.p2).length;

        if (p1Boards > p2Boards) {
            winner = playerSymbols.p1;
        } else if (p2Boards > p1Boards) {
            winner = playerSymbols.p2;
        }
    }

    if (winner === 'D') {
        scores[playerSymbols.p1] += 0.5;
        scores[playerSymbols.p2] += 0.5;
        lastRoundResult = { winner: null, isDraw: true };
        matchHistories[matchCount - 1].rounds.push({ round: currentRound, winner: null });
    } else {
        scores[winner]++;
        lastRoundResult = { winner: winner, isDraw: false };
        matchHistories[matchCount - 1].rounds.push({ round: currentRound, winner: winner });
        
        statusDisplay.classList.add('win-animation');
        const winnerScoreElement = winner === playerSymbols.p1 ? player1Score : player2Score;
        winnerScoreElement.classList.add('win-animation');
    }

    updateScoreboard();
    updateStatusForEndState();
    checkMatchOver();
}

function handleNormalResultValidation() {
    const result = checkWinner(gameState);
    if(result.winner) {
        if(result.winner !== 'D') {
             result.line.forEach(index => {
                const cell = cells[index];
                cell.classList.add('win');
                if (gameSettings.useColors) {
                    cell.classList.add(currentPlayer === playerSymbols.p1 ? 'p1-win' : 'p2-win');
                }
            });
        }
        handleEndRound(result.winner === 'D' ? 'D' : currentPlayer);
        return;
    }
    handlePlayerChange();
}

function updateDrawMarkersLanguage() {
    const t = translations[currentLanguage];
    document.querySelectorAll('.small-board.board-draw .small-board-overlay .x-char').forEach(el => {
        el.textContent = t.drawChar;
    });
}

function handleSuperResultValidation(clickedCell) {
    const smallBoardEl = clickedCell.closest('.small-board');
    const smallBoardIndex = parseInt(smallBoardEl.dataset.mainIndex);
    const cellIndex = parseInt(clickedCell.dataset.index);

    smallBoardStates[smallBoardIndex][cellIndex] = currentPlayer;
    
    const smallBoardResult = checkWinner(smallBoardStates[smallBoardIndex]);
    if (smallBoardResult.winner) {
        mainBoardState[smallBoardIndex] = smallBoardResult.winner;
        const overlay = smallBoardEl.querySelector('.small-board-overlay');
        
        if (smallBoardResult.winner === 'O') {
            overlay.innerHTML = SVG_O_OVERLAY;
        } else {
             const t = translations[currentLanguage];
             const text = smallBoardResult.winner === 'D' ? t.drawChar : smallBoardResult.winner;
             overlay.innerHTML = `<span class="x-char">${text}</span>`;
        }

        smallBoardEl.classList.add('board-won');
        if (smallBoardResult.winner !== 'D') {
             if (gameSettings.useColors) { 
                smallBoardEl.classList.add(`board-won-${smallBoardResult.winner}`);
            }
        } else {
            smallBoardEl.classList.add('board-draw');
        }
        
        const mainBoardResult = checkWinner(mainBoardState);
        if(mainBoardResult.winner) {
            handleEndRound(mainBoardResult.winner);
            return;
        }
    }
    
    nextActiveBoardIndex = cellIndex;
    if(mainBoardState[nextActiveBoardIndex] !== '') {
        nextActiveBoardIndex = null;
    }
    handlePlayerChange();
    updateSuperBoardUI();
}

function handleCellClick(e) {
    if (!gameActive) return;

    if (currentGameMode === 'normal') {
        const clickedCell = e.target.closest('.cell:not(.super-cell)');
        if (!clickedCell || gameState[parseInt(clickedCell.getAttribute('data-index'))] !== '') return;
        
        gameState[parseInt(clickedCell.getAttribute('data-index'))] = currentPlayer;
        handleCellPlayed(clickedCell, currentPlayer);
        handleNormalResultValidation();

    } else {
        const clickedCell = e.target.closest('.super-cell');
        if (!clickedCell) return;

        const smallBoardEl = clickedCell.closest('.small-board');
        const smallBoardIndex = parseInt(smallBoardEl.dataset.mainIndex);
        const cellIndex = parseInt(clickedCell.dataset.index);

        const isMoveAllowed = (nextActiveBoardIndex === null || nextActiveBoardIndex === smallBoardIndex);
        if (!isMoveAllowed || mainBoardState[smallBoardIndex] !== '' || smallBoardStates[smallBoardIndex][cellIndex] !== '') {
            return;
        }
        
        handleCellPlayed(clickedCell, currentPlayer);
        handleSuperResultValidation(clickedCell);
    }
}


function updateSuperBoardUI() {
    document.querySelectorAll('.small-board').forEach((board, index) => {
        board.classList.remove('next-move-target');
    });
    superBoard.classList.remove('play-anywhere');

    if (gameActive) {
        if (nextActiveBoardIndex === null) {
            superBoard.classList.add('play-anywhere');
        } else if (document.querySelectorAll('.small-board')[nextActiveBoardIndex]) {
            document.querySelectorAll('.small-board')[nextActiveBoardIndex].classList.add('next-move-target');
        }
    }
}

function startNewRound() {
    gameActive = true;
    lastRoundResult = { winner: null, isDraw: false };
    currentPlayer = roundStarter;
    
    statusDisplay.classList.remove('win-animation');
    player1Score.classList.remove('win-animation');
    player2Score.classList.remove('win-animation');
    roundResultStatus.innerHTML = '';
    
    clearEndGameButtons();
    
    gameState = Array(9).fill('');
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.classList.remove('occupied', 'win', 'p1-win', 'p2-win');
    });

    smallBoardStates = Array(9).fill(null).map(() => Array(9).fill(''));
    mainBoardState = Array(9).fill('');
    nextActiveBoardIndex = null;
    
    document.querySelectorAll('.small-board').forEach(sBoard => {
        sBoard.className = 'small-board';
        sBoard.querySelector('.small-board-overlay').innerHTML = '';
    });
    document.querySelectorAll('.super-cell').forEach(cell => {
         cell.innerHTML = '';
         cell.classList.remove('occupied');
    });
    updateSuperBoardUI();
    
    player1Info.classList.toggle('active', currentPlayer === playerSymbols.p1);
    player2Info.classList.toggle('active', currentPlayer === playerSymbols.p2);
    document.body.classList.toggle('p2-turn', currentPlayer === playerSymbols.p2);
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
        setTimeout(() => gameContainer.classList.remove(`${winner}-wins`), 2000);
    }
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        confetti.style.backgroundColor = RAINBOW_COLORS[Math.floor(Math.random() * RAINBOW_COLORS.length)];
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => confettiContainer.innerHTML = '', 5000);
}


function checkMatchOver() {
    if (currentRound >= gameSettings.totalRounds && !gameActive) {
        const p1MatchScore = scores[playerSymbols.p1];
        const p2MatchScore = scores[playerSymbols.p2];
        
        let currentH2H = {...headToHeadScores};

        if (p1MatchScore > p2MatchScore) headToHeadScores.p1++;
        else if (p2MatchScore > p1MatchScore) headToHeadScores.p2++;
        
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

    if (p1MatchScore > p2MatchScore) recapWinner.textContent = t.matchWinner(p1Name);
    else if (p2MatchScore > p1MatchScore) recapWinner.textContent = t.matchWinner(p2Name);
    else recapWinner.textContent = t.matchDraw;

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
        let winnerTop = round.winner ? (round.winner === p1Symbol ? t.recapRoundItem(p1Name) : '') : t.recapRoundDraw;
        let winnerBottom = round.winner ? (round.winner === p2Symbol ? t.recapRoundItem(p2Name) : '') : '';
        let dotClass = round.winner ? (round.winner === p1Symbol ? 'p1-win' : 'p2-win') : 'draw';

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
    nextRoundBtn.style.display = 'none';
}

function updateEndGameButtons() {
    const t = translations[currentLanguage];
    clearEndGameButtons();

    if (!gameActive) {
        if (currentRound < gameSettings.totalRounds) {
            nextRoundBtn.style.display = 'block';
            nextRoundBtn.textContent = t.nextRoundBtnText;
        } else {
            nextRoundBtn.style.display = 'none';

            const rematchBtn = document.createElement('button');
            rematchBtn.id = 'rematchBtn';
            rematchBtn.innerHTML = `${SVG_RETRY} ${t.rematchBtn}`;
            rematchBtn.onclick = startRematch;
            buttonContainer.appendChild(rematchBtn);

            const showRecapBtn = document.createElement('button');
            showRecapBtn.id = 'showRecapBtn';
            showRecapBtn.textContent = t.showRecapBtn;
            showRecapBtn.onclick = () => {
                clearTimeout(recapTimeoutId);
                currentRecapMatch = matchCount;
                populateRecapModal(currentRecapMatch);
                recapModal.classList.add('active');
            };
            buttonContainer.appendChild(showRecapBtn);
            
            const backToMenuBtn = document.createElement('button');
            backToMenuBtn.id = 'backToMenuBtn';
            backToMenuBtn.textContent = t.backToMenuBtn;
            backToMenuBtn.onclick = returnToMainMenu;
            buttonContainer.appendChild(backToMenuBtn);
        }
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
    scores = { [playerSymbols.p1]: 0, [playerSymbols.p2]: 0 };
    currentRound = 1;
    
    matchCount++;
    matchHistories.push({
        matchNum: matchCount, p1Name: playerNames.p1, p2Name: playerNames.p2,
        p1Symbol: playerSymbols.p1, p2Symbol: playerSymbols.p2,
        rounds: [], finalScores: {}, initialH2H: {...headToHeadScores}
    });
    roundStarter = gameSettings.match1Round1Starter === 'p1' ? playerSymbols.p1 : playerSymbols.p2;

    board.style.display = currentGameMode === 'normal' ? 'grid' : 'none';
    superBoard.style.display = currentGameMode === 'super' ? 'grid' : 'none';
    
    updatePlayerTags();
    startNewRound();
}

function returnToMainMenu() {
    clearTimeout(recapTimeoutId);
    exitConfirmationModal.classList.remove('active');
    appContainer.classList.remove('active');
    mainMenuScreen.classList.add('active');
    recapModal.classList.remove('active');
    inGameSettingsModal.classList.remove('active');
    lastRoundResult = { winner: null, isDraw: false };
    statusDisplay.innerHTML = '&nbsp;';
    roundResultStatus.innerHTML = '';
    const t = translations[currentLanguage];
    roundDisplay.textContent = t.roundStatus(1, gameSettings.totalRounds);
    p1NameInput.value = '';
    p2NameInput.value = '';
    
    settingsCache = {
        normal: { totalRounds: 3 },
        super: { totalRounds: 2, useTieBreaker: false }
    };
    roundSlider.value = settingsCache.normal.totalRounds;
    roundValueDisplay.textContent = settingsCache.normal.totalRounds;
    tieBreakerCheck.checked = settingsCache.super.useTieBreaker;

    if (currentGameMode !== 'normal') {
        modeNormalBtn.click();
    }
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
                otherContainer.querySelector(`[data-color="${otherPlayerColor}"]`)?.classList.remove('disabled');
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

function createSuperBoard() {
    superBoard.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const smallBoard = document.createElement('div');
        smallBoard.className = 'small-board';
        smallBoard.dataset.mainIndex = i;
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell super-cell';
            cell.dataset.index = j;
            smallBoard.appendChild(cell);
        }
        const overlay = document.createElement('div');
        overlay.className = 'small-board-overlay';
        smallBoard.appendChild(overlay);
        superBoard.appendChild(smallBoard);
    }
    superBoard.addEventListener('mouseover', handleSuperBoardMouseOver);
    superBoard.addEventListener('mouseout', handleSuperBoardMouseOut);
    superBoard.addEventListener('click', handleCellClick);
}

function handleSuperBoardMouseOver(e) {
    if (!gameActive) return;

    // Handle Hover (All) logic by toggling a class on the body
    if (gameSettings.drawIndicatorMode === 'hover-all') {
        const isHoveringDraw = e.target.closest('.small-board.board-draw');
        document.body.classList.toggle('any-draw-hovered', !!isHoveringDraw);
    }

    // Handle prediction highlight logic
    const hoveredCell = e.target.closest('.super-cell');
    
    // Clear previous prediction highlights first when moving between cells
    document.querySelectorAll('.small-board.predict-highlight').forEach(board => {
        board.classList.remove('predict-highlight');
    });

    if (hoveredCell && !hoveredCell.classList.contains('occupied')) {
        const parentBoard = hoveredCell.closest('.small-board');
        const isPlayable = parentBoard.classList.contains('next-move-target') || superBoard.classList.contains('play-anywhere');
        
        if (isPlayable && !parentBoard.classList.contains('board-won') && !parentBoard.classList.contains('board-draw')) {
            const nextBoardIndex = parseInt(hoveredCell.dataset.index);
            const allSmallBoards = document.querySelectorAll('.small-board');
            
            if (allSmallBoards[nextBoardIndex] && !allSmallBoards[nextBoardIndex].classList.contains('board-won') && !allSmallBoards[nextBoardIndex].classList.contains('board-draw')) {
                allSmallBoards[nextBoardIndex].classList.add('predict-highlight');
            }
        }
    }
}

function handleSuperBoardMouseOut(e) {
    // This event fires when moving from the #superBoard to an element outside of it.
    // We check if the new element (relatedTarget) is still inside the board. If not, we clean up.
    if (!superBoard.contains(e.relatedTarget)) {
        if (gameSettings.drawIndicatorMode === 'hover-all') {
            document.body.classList.remove('any-draw-hovered');
        }
        document.querySelectorAll('.small-board.predict-highlight').forEach(board => {
            board.classList.remove('predict-highlight');
        });
    }
}


function toggleSettingsVisibility() {
    const isSuper = currentGameMode === 'super';
    tieBreakerSetting.style.display = isSuper ? 'flex' : 'none';
}

function updateInGameSettingsUI() {
    // Controls Position
    document.querySelector('#controlsPositionLabel + .option-group .selected')?.classList.remove('selected');
    if (gameSettings.controlsAlign === 'top') controlsTopBtn.classList.add('selected');
    else if (gameSettings.controlsAlign === 'center') controlsCenterBtn.classList.add('selected');
    else controlsBottomBtn.classList.add('selected');

    // Scoreboard Position
    document.querySelector('#scoreboardAlignLabel + .option-group .selected')?.classList.remove('selected');
    if (gameSettings.scoreboardAlign === 'top') alignTopBtn.classList.add('selected');
    else if (gameSettings.scoreboardAlign === 'center') alignCenterBtn.classList.add('selected');
    else alignBottomBtn.classList.add('selected');

    // Draw Indicator
    document.querySelector('.draw-indicator-options .selected')?.classList.remove('selected');
    if (gameSettings.drawIndicatorMode === 'on') drawIndicatorOnBtn.classList.add('selected');
    else if (gameSettings.drawIndicatorMode === 'hover-one') drawIndicatorHoverOneBtn.classList.add('selected');
    else if (gameSettings.drawIndicatorMode === 'hover-all') drawIndicatorHoverAllBtn.classList.add('selected');
    else drawIndicatorOffBtn.classList.add('selected');
}

// Event Listeners
newGameBtn.addEventListener('click', () => {
    mainMenuScreen.classList.remove('active');
    settingsModal.classList.add('active');
});

settingsOpenBtn.addEventListener('click', () => {
    mainMenuScreen.classList.remove('active');
    updateInGameSettingsUI();
    inGameSettingsModal.classList.add('active');
});

howToPlayOpenBtn.addEventListener('click', () => {
    rulesModal.classList.add('active');
    document.querySelector('.tab-link[data-tab="howToPlayTab"]').click();
});

rulesOpenBtn.addEventListener('click', () => {
    rulesModal.classList.add('active');
    document.querySelector('.tab-link[data-tab="rulesTab"]').click();
});

modeNormalBtn.addEventListener('click', () => {
    if (currentGameMode === 'normal') return;
    settingsCache.super.totalRounds = parseInt(roundSlider.value);
    settingsCache.super.useTieBreaker = tieBreakerCheck.checked;
    roundSlider.value = settingsCache.normal.totalRounds;
    roundValueDisplay.textContent = settingsCache.normal.totalRounds;
    currentGameMode = 'normal';
    modeNormalBtn.classList.add('selected');
    modeSuperBtn.classList.remove('selected');
    toggleSettingsVisibility();
});
modeSuperBtn.addEventListener('click', () => {
    if (currentGameMode === 'super') return;
    settingsCache.normal.totalRounds = parseInt(roundSlider.value);
    roundSlider.value = settingsCache.super.totalRounds;
    roundValueDisplay.textContent = settingsCache.super.totalRounds;
    tieBreakerCheck.checked = settingsCache.super.useTieBreaker;
    currentGameMode = 'super';
    modeSuperBtn.classList.add('selected');
    modeNormalBtn.classList.remove('selected');
    toggleSettingsVisibility();
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

    if (currentGameMode === 'normal') {
        settingsCache.normal.totalRounds = parseInt(roundSlider.value);
        gameSettings.totalRounds = settingsCache.normal.totalRounds;
        gameSettings.useTieBreaker = false;
    } else {
        settingsCache.super.totalRounds = parseInt(roundSlider.value);
        settingsCache.super.useTieBreaker = tieBreakerCheck.checked;
        gameSettings.totalRounds = settingsCache.super.totalRounds;
        gameSettings.useTieBreaker = settingsCache.super.useTieBreaker;
    }
    
    gameSettings.alternateTurns = alternateTurnsCheck.checked;
    gameSettings.alternateOnRematch = alternateRematchCheck.checked;
    
    settingsModal.classList.remove('active');
    appContainer.classList.add('active');
    startFirstMatch();
});

roundSlider.addEventListener('input', () => roundValueDisplay.textContent = roundSlider.value);

nextRoundBtn.addEventListener('click', () => {
    currentRound++;
    if (gameSettings.alternateTurns) {
        roundStarter = (roundStarter === playerSymbols.p1) ? playerSymbols.p2 : playerSymbols.p1;
    }
    startNewRound();
});

[settingsModal, recapModal, rulesModal, inGameSettingsModal, exitConfirmationModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target.closest('.modal-content') || e.target.closest('.ingame-btn') || e.target.closest('.language-btn')) return;
        modal.classList.remove('active');
        if (modal === settingsModal || modal === inGameSettingsModal) {
            if (!appContainer.classList.contains('active')) {
                mainMenuScreen.classList.add('active');
            }
        }
    });
});

settingsCloseBtnX.addEventListener('click', () => {
    settingsModal.classList.remove('active');
    mainMenuScreen.classList.add('active');
});

recapCloseBtn.addEventListener('click', () => recapModal.classList.remove('active'));
recapCloseBtnX.addEventListener('click', () => recapModal.classList.remove('active'));
rulesCloseBtn.addEventListener('click', () => rulesModal.classList.remove('active'));
rulesCloseBtnX.addEventListener('click', () => rulesModal.classList.remove('active'));


tabLinks.forEach(tab => {
    tab.addEventListener('click', () => {
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});
subTabLinks.forEach(tab => {
    tab.addEventListener('click', () => {
        subTabLinks.forEach(link => link.classList.remove('active'));
        subTabContents.forEach(content => content.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.subTab).classList.add('active');
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

exitGameBtn.addEventListener('click', () => {
    exitConfirmationModal.classList.add('active');
});
cancelExitBtn.addEventListener('click', () => {
    exitConfirmationModal.classList.remove('active');
});
confirmExitBtn.addEventListener('click', returnToMainMenu);

inGameSettingsBtn.addEventListener('click', () => {
    updateInGameSettingsUI();
    inGameSettingsModal.classList.add('active');
});
inGameSettingsCloseBtn.addEventListener('click', () => {
    inGameSettingsModal.classList.remove('active');
    if (!appContainer.classList.contains('active')) {
        mainMenuScreen.classList.add('active');
    }
});

alignTopBtn.addEventListener('click', () => {
    gameSettings.scoreboardAlign = 'top';
    infoPanel.className = 'info-panel scoreboard-align-top';
    updateInGameSettingsUI();
});
alignCenterBtn.addEventListener('click', () => {
    gameSettings.scoreboardAlign = 'center';
    infoPanel.className = 'info-panel'; // default is center
    updateInGameSettingsUI();
});
alignBottomBtn.addEventListener('click', () => {
    gameSettings.scoreboardAlign = 'bottom';
    infoPanel.className = 'info-panel scoreboard-align-bottom';
    updateInGameSettingsUI();
});

controlsTopBtn.addEventListener('click', () => {
    gameSettings.controlsAlign = 'top';
    inGameControls.className = 'in-game-controls controls-align-top';
    updateInGameSettingsUI();
});
controlsCenterBtn.addEventListener('click', () => {
    gameSettings.controlsAlign = 'center';
    inGameControls.className = 'in-game-controls controls-align-center';
    updateInGameSettingsUI();
});
controlsBottomBtn.addEventListener('click', () => {
    gameSettings.controlsAlign = 'bottom';
    inGameControls.className = 'in-game-controls controls-align-bottom';
    updateInGameSettingsUI();
});


function setDrawIndicatorMode(mode) {
    gameSettings.drawIndicatorMode = mode;
    document.body.className = `draw-indicator-${mode} ${gameSettings.useColors ? 'custom-colors-active' : ''}`;
    updateInGameSettingsUI();
}
drawIndicatorOnBtn.addEventListener('click', () => setDrawIndicatorMode('on'));
drawIndicatorHoverOneBtn.addEventListener('click', () => setDrawIndicatorMode('hover-one'));
drawIndicatorHoverAllBtn.addEventListener('click', () => setDrawIndicatorMode('hover-all'));
drawIndicatorOffBtn.addEventListener('click', () => setDrawIndicatorMode('off'));


window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
             modal.classList.remove('active');
             if (modal === settingsModal) mainMenuScreen.classList.add('active');
        });
    }
});

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

document.querySelectorAll('.language-option').forEach(btn => btn.addEventListener('click', (e) => {
    const lang = e.target.closest('[data-lang]').dataset.lang;
    if(lang) setLanguage(lang);
}));


window.addEventListener('load', () => {
    initializeSettings();
    createSuperBoard();
    setLanguage('id');
    generateColorSwatches();
    chooseP1Start.classList.add('selected');
    document.documentElement.style.setProperty('--p1-color', gameSettings.p1Color);
    document.documentElement.style.setProperty('--p2-color', gameSettings.p2Color);
    
    roundSlider.value = settingsCache.normal.totalRounds;
    roundValueDisplay.textContent = settingsCache.normal.totalRounds;
    tieBreakerCheck.checked = settingsCache.super.useTieBreaker;
    toggleSettingsVisibility();
    
    document.body.classList.add('draw-indicator-on');
    updateInGameSettingsUI();
});
