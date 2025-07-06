// Challenge data
var challenges = {
    math: [
        { question: "כמה זה <span class='math-expression'>25 + 17</span>?", answer: "42", input: true },
        { question: "מה התוצאה של <span class='math-expression'>8 × 7</span>?", answer: "56", input: true },
        { question: "כמה זה <span class='math-expression'>144 ÷ 12</span>?", answer: "12", input: true },
        { question: "איזה מספר חסר ברצף?<div class='math-expression'>3, 6, 9, ?, 15</div>", answer: "12", input: true },
        { question: "מה שווה <span class='math-expression'>1/2 + 1/4</span>?", answer: "3/4", input: true },
        { question: "כמה זה <span class='math-expression'>15 × 4</span>?", answer: "60", input: true },
        { question: "מה התוצאה של <span class='math-expression'>100 - 37</span>?", answer: "63", input: true },
        { question: "כמה זה <span class='math-expression'>36 ÷ 6</span>?", answer: "6", input: true },
        { question: "איזה מספר הכי גדול?<div class='math-expression'>0.5, 1/3, 2/5, 0.7</div>", answer: "0.7", input: true },
        { question: "מה התוצאה של <span class='math-expression'>9 × 6</span>?", answer: "54", input: true },
        { question: "כמה זה <span class='math-expression'>200 - 85</span>?", answer: "115", input: true },
        { question: "איזה מספר חסר ברצף?<div class='math-expression'>2, 4, 8, 16, ?</div>", answer: "32", input: true },
        { question: "מה שווה <span class='math-expression'>3/4</span> של <span class='math-expression'>20</span>?", answer: "15", input: true },
        { question: "כמה זה <span class='math-expression'>13 × 3</span>?", answer: "39", input: true },
        { question: "מה התוצאה של <span class='math-expression'>81 ÷ 9</span>?", answer: "9", input: true },
        { question: "איזה מספר זוגי?<div class='math-expression'>17, 23, 34, 41</div>", answer: "34", input: true },
        { question: "כמה זה <span class='math-expression'>45 + 28</span>?", answer: "73", input: true },
        { question: "מה התוצאה של <span class='math-expression'>7 × 8</span>?", answer: "56", input: true },
        { question: "כמה זה <span class='math-expression'>120 ÷ 8</span>?", answer: "15", input: true },
        { question: "איזה מספר חסר ברצף?<div class='math-expression'>5, 10, 20, 40, ?</div>", answer: "80", input: true },
        { question: "מה שווה <span class='math-expression'>2/3 + 1/6</span>?", answer: "5/6", input: true },
        { question: "כמה זה <span class='math-expression'>16 × 5</span>?", answer: "80", input: true },
        { question: "מה התוצאה של <span class='math-expression'>150 - 67</span>?", answer: "83", input: true },
        { question: "כמה זה <span class='math-expression'>72 ÷ 8</span>?", answer: "9", input: true },
        { question: "איזה מספר אי-זוגי?<div class='math-expression'>24, 36, 45, 58</div>", answer: "45", input: true },
        { question: "מה התוצאה של <span class='math-expression'>11 × 9</span>?", options: ["99", "89", "109", "79"], correct: 0 },
        { question: "כמה זה <span class='math-expression'>63 + 29</span>?", options: ["92", "82", "102", "88"], correct: 0 },
        { question: "מה התוצאה של <span class='math-expression'>96 ÷ 12</span>?", options: ["8", "6", "10", "7"], correct: 0 },
        { question: "איזה מספר חסר ברצף?<div class='math-expression'>1, 4, 9, 16, ?</div>", options: ["20", "25", "21", "24"], correct: 1 },
        { question: "מה שווה <span class='math-expression'>5/8</span> של <span class='math-expression'>24</span>?", options: ["15", "12", "18", "20"], correct: 0 },
        { question: "כמה זה <span class='math-expression'>14 × 6</span>?", options: ["84", "74", "94", "64"], correct: 0 },
        { question: "מה התוצאה של <span class='math-expression'>180 - 95</span>?", options: ["85", "75", "95", "80"], correct: 0 },
        { question: "כמה זה <span class='math-expression'>56 ÷ 7</span>?", options: ["8", "7", "9", "6"], correct: 0 },
        { question: "איזה מספר ראשוני?<div class='math-expression'>15, 17, 21, 25</div>", options: ["15", "17", "21", "25"], correct: 1 },
        { question: "מה התוצאה של <span class='math-expression'>12 × 7</span>?", options: ["84", "74", "94", "64"], correct: 0 },
        { question: "כמה זה <span class='math-expression'>77 + 35</span>?", options: ["112", "102", "122", "108"], correct: 0 },
        { question: "מה התוצאה של <span class='math-expression'>108 ÷ 9</span>?", options: ["12", "11", "13", "10"], correct: 0 },
        { question: "איזה מספר חסר ברצף?<div class='math-expression'>3, 7, 15, 31, ?</div>", options: ["63", "47", "55", "67"], correct: 0 },
        { question: "מה שווה <span class='math-expression'>3/5 + 1/10</span>?", options: ["4/15", "7/10", "2/5", "1/2"], correct: 1 },
        { question: "כמה זה <span class='math-expression'>19 × 4</span>?", options: ["76", "84", "68", "72"], correct: 0 }
    ],
    english: [
        { question: "איך כותבים באנגלית את המילה 'חתול'?", answer: "cat", input: true },
        { question: "השלם את המשפט: I ___ to school every day.", answer: "go", input: true },
        { question: "איך אומרים 'מכונית' באנגלית?", answer: "car", input: true },
        { question: "השלם: The color of the sky is ____.", answer: "blue", input: true },
        { question: "איך כותבים באנגלית את המספר 'שבע'?", answer: "seven", input: true },
        { question: "This is my ____ (כלב).", answer: "dog", input: true },
        { question: "איזו מילה מתאימה למשפט: She ____ a book.", answer: "reads", input: true },
        { question: "כתוב את צורת הרבים של 'child'.", answer: "children", input: true },
        { question: "איך אומרים 'תודה' באנגלית?", answer: "thank you", input: true },
        { question: "They ___ playing in the park.", answer: "are", input: true },
        { question: "Which day comes after Monday?", options: ["Tuesday", "Sunday", "Friday", "Thursday"], correct: 0 },
        { question: "Which of these is a fruit?", options: ["banana", "car", "shoe", "table"], correct: 0 },
        { question: "Choose the correct color for grass.", options: ["green", "blue", "red", "yellow"], correct: 0 },
        { question: "Which is the past tense of 'go'?", options: ["goes", "going", "went", "gone"], correct: 2 },
        { question: "Which word is spelled correctly?", options: ["becaus", "becuse", "because", "becus"], correct: 2 },
        { question: "Select the opposite of 'cold'.", options: ["hot", "warm", "cool", "freeze"], correct: 0 },
        { question: "Which word means 'גדול' באנגלית?", options: ["small", "big", "tall", "short"], correct: 1 },
        { question: "What is the plural of 'mouse'?", options: ["mouses", "mice", "mouse", "mousies"], correct: 1 },
        { question: "Which pronoun fits the sentence: ___ is my best friend.", options: ["He", "She", "They", "It"], correct: 1 },
        { question: "Choose the correct preposition: The cat is ___ the table.", options: ["in", "on", "at", "to"], correct: 1 }
    ],
    shapes: [
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>▲  ▼\n◀  ?</div>", options: ["▶", "▲", "▼", "◀"], correct: 0 },
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>■  □\n□  ?</div>", options: ["■", "□", "▲", "●"], correct: 0 },
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>●  ○\n○  ?</div>", options: ["●", "○", "◐", "▲"], correct: 0 },
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>▲  △\n△  ?</div>", options: ["▲", "▼", "△", "○"], correct: 0 },
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>◐  ◑\n◑  ?</div>", options: ["◐", "◑", "◒", "◓"], correct: 0 },
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>✖  ➕\n➕  ?</div>", options: ["✖", "➕", "✚", "➖"], correct: 0 },
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>◴  ◵\n◶  ?</div>", options: ["◷", "◵", "◶", "◴"], correct: 0 },
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>▢  ▣\n▣  ?</div>", options: ["▢", "▣", "□", "■"], correct: 0 },
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>★  ☆\n☆  ?</div>", options: ["★", "☆", "✦", "✧"], correct: 0 },
        { question: "בחרו את הצורה החסרה:<div class='matrix-display'>■ □ ■\n□ ■ □\n■ □ ?</div>", options: ["■", "□", "▲", "●"], correct: 0 },
        { question: "איזו צורה משלימה את המטריצה?<div class='matrix-display'>◐ ◑ ◐\n◑ ◐ ◑\n◐ ◑ ?</div>", options: ["◐", "◑", "○", "●"], correct: 0 },
        { question: "מהי הצורה החסרה?<div class='matrix-display'>◆ ◇ ◆\n◇ ◆ ◇\n◆ ◇ ?</div>", options: ["◆", "◇", "■", "▲"], correct: 0 },
        { question: "השלים את התבנית:<div class='matrix-display'>↑ → ↓\n→ ↓ ←\n↓ ← ?</div>", options: ["↑", "→", "↓", "←"], correct: 0 },
        { question: "בחרו את הצורה שמשלימה את הסדרה:<div class='matrix-display'>▲ ● ▲\n● ▲ ●\n▲ ● ?</div>", options: ["●", "▲", "■", "◆"], correct: 1 },
        { question: "איזו צורה תופיע במקום הסימן שאלה?<div class='matrix-display'>□ ■ □\n■ □ ■\n□ ■ ?</div>", options: ["□", "■", "▲", "●"], correct: 0 },
        { question: "השלים את המטריצה המסתובבת:<div class='matrix-display'>▲ ▶ ◆\n▶ ◆ ▼\n◆ ▼ ?</div>", options: ["▲", "▶", "▼", "◆"], correct: 1 },
        { question: "בחרו את הצורה החסרה:<div class='matrix-display'>★ ☆ ★\n☆ ★ ☆\n★ ☆ ?</div>", options: ["★", "☆", "✦", "✧"], correct: 0 },
        { question: "איזו צורה משלימה?<div class='matrix-display'>○ ◐ ○\n◐ ○ ◐\n○ ◐ ?</div>", options: ["○", "●", "◐", "◑"], correct: 0 },
        { question: "השלים את דגם החצים:<div class='matrix-display'>← ↑ →\n↑ → ↓\n→ ↓ ?</div>", options: ["↓", "←", "↑", "→"], correct: 1 }
    ],
    logic: [
        { question: "בקופסה אדומה כתוב 'הפרס בקופסה הכחולה', ובקופסה כחולה כתוב 'הפרס לא בקופסה האדומה'. אם רק משפט אחד נכון, היכן הפרס?", options: ["בקופסה האדומה", "בקופסה הכחולה", "אין פרס", "שתי הקופסאות"], correct: 0 },
        { question: "5 מכונות מייצרות 5 צעצועים ב‑5 דקות. כמה דקות ייקח ל‑100 מכונות לייצר 100 צעצועים?", options: ["5", "100", "50", "1"], correct: 0 },
        { question: "מצא את המספר החסר ברצף: 3, 8, 15, 24, ?", options: ["29", "31", "35", "38"], correct: 2 },
        { question: "בחוג ספורט יש 12 תלמידים. 7 אוהבים כדורסל, 8 אוהבים כדורגל ו‑5 אוהבים את שניהם. כמה תלמידים אינם אוהבים אף אחד מהמשחקים?", options: ["0", "1", "2", "3"], correct: 2 },
        { question: "אם 2X + 3Y = 12 והיחס בין X ל‑Y הוא 1:2, מה הערך של X?", options: ["1", "1.5", "2", "3"], correct: 1 },
        { question: "שעון מתקדם ב‑2 דקות כל שעה יותר מהרגיל. אם כעת השעה 3:00, מה יראה השעון לאחר 6 שעות זמן אמיתי?", options: ["5:50", "6:12", "6:00", "6:20"], correct: 1 },
        { question: "רכבת אחת יוצאת ב‑8:00 במהירות 60 קמ\"ש. רכבת שנייה יוצאת מאותו מקום ב‑8:30 במהירות 80 קמ\"ש. מתי תשיג הרכבת השנייה את הראשונה?", options: ["9:30", "10:00", "10:30", "11:00"], correct: 1 },
        { question: "בבית ספר שלוש קומות. הכיתה של יעל מעל זו של דני ומתחת לזו של מיכל. באיזו קומה דני?", options: ["ראשונה", "שנייה", "שלישית", "רביעית"], correct: 0 },
        { question: "מהו המספר הבא בסדרת פיבונאצ'י: 1, 1, 2, 3, 5, 8, ?", options: ["11", "12", "13", "14"], correct: 2 },
        { question: "שני אבות ושני בנים יצאו לדוג ותפסו שלושה דגים, וכל אחד קיבל דג. איך זה אפשרי?", options: ["היו שלושה דורות: סבא, אבא ובן", "היו שני אנשים בלבד", "אחד לא קיבל דג", "דג אחד היה כפול"], correct: 0 },
        { question: "פתור את המשוואה 3(X-2)=2X+4", options: ["6", "8", "10", "12"], correct: 2 },
        { question: "אם a=2b ו-b=3c, כמה שווה a ביחס ל-c?", options: ["3c", "4c", "5c", "6c"], correct: 3 },
        { question: "השלם את סדרת האותיות: A, D, G, J, ?", options: ["K", "L", "M", "N"], correct: 2 },
        { question: "בקובייה סטנדרטית הספרה 1 מול 6 ו‑2 מול 5. מול איזו ספרה נמצאת הספרה 3?", options: ["4", "5", "6", "1"], correct: 0 },
        { question: "כמה סידורים שונים אפשר ליצור למילה 'גלגל'?", options: ["12", "24", "18", "6"], correct: 3 },
        { question: "אם במשולש ישר זווית יש זווית אחת של 90°, כמה מעלות סכום שתי הזוויות האחרות?", options: ["90", "100", "80", "60"], correct: 0 },
        { question: "בשנה מעוברת יש 366 ימים. כמה ימים יהיו בפברואר בשנה שלאחר שנה מעוברת?", options: ["28", "29", "30", "31"], correct: 0 },
        { question: "בהגרלה יש חמישה כרטיסים בצבעים שונים. הכרטיס הכחול חייב להיות ראשון והצהוב שני. בכמה דרכים ניתן לסדר את שלושת הכרטיסים הנותרים?", options: ["3", "4", "5", "6"], correct: 3 },
        { question: "מצא את המספר שאינו שייך: 11, 13, 17, 19, 21, 23", options: ["11", "17", "21", "23"], correct: 2 },
        { question: "אם היום יום רביעי, מה היום בעוד 10 ימים?", options: ["שבת", "ראשון", "שני", "שלישי"], correct: 0 }
    ]
};

