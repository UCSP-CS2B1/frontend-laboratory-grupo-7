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

    var x =1;
    
    var number = document.getElementById("numero").value;
    while (number > 1){
        x = x * number;
        number = number-1;

    }

   document.getElementById("boton_fl").innerHTML = x;

   //return x;
}



// Param number: single integer
// Returns a single integer
function fibonacci(number) {

    var x=1;
    
    var y=0;
    var z=1;
    var r=0;
 
    var number = document.getElementById("numero_2").value;
 
    while(x < number){
        r =y+z;
        y=z;
        z=r;
        x=x+1;
    }
    

    document.getElementById("resultado_fb").innerHTML = r;

    //return r;
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {
    var expression =document.getElementById("expression").value;

    

    var x = eval(expression);

    document.getElementById("resultado_ev").innerHTML = x;
    

    //return x;
}


if (typeof process === 'object') {
    module.exports = {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}