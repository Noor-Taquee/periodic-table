import "./style.css";

interface ToggleBtnProps {
  icon: string;
  variant?: "bold" | "fill" | "regular";
  title?: string;
  onClick: () => any;
}

export function ToggleBtn({
  icon,
  variant = "regular",
  title,
  onClick,
}: ToggleBtnProps) {
  return (
    <button className="toggle-btn" title={title} onClick={onClick}>
      <i className={`ph-${variant} ph-${icon}`}></i>
    </button>
  );
}

export default ToggleBtn;
