// A = Rock, score 1
// B = Paper, score 2
// C = Scissors, score 3

// X = Rock, score 1
// Y = Paper, score 2
// Z = Scissors, score 3

// if you win score +6
// if you lose score 0
// if you draw score +3

const inputFilePath = new URL('.', import.meta.url).pathname + 'input.txt';
const input = await Deno.readTextFile(inputFilePath);

const getTotalScore = (input: string) => {
  let totalScore = 0;
  input.split('\n').map((game) => {
    const [player1, player2] = game.split(' ');
    let player1Score = 0;
    if (player1 === 'A') player1Score = 1;
    if (player1 === 'B') player1Score = 2;
    if (player1 === 'C') player1Score = 3;

    let player2Score = 0;
    if (player2 === 'X') player2Score = 1;
    if (player2 === 'Y') player2Score = 2;
    if (player2 === 'Z') player2Score = 3;

    let gameScore = 0;
    if (player1Score === player2Score) {
      gameScore += 3;
    } else if (
      (player1Score === 1 && player2Score === 2) ||
      (player1Score === 2 && player2Score === 3) ||
      (player1Score === 3 && player2Score === 1)
    ) {
      gameScore += 6;
    } else {
      gameScore += 0;
    }
    const myScore = gameScore + player2Score;
    totalScore += myScore;
  });
  return totalScore;
};

const getNewScore = (input: string) => {
  let totalScore = 0;
  input.split('\n').map((game) => {
    const [player1, player2] = game.split(' ');
    let player1Score = 0;
    let player2Score = 0;
    if (player1 === 'A') {
      player1Score = 1;
      if (player2 === 'X') player2Score = 3;
      if (player2 === 'Y') player2Score = 1;
      if (player2 === 'Z') player2Score = 2;
    }
    if (player1 === 'B') {
      player1Score = 2;
      if (player2 === 'X') player2Score = 1;
      if (player2 === 'Y') player2Score = 2;
      if (player2 === 'Z') player2Score = 3;
    }
    if (player1 === 'C') {
      player1Score = 3;
      if (player2 === 'X') player2Score = 2;
      if (player2 === 'Y') player2Score = 3;
      if (player2 === 'Z') player2Score = 1;
    }

    let gameScore = 0;
    if (player1Score === player2Score) {
      gameScore += 3;
    } else if (
      (player1Score === 1 && player2Score === 2) ||
      (player1Score === 2 && player2Score === 3) ||
      (player1Score === 3 && player2Score === 1)
    ) {
      gameScore += 6;
    } else {
      gameScore += 0;
    }
    const myScore = gameScore + player2Score;
    totalScore += myScore;
  });
  return totalScore;
};

console.log(`part1: ${getTotalScore(input)}`);
console.log(`part2: ${getNewScore(input)}`);
