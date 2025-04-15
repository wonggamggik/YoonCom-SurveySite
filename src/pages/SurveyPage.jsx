import { useState, useRef } from "react";
import Header from "../components/Header";
import SurveyDescriptive from "../components/SurveyDescriptive";
import SurveyCheck from "../components/SurveyCheck";
import ErrorModal from "../components/ErrorModal";
import up_image from "../assets/chevron-double-up_6407358.svg";
import "../assets/Survey.css";
import questionData from "../data/surveyQuestion.json";

export default function SurveyPage() {
  const [relationship, setRelationship] = useState("");
  const [rolePerformance, setRolePerformance] = useState("");
  const [strengthWeakness, setStrengthWeakness] = useState("");
  const [taskIssue, setTaskIssue] = useState("");

  const [leadership, setLeadership] = useState([]);
  const [comm1, setComm1] = useState([]);
  const [comm2, setComm2] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [personality, setPersonality] = useState([]);

  const refRelationship = useRef(null);
  const refRolePerf = useRef(null);
  const refStrength = useRef(null);
  const refTaskIssue = useRef(null);

  const refLeadership = useRef(null);
  const refComm1 = useRef(null);
  const refComm2 = useRef(null);
  const refExpertise = useRef(null);
  const refPersonality = useRef(null);

  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // (B) invalidMap: 어떤 항목이 유효성 실패인지 상태로 표시
  //    예: { relationship: true, rolePerformance: false, ... }
  const [invalidMap, setInvalidMap] = useState({});

  // 맨위로 버튼
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 체크박스 유효성 (최소 2~ 최대 5개 or "공감되는 문장 없음" 단독)
  function validateCheckBox(arr, noneLabel = "공감되는 문장 없음") {
    const hasNone = arr.includes(noneLabel);
    if (hasNone) {
      if (arr.length !== 1) return false;
    } else {
      if (arr.length < 2 || arr.length > 5) return false;
    }
    return true;
  }

  // 2) 제출하기 로직
  const handleSubmit = () => {
    // (1) 새 invalidMap 초기화
    const newInvalid = {
      relationship: false,
      rolePerformance: false,
      strengthWeakness: false,
      taskIssue: false,
      leadership: false,
      comm1: false,
      comm2: false,
      expertise: false,
      personality: false,
    };

    let firstErrorRef = null; // 가장 먼저 발견된 에러 항목의 ref
    const tempErrors = [];

    // (A) 서술형 검사
    // --- 서술형 예시 ---
    if (!relationship.trim()) {
      newInvalid.relationship = true;
      tempErrors.push("지원자와의 관계");
      if (!firstErrorRef) firstErrorRef = refRelationship;
    }
    if (!rolePerformance.trim()) {
      newInvalid.rolePerformance = true;
      tempErrors.push("주요 역할과 성과");
      if (!firstErrorRef) firstErrorRef = refRolePerf;
    }
    if (!strengthWeakness.trim()) {
      newInvalid.strengthWeakness = true;
      tempErrors.push("장점 및 단점");
      if (!firstErrorRef) firstErrorRef = refStrength;
    }
    if (!taskIssue.trim()) {
      newInvalid.taskIssue = true;
      tempErrors.push("직무/성격상 아쉬웠던 점");
      if (!firstErrorRef) firstErrorRef = refTaskIssue;
    }

    // (B) 체크박스 검사
    if (!validateCheckBox(leadership)) {
      newInvalid.leadership = true;
      tempErrors.push("리더십 측면");
      if (!firstErrorRef) firstErrorRef = refLeadership;
    }
    if (!validateCheckBox(comm1)) {
      newInvalid.comm1 = true;
      tempErrors.push("협업/커뮤니케이션(1)");
      if (!firstErrorRef) firstErrorRef = refComm1;
    }
    if (!validateCheckBox(comm2)) {
      newInvalid.comm2 = true;
      tempErrors.push("협업/커뮤니케이션(2)");
      if (!firstErrorRef) firstErrorRef = refComm2;
    }
    if (!validateCheckBox(expertise)) {
      newInvalid.expertise = true;
      tempErrors.push("평소 전문성");
      if (!firstErrorRef) firstErrorRef = refExpertise;
    }
    if (!validateCheckBox(personality)) {
      newInvalid.personality = true;
      tempErrors.push("평소 인성");
      if (!firstErrorRef) firstErrorRef = refPersonality;
    }

    setInvalidMap(newInvalid);

    const hasError = tempErrors.length > 0;
    if (hasError) {
      // 가장 먼저 발견된 에러 위치로 스크롤
      if (firstErrorRef && firstErrorRef.current) {
        const element = firstErrorRef.current;
        const yOffset = -85;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }

      setErrorMessages(tempErrors);
      setShowErrorModal(true);

      return;
    }

    // (C) 모두 통과
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
    // fetch or axios 가능
  };

  return (
    <div className="app">
      {/* 헤더 (버튼 클릭 시 handleSubmit 호출) */}
      <Header onSubmit={handleSubmit} />
      {showErrorModal && (
        <ErrorModal
          errors={errorMessages}
          onClose={() => setShowErrorModal(false)}
        />
      )}
      <div className="surveyPage">
        <div className="survey">
          <div className="survey-conetnts">
            <div className="introduction">
              <div className="image"></div>
              <div className="text">
                <h1>온라인 레퍼런스 체크</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
            </div>

            <div className="contents">
              {/* 서술형 */}
              <SurveyDescriptive
                title="지원자와의 관계"
                value={relationship}
                onChange={setRelationship}
                invalid={invalidMap.relationship}
                ref={refRelationship}
              />
              <SurveyDescriptive
                title="주요 역할과 성과"
                value={rolePerformance}
                onChange={setRolePerformance}
                invalid={invalidMap.rolePerformance}
                ref={refRolePerf}
              />
              <SurveyDescriptive
                title="장점 및 단점"
                value={strengthWeakness}
                onChange={setStrengthWeakness}
                invalid={invalidMap.strengthWeakness}
                ref={refStrength}
              />
              <SurveyDescriptive
                title="직무/성격상 아쉬웠던 점"
                value={taskIssue}
                onChange={setTaskIssue}
                invalid={invalidMap.taskIssue}
                ref={refTaskIssue}
              />

              {/* 체크박스 */}
              <SurveyCheck
                title="리더십 측면"
                value={leadership}
                onChange={setLeadership}
                invalid={invalidMap.leadership}
                ref={refLeadership}
              />
              <SurveyCheck
                title="협업/커뮤니케이션(1)"
                value={comm1}
                onChange={setComm1}
                invalid={invalidMap.comm1}
                ref={refComm1}
              />
              <SurveyCheck
                title="협업/커뮤니케이션(2)"
                value={comm2}
                onChange={setComm2}
                invalid={invalidMap.comm2}
                ref={refComm2}
              />
              <SurveyCheck
                title="평소 전문성"
                value={expertise}
                onChange={setExpertise}
                invalid={invalidMap.expertise}
                ref={refExpertise}
              />
              <SurveyCheck
                title="평소 인성"
                value={personality}
                onChange={setPersonality}
                invalid={invalidMap.personality}
                ref={refPersonality}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20, textAlign: "center" }}>
          <button className="goToTop" onClick={goToTop}>
            <img src={up_image} alt="위로 가기" />
          </button>
        </div>
      </div>
    </div>
  );
}
