import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleQuestion = (props) => {
  const { id, title, info, activeId, handleToggle } = props;
  // const [show, setShow] = useState(false);

  // Alternatif
  const isActive = activeId === id;
  return (
    <section className="question">
      <header>
        <h4>{title}</h4>
        <button className="question-btn" onClick={() => handleToggle(id)}>
          {/* {show ? <AiOutlineMinus /> : <AiOutlinePlus />} */}

          {/*Alternatif */}
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {/* {show && <p>{info}</p>} */}
      </header>
      {/** Alternatif */}
      {isActive && <p>{info}</p>}
    </section>
  );
};
export default SingleQuestion;
