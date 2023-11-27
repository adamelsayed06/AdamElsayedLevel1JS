let coinCounts = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0,
    halfDollars: 0,
    dollars: 0
};

function updateDisplay() {
    // Update pennies
    document.getElementById('pennies-count').textContent = coinCounts.pennies;
    document.getElementById('pennies-value').textContent = (coinCounts.pennies * 0.01).toFixed(2);

    // Update total value
    const totalValue = Object.values(coinCounts).reduce((total, count, index) => {
        const coinValue = [0.01, 0.05, 0.1, 0.25, 0.5, 1][index];
        return total + count * coinValue;
    }, 0);

    document.getElementById('total-value').textContent = totalValue.toFixed(2);
}

function changeCoin(coinType, amount) {
    if (coinCounts[coinType] + amount >= 0) {
        coinCounts[coinType] += amount;
        updateDisplay();
    }
}

// Initial display update
updateDisplay();