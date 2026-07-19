let questions = [
    {
        question: "What does HIV attack in the body?",
        answers: ["Brain", "Immune system", "Heart", "Skin"],
        correct: 1
    },
    {
        question: "Which is NOT a way HIV spreads?",
        answers: ["Blood", "Sharing food", "Unprotected sex", "Needles"],
        correct: 1
    },
    {
        question: "Mental health includes?",
        answers: ["Only physical health", "Emotional wellbeing", "Only fitness", "Money status"],
        correct: 1
    },
    {
        question: "Menstruation is?",
        answers: ["Disease", "Normal body process", "Infection", "Injury"],
        correct: 1
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    let q = questions[current];

    document.getElementById("question").innerText = q.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((ans, index) => {
        let btn = document.createElement("button");
        btn.innerText = ans;
        btn.classList.add("answer-btn");

        btn.onclick = function () {
            if (index === q.correct) {
                score++;
            }
            nextQuestion();
        };

        answersDiv.appendChild(btn);
    });
}

function nextQuestion() {
    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Completed!";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("score").innerText =
            "Your Score: " + score + "/" + questions.length +
            " 🎉 You are eligible for rewards!";
    }
}

loadQuestion();