// Game state
var currentCategory = '';
var currentChallengeIndex = 0;
var selectedAnswer = null;
var progress = {
    math: JSON.parse(localStorage.getItem('math-progress') || '[]'),
    english: JSON.parse(localStorage.getItem('english-progress') || '[]'),
    shapes: JSON.parse(localStorage.getItem('shapes-progress') || '[]'),
    logic: JSON.parse(localStorage.getItem('logic-progress') || '[]')
};

// Initialize the game
function initializeGame() {
    updateProgressDisplay();
    checkCompletion();
}

// Update progress display
function updateProgressDisplay() {
    var categories = ['math', 'english', 'shapes', 'logic'];
    var totals = { math: 40, english: 20, shapes: 20, logic: 20 };
    
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        var completed = progress[category].length;
        var total = totals[category];
        var percentage = (completed / total) * 100;
        
        document.getElementById(category + '-progress').style.width = percentage + '%';
        document.getElementById(category + '-count').textContent = completed;
    }
}

// Check if all challenges are completed
function checkCompletion() {
    var totalCompleted = progress.math.length + progress.english.length + progress.shapes.length + progress.logic.length;
    if (totalCompleted >= 100) {
        showCompletionPage();
    }
}

// Show category challenges
function showCategory(category) {
    currentCategory = category;
    currentChallengeIndex = 0;
    
    // Find first incomplete challenge
    var completedChallenges = progress[category];
    for (var i = 0; i < challenges[category].length; i++) {
        if (completedChallenges.indexOf(i) === -1) {
            currentChallengeIndex = i;
            break;
        }
    }
    
    document.getElementById('homepage').classList.add('hidden');
    document.getElementById('challenge-container').classList.remove('hidden');
    showChallenge();
}
window.showCategory = showCategory;

