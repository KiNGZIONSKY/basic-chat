function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const chatWindow = document.getElementById('chat-window');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerText = messageText;
        chatWindow.appendChild(messageElement);
        messageInput.value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }
}

document.getElementById('message-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
