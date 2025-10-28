function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateNumber() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById("result").textContent = "Please enter positive numbers only.";
    } else {
        // Generate the random number
        const randomNum = getRandomNumber(min, max);
        document.getElementById("result").textContent = `Random Number: ${randomNum}`;
    }
}

document.getElementById("generateNumber").addEventListener("click", updateNumber);