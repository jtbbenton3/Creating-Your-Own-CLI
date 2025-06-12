const { determineWinner } = require("../src/lib/gameLogic.js");

test("determineWinner correctly identifies winner", () => {
  expect(determineWinner("rock", "scissors")).toBe("win");
  expect(determineWinner("rock", "paper")).toBe("lose");
  expect(determineWinner("rock", "rock")).toBe("tie");
  expect(determineWinner("scissors", "paper")).toBe("win");
  expect(determineWinner("paper", "rock")).toBe("win");
});