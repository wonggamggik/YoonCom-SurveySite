import questionData from "../data/surveyQuestion.json";
import "../assets/Survey.css";

export default function SurveyDescriptive({ title }) {
  const data = questionData;

  return (
    <div className="content descriptive">
      <div>
        <h2>{title}</h2>
        <p>{data[title].description}</p>
      </div>
      <div>
        <textarea></textarea>
      </div>
    </div>
  );
}
