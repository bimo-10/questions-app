import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = (props) => {
  const { questions, activeId, handleToggle } = props;
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            handleToggle={handleToggle}
          />
        );
      })}
    </section>
  );
};

export default Questions;
