// JavaScript code for WebSocket client communication

// Create a WebSocket connection to the Tiva C WebSocket server
const socket = new WebSocket('ws://10.130.213.203:8765');  // Replace with Tiva C IP and Port

// Event listener for when the connection is established
socket.onopen = function(event) {
    console.log('Connected to the WebSocket server');
};

// Event listener for receiving messages from the server (Tiva C)
socket.onmessage = function(event) {
    console.log('Message from server:', event.data);
    // Update the displayed message from the server
    document.getElementById('serverMessage').innerText = `Server says: ${event.data}`;
};

// Event listener for when the WebSocket connection is closed
socket.onclose = function(event) {
    console.log('Connection closed');
};

// Event listener for button click to send a message to the server
document.getElementById('sendMessageBtn').addEventListener('click', () => {
    const inputField = document.getElementById('inputMessage');
    const message = inputField.value;
    console.log('Sending message to server:', message);
    socket.send(message);
    inputField.value = '';
});
