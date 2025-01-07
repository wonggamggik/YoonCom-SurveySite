import { useRef } from "react";
import ".././assets/FirstDraft.css";
import FirstDraftQuestion from "../components/FirstDraftQuestion";

export default function FirstDraftPage() {
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  return (
    <div className="firstDraft">
      <div className="firstDraft-content">
        {/* 제목 */}
        <div className="title">
          <h1>RCK 설문지 - 템플릿 1</h1>
          <p className="description">
            설문조사에 대한 설명, Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        {/* 질문1 */}
        <FirstDraftQuestion id={1} label={"이름"} />

        {/* 질문2 */}
        <FirstDraftQuestion id={2} label={"성별"} />

        {/* 질문3 */}
        <FirstDraftQuestion id={3} label={"이메일"} />

        {/* 질문4 */}
        <FirstDraftQuestion id={4} label={"주소"} />

        {/* 질문5 */}
        <FirstDraftQuestion id={5} label={"전화번호"} />

        {/* 질문6 */}
        <div className="question">
          <label htmlFor={6}>의견</label>
          <textarea
            ref={textarea}
            onChange={handleResizeHeight}
            id={6}
            rows={1}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
