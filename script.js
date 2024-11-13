const questions = [
    {
        question: "قرآن مجید کی پہلی سورت کا نام کیا ہے؟",
        answers:
            [{ text: "سورت الفاتحہ", correct: true },
            { text: "سورت البقرہ", correct: false },
            { text: "سورت آل عمران", correct: false },
            { text: "سورت النساء", correct: false },]
    },
    {
        question: "حضرت محمد صلی اللہ علیہ وسلم کے والد کا نام کیا تھا؟",
        answers:
            [
                { text: "حضرت عبدالمطلب", correct: false },
                { text: "حضرت ہاشم", correct: false },
                { text: "حضرت عبداللہ", correct: true },
                { text: "حضرت عبدمناف", correct: false },]
    },

    {
        question: "قرآن مجید میں کتنے انبیاء کا ذکر ہے؟",
        answers:
            [
                { text: "26", correct: false },
                { text: "25", correct: true },
                { text: "27", correct: false },
                { text: "28", correct: false },]
    },

    {
        question: "حضرت محمد صلی اللہ علیہ وسلم کی پہلی بیوی کا نام کیا تھا؟",
        answers:
            [
                { text: "حضرت عائشہ", correct: false },
                { text: "حضرت حفصہ", correct: false },
                { text: "حضرت زینب", correct: false },
                { text: "حضرت خدیجہ", correct: true },]
    },

    {
        question: "قرآن مجید کی آخری سورت کا نام کیا ہے؟",
        answers:
            [
                { text: "سورت الفلق", correct: false },
                { text: "سورت القدر", correct: false },
                { text: "سورت الناس", correct: true },
                { text: "سورت المطففین", correct: false },]
    },

    {
        question: "قرآن مجید میں کتنے فرشتوں کا ذکر ہے؟",
        answers:
            [{ text: "5", correct: false },
            { text: "4", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false },]
    },

    {
        question: "حضرت محمد صلی اللہ علیہ وسلم کی پہلی غزوه کا نام کیا تھا؟",
        answers: [{ text: "غزوه بدر", correct: true },
        { text: "غزوه احد", correct: false },
        { text: "غزوه تبوک", correct: false },
        { text: "غزوه حنین", correct: false },]
    },

    {
        question: "قرآن مجید میں کتنی بار جہاد کا ذکر ہے؟",
        answers: [
            { text: "42", correct: false },
            { text: "43", correct: false },
            { text: "41", correct: true },
            { text: "44", correct: false },]
    },

    {
        question: "حضرت محمد صلی اللہ علیہ وسلم کے پہلے خلیفہ کا نام کیا تھا؟",
        answers: [
            { text: "حضرت عمر", correct: false },
            { text: "حضرت عثمان", correct: false },
            { text: "حضرت علی", correct: false },
            { text: "حضرت ابوبکر", correct: true },]
    },

    {
        question: "حضرت محمد صلی اللہ علیہ وسلم کی پیدائش کب ہوئی؟",
        answers: [{ text: "12 ربیع الاول 571ء", correct: true },
        { text: "13 ربیع الاول 571ء", correct: false },
        { text: "14 ربیع الاول 571ء", correct: false },
        { text: "15 ربیع الاول 571ء", correct: false },]
    },

    {
        question: "قرآن مجید کی کون سی سورت میں سب سے زیادہ آیات ہیں؟",
        answers: [
            { text: "سورت آل عمران", correct: false },
            { text: "سورت النساء", correct: false },
            { text: "سورت المائدہ", correct: false },
            { text: "سورت البقرہ", correct: true },]
    },
    {
        question: "قرآن مجید میں کون سی سورت میں سب سے کم آیات ہیں؟",
        answers: [{ text: "سورت کوثر", correct: true },
        { text: "سورت النصر", correct: false },
        { text: "سورت الماعون", correct: false },
        { text: "سورت القدر", correct: false },]
    },


    {
        question: "حضرت محمد صلی اللہ علیہ وسلم کی کون سی بیوی نے سب سے زیادہ حدیثیں روایت کیں؟",
        answers: [
            { text: "حضرت حفصہ", correct: false },
            { text: "حضرت زینب", correct: false },
            { text: "حضرت عائشہ", correct: true },
            { text: "حضرت ام سلمہ", correct: false },]
    },


    {
        question: "قرآن مجید میں کتنے پارے ہیں؟",
        answers: [
            { text: "29", correct: false },
            { text: "30", correct: true },
            { text: "31", correct: false },
            { text: "32", correct: false },]
    },


    {
        question: "حضرت محمد صلی اللہ علیہ وسلم کون سی غزوه میں سب سے زیادہ زخمی ہوئے؟",
        answers: [{ text: "غزوه احد", correct: true },
        { text: "غزوه بدر", correct: false },
        { text: "غزوه تبوک", correct: false },
        { text: "غزوه حنین", correct: false },]
    },

    {
        question: "قرآن مجید میں کون سی سورت میں سب سے زیادہ ذکر ہے؟",
        answers: [
            { text: "سورت یاسین", correct: false },
            { text: "سورت الواقعہ", correct: false },
            { text: "سورت القمر", correct: false },
            { text: "سورت الرحمن", correct: true },]
    },

    {
        question: "حضرت محمد صلی اللہ علیہ وسلم کی کون سی بیوی نے سب سے زیادہ عمر پائی؟",
        answers: [{ text: "حضرت ام سلمہ", correct: true },
        { text: "حضرت عائشہ", correct: false },
        { text: "حضرت حفصہ", correct: false },
        { text: "حضرت زینب", correct: false },]
    },

    {
        question: "قرآن مجید میں کتنے مقامات پر اللہ کا نام آیا ہے؟",
        answers: [
            { text: "2699", correct: false },
            { text: "2700", correct: false },
            { text: "2698", correct: true },
            { text: "2701", correct: false },]
    },
    {
        question: "قرآن مجید میں کتنی سورتیں مکی ہیں؟",
        answers: [{ text: "86", correct: true },
        { text: "85", correct: false },
        { text: "87", correct: false },
        { text: "88", correct: false },]
    },

    {
        question: "حضرت محمد صلی اللہ علیہ وسلم کو کون سی غزوه میں سب سے زیادہ مال غنیمت حاصل ہوا؟",
        answers: [
            { text: "غزوه بدر", correct: false },
            { text: "غزوه احد", correct: false },
            { text: "غزوه حنین", correct: true },
            { text: "غزوه تبوک", correct: false },]
    }



];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    ressetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = currentQuestion.question + "............." + questionNo;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}



function ressetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e) {
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";
    if (isCorrect) {
        selectbtn.classList.add("correct");
        score++;
    }
    else {
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
function showScore() {
    ressetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

startQuiz();

AOS.init();