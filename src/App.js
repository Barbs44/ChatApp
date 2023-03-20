import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Message from "./Components/Message";
import Input from "./Components/Input";

// Funkcija za dodjelu random pridjeva i imenica za nick
function randomName() {
  const adjectives = [
    "Digne", "Créatif", "Déterminé", "Calme", "Courageux", "Délicieux", "Enthousiaste", "Émouvant", "Dynamique", "Élégant",
  ];
  const nouns = [
    "Baguette", "Croissant", "Escargot", "Fromage", "Vin", "Boulangerie", "Parfum", "Crêpe", "Bijou", "Rendez-vous", "Fleur", "Crème brûlée",
      "Révolution", "Haute couture", "Chapeau", "Parapluie", "Vélo", "Enveloppe", "Gâteau", "Légume"
  ];
const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
const noun = nouns[Math.floor(Math.random() * nouns.length)];
return noun + " " + adjective;

}

// Funkcija za random odabir boje avatara
function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

const currentMember = {
  name: randomName(),
  color: randomColor(),
};
// Novi Scaledrone ID kanal 
const drone = new window.Scaledrone("wxhf1AAs9uRnslWr", {
  data: {
    name: currentMember.name,
    color: currentMember.color,
  },
});
const room = drone.subscribe("observable-room");

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  useEffect(() => {
    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    room.on("message", handleMessage);
    return () => {
      room.off("message", handleMessage);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Message messages={messages} currentMember={currentMember} />
      <Input sendMessage={sendMessage} />
    </div>
  );
}

export default App;
