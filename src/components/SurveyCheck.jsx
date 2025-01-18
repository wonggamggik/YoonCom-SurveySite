import questionData from "../data/surveyQuestion.json";
import "../assets/Survey.css";

export default function SurveyCheck({ title }) {
  const data = questionData;

  return (
    <div className="content check">
      <div>
        <h2>{title}</h2>
        <p>{data[title].description}</p>
      </div>
      <div className="items">
        {data[title].items.map((item, id) => (
          <div className="item">
            <input
              type="checkbox"
              id={`${data[title].id}-${id}`}
              className="screen-reader"
            />
            <div className="label-box">
              <span className="check-icon" aria-hidden="true"></span>
              <label htmlFor={`${data[title].id}-${id}`}>{item}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
