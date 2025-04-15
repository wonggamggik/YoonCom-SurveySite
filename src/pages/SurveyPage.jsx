import { useState } from "react";
import Header from "../components/Header";
import SurveyDescriptive from "../components/SurveyDescriptive";
import SurveyCheck from "../components/SurveyCheck";
import up_image from "../assets/chevron-double-up_6407358.svg";
import "../assets/Survey.css";
import questionData from "../data/surveyQuestion.json";

export default function SurveyPage() {
  // 1) 서술형 상태들
  const [relationship, setRelationship] = useState("");
  const [rolePerformance, setRolePerformance] = useState("");
  const [strengthWeakness, setStrengthWeakness] = useState("");
  const [taskIssue, setTaskIssue] = useState("");

  // 2) 체크박스 상태들
  const [leadership, setLeadership] = useState([]);
  const [comm1, setComm1] = useState([]);
  const [comm2, setComm2] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [personality, setPersonality] = useState([]);

  // “맨 위로” 버튼
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 체크박스 유효성 함수 (예: 2~5개 or "공감되는 문장 없음" 단독)
  function validateCheckBox(arr, noneLabel = "공감되는 문장 없음") {
    const hasNone = arr.includes(noneLabel);
    if (hasNone) {
      if (arr.length !== 1) return false;
    } else {
      if (arr.length < 2 || arr.length > 5) return false;
    }
    return true;
  }

  // 3) 제출하기 로직
  const handleSubmit = () => {
    // (A) 서술형 필수 검사
    if (!relationship.trim()) {
      alert("지원자와의 관계를 입력해 주세요!");
      return;
    }
    if (!rolePerformance.trim()) {
      alert("주요 역할과 성과를 입력해 주세요!");
      return;
    }
    if (!strengthWeakness.trim()) {
      alert("장점 및 단점을 입력해 주세요!");
      return;
    }
    if (!taskIssue.trim()) {
      alert("직무/성격상 아쉬웠던 점을 입력해 주세요!");
      return;
    }

    // (B) 체크박스 검사
    if (!validateCheckBox(leadership)) {
      alert("리더십 측면 체크가 유효하지 않습니다!");
      return;
    }
    if (!validateCheckBox(comm1)) {
      alert("협업/커뮤니케이션(1) 체크가 유효하지 않습니다!");
      return;
    }
    if (!validateCheckBox(comm2)) {
      alert("협업/커뮤니케이션(2) 체크가 유효하지 않습니다!");
      return;
    }
    if (!validateCheckBox(expertise)) {
      alert("평소 전문성 체크가 유효하지 않습니다!");
      return;
    }
    if (!validateCheckBox(personality)) {
      alert("평소 인성 체크가 유효하지 않습니다!");
      return;
    }

    // (C) 모두 통과
    alert("통과!");

    const payload = {
      relationship,
      rolePerformance,
      strengthWeakness,
      taskIssue,
      leadership,
      comm1,
      comm2,
      expertise,
      personality,
    };
    console.log("제출 데이터:", payload);
    // fetch/axios로 서버 전송 가능
  };

  return (
    <div className="app">
      {/* 헤더에 onSubmit 함수를 props로 전달 */}
      <Header onSubmit={handleSubmit} />

      <div className="surveyPage">
        <div className="survey">
          <div className="survey-conetnts">
            {/* 예시 introduction 생략 */}
            <div className="contents">
              {/* 서술형 */}
              <SurveyDescriptive
                title="지원자와의 관계"
                value={relationship}
                onChange={setRelationship}
              />
              <SurveyDescriptive
                title="주요 역할과 성과"
                value={rolePerformance}
                onChange={setRolePerformance}
              />
              <SurveyDescriptive
                title="장점 및 단점"
                value={strengthWeakness}
                onChange={setStrengthWeakness}
              />
              <SurveyDescriptive
                title="직무/성격상 아쉬웠던 점"
                value={taskIssue}
                onChange={setTaskIssue}
              />

              {/* 체크박스 */}
              <SurveyCheck
                title="리더십 측면"
                value={leadership}
                onChange={setLeadership}
              />
              <SurveyCheck
                title="협업/커뮤니케이션(1)"
                value={comm1}
                onChange={setComm1}
              />
              <SurveyCheck
                title="협업/커뮤니케이션(2)"
                value={comm2}
                onChange={setComm2}
              />
              <SurveyCheck
                title="평소 전문성"
                value={expertise}
                onChange={setExpertise}
              />
              <SurveyCheck
                title="평소 인성"
                value={personality}
                onChange={setPersonality}
              />
            </div>
          </div>
        </div>

        {/* 페이지 하단: 맨 위로 버튼 */}
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <button className="goToTop" onClick={goToTop}>
            <img src={up_image} alt="위로 가기" />
          </button>
        </div>
      </div>
    </div>
  );
}