// Show homepage
function showHomepage() {
    document.getElementById('homepage').classList.remove('hidden');
    document.getElementById('challenge-container').classList.add('hidden');
    document.getElementById('completion-page').classList.add('hidden');
}
window.showHomepage = showHomepage;

// Show current challenge
function showChallenge() {
    var challenge = challenges[currentCategory][currentChallengeIndex];
    var categoryNames = {
        math: 'מתמטיקה',
        english: 'אנגלית',
        shapes: 'צורות וחזותיות',
        logic: 'חשיבה והיגיון'
    };
    
    document.getElementById('challenge-number').textContent = 
        categoryNames[currentCategory] + ' - אתגר ' + (currentChallengeIndex + 1);
    document.getElementById('challenge-question').innerHTML = challenge.question;
    
    var optionsContainer = document.getElementById('challenge-options');
    optionsContainer.innerHTML = '';
    
    if (challenge.input) {
        var inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.id = "answer-input";
        inputElement.className = "answer-input";
        optionsContainer.appendChild(inputElement);
    } else {
        for (var i = 0; i < challenge.options.length; i++) {
            var optionElement = document.createElement("div");
            optionElement.className = "option";
            optionElement.textContent = challenge.options[i];
            optionElement.setAttribute("data-index", i);
            optionElement.onclick = function() {
                selectAnswer(parseInt(this.getAttribute("data-index")));
            };
            optionsContainer.appendChild(optionElement);
        }
    }
    
    // Reset UI state
    selectedAnswer = null;
    document.getElementById('submit-button').classList.remove('hidden');
    document.getElementById('next-button').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('submit-button').disabled = false;
}

