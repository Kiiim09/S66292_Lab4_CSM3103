function square() {
    var num = parseInt(document.getElementById("number").value);
    var result = num * num;
    document.getElementById("output").innerText = "Square of " + num + " is: " + result;
}

function sumOfCubes() {
    var num1 = parseInt(document.getElementById("number").value);
    var num2 = parseInt(prompt("Enter another number:"));
    var result = Math.pow(num1, 3) + Math.pow(num2, 3);
    document.getElementById("output").innerText = "Sum of cubes of " + num1 + " and " + num2 + " is: " + result;
}

function reverseNumber() {
    var num = document.getElementById("number").value;
    var reversedNum = parseInt(num.toString().split('').reverse().join(''));
    document.getElementById("output").innerText = "Reversed number of " + num + " is: " + reversedNum;
}

function divisibleByZ() {
    var z = parseInt(document.getElementById("divisible").value);
    var result = "";
    for (var i = 1; i <= 100; i++) {
        if (i % z === 0) {
            result += i + ", ";
        }
    }
    document.getElementById("output").innerText = "Numbers between 1 and 100 divisible by " + z + ": " + result.slice(0, -2);
}

document.getElementById("squareBtn").addEventListener("click", square);
document.getElementById("sumOfCubesBtn").addEventListener("click", sumOfCubes);
document.getElementById("reverseBtn").addEventListener("click", reverseNumber);
document.getElementById("divisibleByZBtn").addEventListener("click", divisibleByZ);
