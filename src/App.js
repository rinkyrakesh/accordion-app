import { useState } from "react";

const faqs = [
  {
    title: "what are you doing?",
    text: "preparing a project in React",
  },
  {
    title: "what is the time limit?",
    text: "most probably 24 hrs",
  },
  {
    title: "what is the purpose to learn React?",
    text: "to get a decent job",
  },
];
function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} />
      ))}
    </div>
  );
}
function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    return setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
