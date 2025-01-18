import { Link } from "react-router-dom";
import "../assets/Survey.css";
import survey_image from "../assets/rck-image.png";
import SurveyCheck from "../components/SurveyCheck";
import SurveyDescriptive from "../components/SurveyDescriptive";

export default function SurveyPage() {
  return (
    <div className="surveyPage">
      {/* 네비게이션 바 */}
      <div className="nav">
        <div className="nav-current"></div>
      </div>
      {/* 본문 */}
      <div className="survey">
        <div className="survey-conetnts">
          <div className="introduction">
            <div className="image"></div>
            <div className="text">
              <h1>온라인 레퍼런스 체크</h1>
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
          <div className="contents">
            {/* 지원자와의 관계 */}
            <SurveyDescriptive title={"지원자와의 관계"} />
            {/* 주요 역할과 성과 */}
            <SurveyDescriptive title={"주요 역할과 성과"} />
            {/* 장점 및 단점 */}
            <SurveyDescriptive title={"장점 및 단점"} />
            {/* 직무/성격상 아쉬웠던 점 */}
            <SurveyDescriptive title={"직무/성격상 아쉬웠던 점"} />
            {/* 리더십 측면 */}
            <SurveyCheck title={"리더십 측면"} />
            {/* 협업/커뮤니케이션 1 */}
            <SurveyCheck title={"협업/커뮤니케이션(1)"} />
            {/* 협업/커뮤니케이션 2 */}
            <SurveyCheck title={"협업/커뮤니케이션(2)"} />
            {/* 평소 전문성 */}
            <SurveyCheck title={"평소 전문성"} />
            {/* 평소 인성 */}
            <SurveyCheck title={"평소 인성"} />
          </div>
        </div>
      </div>
    </div>
  );
}
