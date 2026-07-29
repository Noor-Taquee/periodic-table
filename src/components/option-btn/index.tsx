import "./style.css";

interface OptionBtnProps {
  text: string;
  onClick: () => any;
}

export function OptionBtn({ text, onClick }: OptionBtnProps) {
  return (
    <button className="option-btn" onClick={onClick}>
      {text.length > 0 && <p>{text}</p>}
    </button>
  );
}

export default OptionBtn;
