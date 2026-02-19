// Send message function
function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.trim();

    if (message === "") return;

    // Add user message
    addMessage(message, "user");

    // Simulate bot response delay
    setTimeout(() => {
        let reply = getBotReply(message);
        addMessage(reply, "bot");
    }, 500);

    // Clear input
    input.value = "";
}

// Add message to chat box
function addMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");

    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;

    chatBox.appendChild(messageDiv);

    // Auto-scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple business-style bot replies
function getBotReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Welcome to Business Chat! How can we assist you today?";
    } 
    else if (message.includes("services")) {
        return "We provide web development, app development, and AI chatbot solutions.";
    } 
    else if (message.includes("price") || message.includes("cost")) {
        return "Pricing depends on your project requirements. Would you like a custom quote?";
    } 
    else if (message.includes("contact")) {
        return "You can reach our sales team at contact@businesschat.com.";
    } 
    else {
        return "Thank you for your message. Our representative will get back to you shortly.";
    }
}
