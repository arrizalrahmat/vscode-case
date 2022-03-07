const params = process.argv.splice(2);

function fibonacci(sequence) {
  let result = [];
  for (let i = 0; i < sequence; i++) {
    if (result.length < 2) {
      result.push(i);
    } else {
      result.push(result[i] + result[i - 1]);
    }
  }
  console.log(result);
}

console.log(fibonacci(params[0]));
