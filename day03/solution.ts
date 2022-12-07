const inputFilePath = new URL('.', import.meta.url).pathname + 'input.txt';
const input = await Deno.readTextFile(inputFilePath);
type ObjectType = {
  [key: string]: number;
};
const priorityScores: ObjectType = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,

  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};
const getSumOfPriorities = (input: string) => {
  // part 1
  let totalScore = 0;
  input.split('\n').map((line) => {
    const length = line.length;
    const middle = Math.floor(length / 2);
    const firstHalf = line.slice(0, middle);
    const secondHalf = line.slice(middle, length);
    // compare the characters in common in the firstHalf and the secondHalf
    const firstArray = firstHalf.split('');
    const secondArray = secondHalf.split('');
    let commonLetter = '';
    firstArray.some((char) => {
      if (secondArray.includes(char)) {
        commonLetter = char;
        return true;
      }
    });
    // set priority compare to the common letter
    const priorityScore = priorityScores[commonLetter];
    // add the priority score to the total score
    totalScore += priorityScore;
  });
  // part 2
  let secondTotalScore = 0;
  const newArray = input.split('\n');
  // group items per 3
  for (let i = 0; i < newArray.length; i += 3) {
    let newGroup = [];
    newGroup.push(newArray.slice(i, i + 3));
    // flatten array
    const letterGroup = newGroup.flat();
    // compare the characters in common in the firstHalf and the secondHalf
    const firstArray = letterGroup[0].split('');
    const secondArray = letterGroup[1].split('');
    const thirdArray = letterGroup[2].split('');
    let commonLetter = '';
    firstArray.some((char) => {
      if (secondArray.includes(char) && thirdArray.includes(char)) {
        commonLetter = char;
        return true;
      }
    });
    // set priority compare to the common letter
    const priorityScore = priorityScores[commonLetter];
    // add the priority score to the total score
    secondTotalScore += priorityScore;
  }

  console.log(`part1: ${totalScore}`);
  console.log(`part2: ${secondTotalScore}`);
};
getSumOfPriorities(input);
