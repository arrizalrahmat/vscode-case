const params = process.argv.splice(2);
const [num1, num2, op] = params;

function main(num1, num2, op) {
  let result = 0;

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      break;
  }

  return result;
}

console.log(main(num1, op, num2));
