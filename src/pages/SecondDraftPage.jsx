import { useRef } from "react";
import ".././assets/SecondDraft.css";
import survey from "../assets/survey.webp";

export default function SecondDraftPage() {
  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  return (
    <div className="secondDraft">
      <div className="secondDraft-content">
        {/* 제목 */}
        <div className="title">
          <img src={survey} />
          <div className="title-text">
            <h1>RCK 설문지 - 템플릿 1</h1>
            <p className="description">
              설문조사에 대한 설명, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* 질문1 */}
        <div className="question">
          <label className="question-title" htmlFor={1}>
            이름을 적어주세요.
          </label>
          <input className="input-text" form="text" id={1}></input>
        </div>

        {/* 질문2 */}
        <div className="question">
          <fieldset>
            <legend className="question-title">성별을 골라주세요</legend>
            <div>
              <input type="checkbox" id="man" name="man" />
              <label htmlFor="man">Man</label>
            </div>

            <div>
              <input type="checkbox" id="woman" name="woman" />
              <label htmlFor="woman">Woman</label>
            </div>
          </fieldset>
        </div>

        {/* 질문3 */}
        <div className="question">
          <fieldset>
            <legend className="question-title">사시는 지역을 골라주세요</legend>
            <div>
              <input type="checkbox" id="seoul" name="seoul" />
              <label htmlFor="seoul">Seoul</label>
            </div>

            <div>
              <input type="checkbox" id="others" name="others" />
              <label htmlFor="others">Others</label>
            </div>
          </fieldset>
          <div></div>
        </div>

        {/* 질문4 */}
        <div className="question">
          <label className="question-title" htmlFor={4}>
            기타 의견이 있으실 경우 자유롭게 작성해주세요
          </label>
          <textarea
            className="input-textarea"
            ref={textarea}
            onChange={handleResizeHeight}
            id={4}
            rows={3}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
