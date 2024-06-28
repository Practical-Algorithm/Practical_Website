import React from "react";
import type { CollectionEntry } from "astro:content";
import "./style/explanation.css";
import "./style/ChoicesForm.css";

interface Props {
  quizEntry: CollectionEntry<"quiz">;
}

const ChoicesForm = ({ quizEntry }: Props) => {
  const { answers } = quizEntry.data;

  const handleChoiceClick = (choiceIndex) => {
    console.log(choiceIndex);
  };

  return (
    <form method="post" className="choices">
      <ul>
        {answers &&
          answers.map((answer, index) => (
            <li
              key={`player__answer-choice-${index}`}
              className="quiz__quiz-option-wrapper"
              onClick={() => handleChoiceClick(index)}
            >
              <div className="quiz__quiz-option">
                <span className="quiz-option-text">{answer.detail}</span>
                <span className="quiz-option-number">{index + 1}</span>
              </div>
            </li>
          ))}
      </ul>
    </form>
  );
};

export default ChoicesForm;
