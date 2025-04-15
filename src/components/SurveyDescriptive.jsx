import questionData from "../data/surveyQuestion.json";
import "../assets/Survey.css";
import { forwardRef } from "react";

const SurveyDescriptive = forwardRef(function SurveyDescriptive(
  { title, value, onChange, invalid = false },
  ref
) {
  const data = questionData;

  return (
    <div
      className={`content descriptive ${invalid ? "invalid-box" : ""}`}
      ref={ref}
    >
      <div>
        <h2>{title}</h2>
        <p>{data[title].description}</p>
      </div>
      <div>
        <textarea value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  );
});

export default SurveyDescriptive;
