import React from "react";
import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          currentOpen={currentOpen}
          onOpen={setIsOpen}
          title={item.title}
          text={item.text}
          num={index}
          key={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}

      <AccordionItem
        currentOpen={currentOpen}
        onOpen={setIsOpen}
        title="Test 1"
        num={22}
        key="Test 1"
      >
        <p>Allows React developers to: </p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, currentOpen, onOpen, children }) {
  const isOpen = currentOpen === num;

  function handleToggle() {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
