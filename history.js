// Clear History Button functionality
document.addEventListener('DOMContentLoaded', () => {
  const clearBtn = document.getElementById('clear-history-btn');
  const chatBox = document.getElementById('chat-box');

  clearBtn.addEventListener('click', () => {
    chatBox.innerHTML = ''; // Clear chat content
  });
});
