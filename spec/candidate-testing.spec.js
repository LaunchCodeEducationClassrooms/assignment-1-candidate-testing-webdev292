const solution = require('../candidate-testing');

describe("Candidate Testing solution", function() {
	// PART 1 // 
	// candidateName tests //
	// it("candidateName is a string", function() {
	// 	expect(typeof solution.candidateName).toBe("string");
	// });

  // // question tests //
	// it("question is a string", function() {
	// 	expect(typeof solution.question).toBe("string");
	// });

  // it("question asks the right question", function() {
	// 	expect(solution.question).toBe("Who was the first American woman in space? ");
	// });

  // // correctAnswer tests //
	// it("correctAnswer is a string", function() {
	// 	expect(typeof solution.correctAnswer).toBe("string");
	// });

  // it("correctAnswer gives the correct answer", function() {
	// 	expect(solution.correctAnswer).toBe("Sally Ride");
	// });

  // // candidateAnswer tests //
	// it("candidateAnswer is a string", function() {
	// 	expect(typeof solution.candidateAnswer).toBe("string");
	// });

  // // PART 2 // 
  // // questions tests //
	// it("questions contains 5 questions", function() {
	// 	expect(solution.questions.length).toBe(5);
	// });

  // it("questions contain the provided questions with trailing spaces", function() {
	// 	expect(solution.questions).toContain("Who was the first American woman in space? ");
  //   expect(solution.questions).toContain("True or false: 5 kilometer == 5000 meters? ");
  //   expect(solution.questions).toContain("(5 + 3)/2 * 10 = ? ");
  //   expect(solution.questions).toContain("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
  //   expect(solution.questions).toContain("What is the minimum crew size for the ISS? ");
	// });

  // // correctAnswers tests //
	// it("correctAnswers contains 5 answers", function() {
	// 	expect(solution.correctAnswers.length).toBe(5);
	// });

  // it("correctAnswers gives the correct answers", function() {
	// 	expect(solution.correctAnswers).toContain("Sally Ride");
  //   expect(solution.correctAnswers).toContain("true");
  //   expect(solution.correctAnswers).toContain("40");
  //   expect(solution.correctAnswers).toContain("Trajectory");
  //   expect(solution.correctAnswers).toContain("3");
	// });

  // PART 3 //
  // gradeQuiz tests //
  it("gradeQuiz returns a 0 for all wrong answers", function() {
    solution.candidateAnswers = ["foo", "bar", "baz", "lur", "man"];
    let grade = solution.gradeQuiz(solution.candidateAnswers);
    console.log('Grade in Test case is ', grade);
    expect(grade).toBe(0);
	});

  

	
 
 });