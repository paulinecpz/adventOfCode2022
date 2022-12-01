const inputFilePath = new URL('.', import.meta.url).pathname + 'input.txt';
const input = await Deno.readTextFile(inputFilePath);

const getBiggestCalories = (input: string) => {
  let allCalories = [];
  input.split('\n\n').map((calories) => {
    const meals = calories.split('\n').map((calories) => parseInt(calories));
    const mealCalories = meals.reduce((a, b) => parseInt(a) + parseInt(b));
    allCalories.push(mealCalories);
    const biggestCalories = Math.max(...allCalories);
    const threeBiggestMealCalories = allCalories
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b);

    console.log(`part 1: ${biggestCalories}`);
    console.log(`part 2: ${threeBiggestMealCalories}`);
  });
};
getBiggestCalories(input);
