function sumOfDigits(number) {
    if (number === 0) {
        return 0;
    } else {
        return (number % 10) + sumOfDigits(Math.floor(number / 10));
    }
}

function power(x, y) {
    if (y === 0) {
        return 1;
    } else if (y > 0) {
        return x * power(x, y - 1);
    } else {
        return 1 / power(x, -y);
    }
}

document.getElementById("sumOfDigitsBtn").addEventListener("click", function() {
    var number = parseInt(document.getElementById("number").value);
    var sum = sumOfDigits(number);
    document.getElementById("sumOutput").innerText = "Sum of digits: " + sum;
});

document.getElementById("powerBtn").addEventListener("click", function() {
    var base = parseFloat(document.getElementById("base").value);
    var exponent = parseInt(document.getElementById("exponent").value);
    var result = power(base, exponent);
    document.getElementById("powerOutput").innerText = "Result: " + result;
});

  