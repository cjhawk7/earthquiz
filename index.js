const QUESTIONS = [
  {
    text: "What percent of the Earth's surface is water?",
    choices: ["60%", "20%", "5%", "70%"],
    correct: 3
  },
  {
    text: "What is the lowest point on Earth?",
    choices: ["Death Valley", "Caspian Sea", "Dead Sea", "Lake Assal"],
    correct: 2
  },
  {
    text: "What continent has the highest population?",
    choices: ["North America", "Africa", "Asia", "Europe"],
    correct: 2
  },
  {
    text: "What's the hottest recorded tempurature on Earth's surface?",
    choices: ["131 F", "147 F", "136 F", "162 F"],
    correct: 2
  },
  {
    text: "What's the 2nd most widely spoken langauge on the planet?",
    choices: ["Spanish", "Chinese", "English", "Hindi"],
    correct: 0
  },
  {
    text: "Roughly how many current living languages are there?",
    choices: ["4500", "3000", "1500", "7000"],
    correct: 3
  },
  {
    text: "What is the longest river?",
    choices: ["Yangtze", "Amazon", "Nile", "Mississippi"],
    correct: 2
  },
  {
    text: "Which country has the most active volcanoes?",
    choices: ["Phillippines", "Indonesia", "Japan", "Ecuador"],
    correct: 1
  },
  {
    text: "What is the driest contienent on Earth?",
    choices: ["Australia", "South America", "Antartica", "Africa"],
    correct: 2
  },
  {
    text: "What county has the small population?",
    choices: [
      "Monaco",
      "Vatican City",
      "Liechtenstein",
      "Northern Mariana Islands"
    ],
    correct: 1
  },
  {
    text: "What color is the sky?",
    choices: ["Red", "Blue", "Green", "Orange"],
    correct: 1
  },
  {}
];

const APP = {
  questions: QUESTIONS,
  numCorrect: 0,
  currentQuestion: 0,
  totalQuestions: 10
};

$(".js-start-btn").on("click", function() {
  $(".intro").addClass("hidden");
  console.log(APP.currentQuestion, "here1");
  APP.currentQuestion = 1;
  APP.numCorrect = 0;
  renderQuestion(APP.questions[APP.currentQuestion]);
  $(".question-counter")
    .find("p")
    .text("Question " + APP.currentQuestion + " of 10");
  $(".question").removeClass("hidden");
});

$("form").on("submit", function(event) {
  event.preventDefault();
  const userChoice = $('input[name="choice"]:checked').val();
  evaluateAnswer(userChoice, APP.questions[APP.currentQuestion]);
  APP.currentQuestion++;
  $(".question-counter")
    .find("p")
    .text("Question " + APP.currentQuestion + " of 10");
  $(".feedback").removeClass("hidden");
  $(".question").addClass("hidden");
});

$(".js-feedback-submit").on("click", function() {
  if (APP.currentQuestion === APP.totalQuestions) {
    finalPage();
  } else {
    $(".feedback").addClass("hidden");
    renderQuestion(APP.questions[APP.currentQuestion]);
    $(".question").removeClass("hidden");
  }
});

function renderQuestion(question) {
  console.log(question, "here");
  const choices = question.choices;
  $("form")
    .find("legend")
    .text(question.text);
  $("label").each(function(i, element) {
    element.textContent = choices[i];
  });
}

function evaluateAnswer(userAnswer, question) {
  userAnswer = parseInt(userAnswer, 10);

  if (userAnswer === question.correct) {
    $(".right").removeClass("hidden");
    $(".wrong").addClass("hidden");
    APP.numCorrect++;
  } else {
    $(".wrong").removeClass("hidden");
    $(".right").addClass("hidden");
  }
}

function finalPage() {
  $(".final").removeClass("hidden");
  $(".question").addClass("hidden");
  $(".feedback").addClass("hidden");
  $(".final")
    .find("p")
    .text("You got " + APP.numCorrect.toString() + " correct out of 10!");
}

$(".js-final-submit").on("click", function() {
  $(".final").addClass("hidden");
  $(".intro").removeClass("hidden");
});
