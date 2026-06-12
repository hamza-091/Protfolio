// Add this to your existing "Hamza assistant" chat widget component.
// Replace your Gemini API call with this fetch to your local FAQ bot.

async function getBotReply(userMessage) {
  try {
    const res = await fetch("http://localhost:3001/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });
    const data = await res.json();
    return data.answer;
  } catch (err) {
    return "Sorry, I'm having trouble connecting right now. Please email hamzamehmood054@gmail.com.";
  }
}

// Usage example inside your chat send handler:
// const reply = await getBotReply(userInput);
// setMessages(prev => [...prev, { role: "bot", text: reply }]);
