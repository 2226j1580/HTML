function performAddition() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        document.getElementById('result').innerText = `Result: ${result}`;
    } else {
        document.getElementById('result').innerText = 'Result: Please enter valid numbers';
    }
}

function performMultiplication() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        document.getElementById('result').innerText = `Result: ${result}`;
    } else {
        document.getElementById('result').innerText = 'Result: Please enter valid numbers';
    }
}

