import React from "react";
import type { CollectionEntry } from "astro:content";
import { navigate } from "astro:transitions/client";
import "./style/explanation.css";
import "./style/ChoicesForm.css";

interface Props {
  slug: string;
  quizEntry: CollectionEntry<"quiz">;
}

const ChoicesForm = ({ slug, quizEntry }: Props) => {
  const { answers } = quizEntry.data;
  const formRef = React.useRef<HTMLFormElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChoiceClick = (choiceIndex) => {
    inputRef.current.value = choiceIndex;
    const formData = new FormData(formRef.current);
    navigate(`/quiz/${slug}`, {
      formData,
    });
  };

  return (
    <form
      method="post"
      className="choices"
      ref={formRef}
      encType="application/x-www-form-urlencoded"
    >
      <input type="hidden" name="player__answer" value="" ref={inputRef} />
      <ul>
        {answers &&
          answers.map((answer, index) => (
            <li
              tabIndex={0}
              role="button"
              aria-pressed="false"
              key={`player__answer-choice-${index}`}
              className="quiz__quiz-option-wrapper"
              onClick={() => handleChoiceClick(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  console.log(e);
                  handleChoiceClick(index);
                }
              }}
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
