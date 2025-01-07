import ".././assets/FirstDraft.css";

export default function FirstDraftQuestion({ id, label }) {
  return (
    <div className="question">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id}></input>
    </div>
  );
}
