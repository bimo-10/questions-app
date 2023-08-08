import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  // Alternatif
  const [activeId, setActiveId] = useState(null);

  // Alternatif
  const handleToggle = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <div>
      <Questions
        questions={questions}
        activeId={activeId}
        handleToggle={handleToggle}
      />
    </div>
  );
};
export default App;
