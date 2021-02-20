const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ",
  "True or false: 5000 meters = 5 kilometers. ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name: ")
}

function askQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const answer = input.question(questions[i] + " :");
    candidateAnswers.push({ q: questions[i], candAns: answer, corAns: correctAnswers[i] })
  }
}


function gradeQuiz(candidateAnswers) {
  let grade = 0;
  let candidatePercentage = '';
  candidateAnswers.forEach(function(ca) {
    console.log('QA object is ', ca);
    if (ca.candAns === ca.corAns) {
      grade++;
    }
  });

  candidatePercentage = (grade / candidateAnswers.length) * 100;

  console.log(`Candidate gave ${grade} correctAnswers and got ${candidatePercentage}%`);
  if (candidatePercentage < 50) {
    console.log(">>>> Status is: FAILED <<<<");
  } else {
    console.log(">>>> Status is: Passed <<<<")
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("hello: " + candidateName)
  askQuestions();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};