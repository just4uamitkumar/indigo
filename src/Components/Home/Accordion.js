import React, { useState, useRef } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';


function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }


  return (
    <div className="accordionSection">
      <div className={`accordionTitle ${setActive}`} onClick={toggleAccordion}>
        {props.title}
        {setActive === "active" ? <FaMinus /> : <FaPlus />}
      </div>

      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordItem">
        <div className="accordCont">{props.content}</div>
      </div>
    </div>
  );
}

export default Accordion;