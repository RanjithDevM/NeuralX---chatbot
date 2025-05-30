function showHistory() {
  const history = JSON.parse(localStorage.getItem("chatHistory")) || [];

  const historyContent = document.getElementById("history-content");

  if (history.length === 0) {
    historyContent.innerText = "No chat history found!";
  } else {
    historyContent.innerHTML = history.map(entry => 
      `<strong>You:</strong> ${entry.user}<br><strong>Bot:</strong> ${entry.bot}<br><br>`
    ).join("");
  }

  document.getElementById("history-popup").style.display = "block";
}

function closeHistoryPopup() {
  document.getElementById("history-popup").style.display = "none";
}
