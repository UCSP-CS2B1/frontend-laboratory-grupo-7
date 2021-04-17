// Param numbers: array of numbers
// Returns a sorted array

function insertion_sort(numbers) {

    let n = numbers.length;
        for (let i = 1; i < n; i++) {
            let j = i-1; 
            while ((j > -1) && (numbers[i] < numbers[j])) {
                numbers[j+1] = numbers[j];
                j--;
            }
            numbers[j+1] = numbers[i];
        }
    return numbers;

}

// Param number: single integer
// Returns a single integer
function factorial(number) {

    var total = 1; 
	for (i=1; i<=number; i++) {
		total = total * i; 
	}
	return total; 
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {
    let number=[0,1];
    for (let i = 2; i < number; i++) {
        number[i] = number[i - 2] + number[i - 1];
    }
    return number;
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {
    var x = new String("2");
    var y = new String("5");

    var z = x+y;
    expression.charAt(1);

    return z
}


if (typeof process === 'object') {
    module.exports = {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}