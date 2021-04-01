import React, { useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

export interface AccordionProps {
  title: String;
  content: String;
}

function Accordion(props: AccordionProps) {
  const [setActive, setActiveState] = useState<String>('');
  const [setHeight, setHeightState] = useState<Number | String>(0);

  const content = useRef(null) as any;

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className="accordionSection">
      <div className={`accordionTitle ${setActive}`} onClick={toggleAccordion}>
        {props.title}
        {setActive === 'active' ? <FaMinus /> : <FaPlus />}
      </div>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordItem"
      >
        <div className="accordCont">{props.content}</div>
      </div>
    </div>
  );
}

export default Accordion;
