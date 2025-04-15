import "../assets/Modal.css";

export default function ErrorModal({ errors, onClose }) {
  if (!errors || errors.length === 0) return null;

  // 뒷배경을 클릭하면 onClose 실행
  function handleBackdropClick() {
    onClose();
  }

  // 모달 내부(content)를 클릭하면 이벤트 전파 중단
  function handleContentClick(e) {
    e.stopPropagation();
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <p>다음 항목을 확인해 주세요</p>
        <ul>
          {errors.map((msg, idx) => (
            <li key={idx}>- {msg}</li>
          ))}
        </ul>
        <div className="button-container">
          <button onClick={onClose}>확인</button>
        </div>
      </div>
    </div>
  );
}
