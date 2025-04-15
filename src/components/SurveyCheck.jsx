import questionData from "../data/surveyQuestion.json";
import "../assets/Survey.css";
import { forwardRef } from "react";

const SurveyCheck = forwardRef(function SurveyCheck(
  { title, value, onChange, invalid = false },
  ref
) {
  const data = questionData;

  const handleToggle = (item) => {
    const noneLabel = "공감되는 문장 없음";
    const hasNone = value.includes(noneLabel);
    const isNone = item === noneLabel;

    if (value.includes(item)) {
      onChange(value.filter((x) => x !== item));
    } else {
      if (isNone) {
        onChange([noneLabel]);
      } else {
        if (hasNone) {
          onChange([item]);
        } else {
          onChange([...value, item]);
        }
      }
    }
  };

  return (
    <div className={`content check ${invalid ? "invalid-box" : ""}`} ref={ref}>
      <div>
        <h2>{title}</h2>
        <p>{data[title].description}</p>
        <p className="title-annotation">최소 2개, 최대 5개</p>
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
