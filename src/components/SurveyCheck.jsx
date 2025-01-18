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
      <div>
        {data[title].items.map((item, id) => (
          <div>
            <input type="checkbox" id={`${data[title].id}-${id}`} />
            <label for={`${data[title].id}-${id}`}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
