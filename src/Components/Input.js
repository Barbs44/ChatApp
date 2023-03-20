import { useState } from "react";

const Input = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Erreur : saisissez le texte avant d'envoyer le message");
      return;
    }
    setInput("");
    sendMessage(input.trim());
  };

  return (
    <form className="input-form">
      <input
        type="text"
        placeholder="Tapez votre message ici"
        autoFocus={false}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSendMessage} className="send-button">
        Envoyez
      </button>
    </form>
  );
};

export default Input;