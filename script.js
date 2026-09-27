const sendButton = document.querySelector(".send-button");
const chatMessages = document.querySelector(".chat-messages");
const inputField = document.querySelector(".InputBox");

if (sendButton && chatMessages && inputField) {
  const addUserMessage = () => {
    const userMessage = inputField.value.trim();

    if (!userMessage) {
      inputField.focus();
      return;
    }

    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user";

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = "You";

    userMessageElement.append(label, document.createTextNode(` ${userMessage}`));
    chatMessages.appendChild(userMessageElement);

    inputField.value = "";
    inputField.focus();
  };

  sendButton.addEventListener("click", addUserMessage);

  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addUserMessage();
    }
  });
}