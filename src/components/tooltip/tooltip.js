import { useState } from "react";
import "./tooltip.css";

const Tooltip = ({ 
  children, 
  content, 
  direction, 
  delay 
}) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setActive(false);
  };

  return (
    <div
      className="tooltip"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onClick={hideTip}
    >
      {active && (
        <div
          className={`tooltip__tip ${direction || "top"}`}
        >
          {content}
        </div>
      )}
      {children}
    </div>
  )
};

export default Tooltip;