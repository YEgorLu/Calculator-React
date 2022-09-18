const operations = new Map()

operations['/'] = (firstNumber, secondNumber) =>  firstNumber / secondNumber;
operations['X'] = (firstNumber, secondNumber) =>  firstNumber * secondNumber;
operations['-'] = (firstNumber, secondNumber) =>  firstNumber - secondNumber;
operations['+'] = (firstNumber, secondNumber) =>  firstNumber + secondNumber;
operations['%'] = (firstNumber, secondNumber) =>  firstNumber / secondNumber * 100;

export default operations;