// Select answer
function selectAnswer(index) {
    selectedAnswer = index;
    
    // Remove previous selections
    var options = document.querySelectorAll('.option');
    for (var i = 0; i < options.length; i++) {
        options[i].classList.remove('selected');
    }
    
    // Add selection to clicked option
    options[index].classList.add('selected');
}

// Check answer

function checkAnswer() {
    var challenge = challenges[currentCategory][currentChallengeIndex];
    var isCorrect = false;
    if (challenge.input) {
var userAnswer = document.getElementById('answer-input').value.trim();
if (userAnswer === '') {
    alert('אנא הזן תשובה');
    return;
}
isCorrect = userAnswer == challenge.answer;
    } else {
if (selectedAnswer === null) {
    alert('אנא בחר תשובה');
    return;
}
isCorrect = selectedAnswer === challenge.correct;
    }

    if (!challenge.input) {
var options = document.querySelectorAll('.option');
if (isCorrect) {
    options[challenge.correct].classList.add('correct');
} else {
    options[selectedAnswer].classList.add('incorrect');
}
    }

    var feedback = document.getElementById('feedback');
    var nextButton = document.getElementById('next-button');
    feedback.classList.remove('hidden');

    if (isCorrect) {
feedback.textContent = '🎉 כל הכבוד! תשובה נכונה!';
feedback.className = 'feedback correct';
nextButton.textContent = 'האתגר הבא';
if (progress[currentCategory].indexOf(currentChallengeIndex) === -1) {
    progress[currentCategory].push(currentChallengeIndex);
    localStorage.setItem(currentCategory + '-progress', JSON.stringify(progress[currentCategory]));
}
    } else {
feedback.textContent = '❌ לא נכון. נסה שוב!';
feedback.className = 'feedback incorrect';
nextButton.textContent = 'נסה שוב';
    }

    document.getElementById('submit-button').classList.add('hidden');
    nextButton.classList.remove('hidden');

    updateProgressDisplay();
    checkCompletion();
}
window.checkAnswer = checkAnswer;
// Next challenge or retry
function nextChallenge() {
    var nextButton = document.getElementById('next-button');
    
    // Check if this is a retry (button text is "נסה שוב")
    if (nextButton.textContent === 'נסה שוב') {
        // Reset current challenge for retry
        showChallenge();
        return;
    }
    
    // Find next incomplete challenge
    var completedChallenges = progress[currentCategory];
    var nextIndex = -1;
    
    for (var i = 0; i < challenges[currentCategory].length; i++) {
        if (completedChallenges.indexOf(i) === -1) {
            nextIndex = i;
            break;
        }
    }
    
    if (nextIndex !== -1) {
        currentChallengeIndex = nextIndex;
        showChallenge();
    } else {
        // All challenges in this category are complete
        alert('סיימת את כל האתגרים בקטגוריה זו! כל הכבוד!');
        showHomepage();
    }
}
window.nextChallenge = nextChallenge;

// Show completion page
function showCompletionPage() {
    document.getElementById('homepage').classList.add('hidden');
    document.getElementById('challenge-container').classList.add('hidden');
    document.getElementById('completion-page').classList.remove('hidden');
}

// Restart game
function restartGame() {
    if (confirm('האם אתה בטוח שאתה רוצה להתחיל מחדש? כל ההתקדמות תימחק.')) {
        // Clear all progress
        localStorage.removeItem('math-progress');
        localStorage.removeItem('english-progress');
        localStorage.removeItem('shapes-progress');
        localStorage.removeItem('logic-progress');
        
        // Reset progress object
        progress = {
            math: [],
            english: [],
            shapes: [],
            logic: []
        };
        
        // Update display and go to homepage
        updateProgressDisplay();
        showHomepage();
    }
}
window.restartGame = restartGame;

// Initialize game when page loads
window.onload = initializeGame;
