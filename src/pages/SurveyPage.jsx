import { Link } from "react-router-dom";
import "../assets/Survey.css";
import survey_image from "../assets/rck-image.png";

export default function SurveyPage() {
  return (
    <div className="surveyPage">
      <div className="nav">
        <div className="nav-current"></div>
      </div>
      <div className="survey">
        <div className="survey-conetnts">
          <div className="introduction">
            <div className="image"></div>
            <div>
              <h1>RCK 설문조사</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
        </div>
        <div className="survey-next"></div>
      </div>
    </div>
  );
}
