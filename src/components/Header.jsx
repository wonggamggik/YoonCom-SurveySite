import logo from "../assets/rck-logo.png";
import "../assets/header.css";

/**
 * @param {function} onSubmit - 제출하기 버튼을 눌렀을 때 호출할 함수(부모에서 제공)
 */
export default function Header({ onSubmit }) {
  return (
    <div className="header">
      <div className="header-inner">
        <div>
          <a href="https://www.rck.co.kr/">
            <img alt="rck 로고" src={logo} />
          </a>
        </div>
        <div className="submit">
          <button>제출하기</button>
          <div>
            <button onClick={onSubmit}>제출하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
