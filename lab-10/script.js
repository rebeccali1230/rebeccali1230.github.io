const form = document.getElementById('form');
const dateInput = document.getElementById('date');
const historyDiv = document.getElementById('history');
const clearButton = document.getElementById('clear');
let searchHistory = JSON.parse(localStorage.getItem('history')) || [];

// Load history on page load
updateHistoryDisplay();

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const date = dateInput.value;
    if (!date) return; 

    // Fetch color from API
    const response = await fetch(`https://colors.zoodinkers.com/api?date=${date}`);
    const data = await response.json();

    // Update history
    searchHistory.unshift({ date: data.date, color: data.hex });
    localStorage.setItem('history', JSON.stringify(searchHistory));
    updateHistoryDisplay();
});

// Function to determine a contrasting text color (white or black) for better readability
function getContrastingTextColor(hexColor) {
    const color = hexColor.replace('#', '');
    const r = parseInt(color.substr(0, 2), 16);
    const g = parseInt(color.substr(2, 2), 16);
    const b = parseInt(color.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155 ? 'black' : 'white';
}

function updateHistoryDisplay() {
    // Get the element where the history should be displayed
    const historyDiv = document.getElementById('history');

    // Clear the current contents of the history div
    historyDiv.innerHTML = '';

    // Create and append new elements based on the searchHistory array
    searchHistory.forEach(item => {
        // Create a new div or other element for each history item
        const historyItem = document.createElement('div');
        historyItem.innerHTML = `${item.color}<br />${item.date}`;
        historyItem.style.backgroundColor = item.color;
        historyItem.style.padding = '10px';
        historyItem.style.marginTop = '5px';
        historyItem.style.color = getContrastingTextColor(item.color);

        // Append the new element to the history div
        historyDiv.appendChild(historyItem);
    });
}

clearButton.addEventListener('click', function () {
    // Clear history array and local storage
    searchHistory = [];
    localStorage.removeItem('history');
    updateHistoryDisplay();
});
