import questionData from "../data/surveyQuestion.json";
import "../assets/Survey.css";

/**
 * 체크박스형 질문 컴포넌트
 * @param {string} title - 질문의 제목
 * @param {string[]} value - 현재 체크된 항목 배열(부모에서 관리)
 * @param {function} onChange - 체크 상태가 바뀔 때 부모에 새 배열을 알리는 콜백
 */
export default function SurveyCheck({ title, value, onChange }) {
  const data = questionData;

  // 체크/해제 로직
  const handleToggle = (item) => {
    if (value.includes(item)) {
      // 이미 체크되어 있으면 제거
      onChange(value.filter((x) => x !== item));
    } else {
      // 새로 체크
      onChange([...value, item]);
    }
  };

  return (
    <div className="content check">
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
}
