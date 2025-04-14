import questionData from "../data/surveyQuestion.json";
import "../assets/Survey.css";

/**
 * 서술형 질문 컴포넌트
 * @param {string} title - 질문의 제목
 * @param {string} value - 부모가 관리하는 "사용자의 입력 내용"
 * @param {function} onChange - 값이 바뀔 때 부모에 알리는 콜백
 */
export default function SurveyDescriptive({ title, value, onChange }) {
  const data = questionData;

  return (
    <div className="content descriptive">
      <div>
        <h2>{title}</h2>
        <p>{data[title].description}</p>
      </div>
      <div>
        {/* 부모로부터 받은 value를 textarea에 연결, 변경 시 onChange 호출 */}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
