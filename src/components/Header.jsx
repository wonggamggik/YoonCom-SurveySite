import logo from "../assets/rck-logo.png";
import "../assets/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner">
        <div>
          <a href="https://www.rck.co.kr/">
            <img alt="rck 로고" src={logo}></img>
          </a>
        </div>
        <div className="submit">
          <button>제출하기</button>
        </div>
      </div>
    </div>
  );
}
