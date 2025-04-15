import questionData from "../data/surveyQuestion.json";
import "../assets/Survey.css";
import { forwardRef } from "react";

const SurveyCheck = forwardRef(function SurveyCheck(
  { title, value, onChange, invalid = false },
  ref
) {
  const data = questionData;

  const handleToggle = (item) => {
    if (value.includes(item)) {
      onChange(value.filter((x) => x !== item));
    } else {
      onChange([...value, item]);
    }
  };

  return (
    <div className={`content check ${invalid ? "invalid-box" : ""}`} ref={ref}>
      <div>
        <h2>{title}</h2>
        <p>{data[title].description}</p>
      </div>
      <div className="items">
        {data[title].items.map((item, id) => {
          const isChecked = value.includes(item);
          return (
            <div className="item" key={id}>
              <input
                type="checkbox"
                id={`${data[title].id}-${id}`}
                className="screen-reader"
                checked={isChecked}
                onChange={() => handleToggle(item)}
              />
              <div className="label-box">
                <span className="check-icon" aria-hidden="true"></span>
                <label htmlFor={`${data[title].id}-${id}`}>{item}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default SurveyCheck;
