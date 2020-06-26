import React, { useState } from "react";
/**
 * ? Local Imports
 */
import "./IconButton.scss";
import styles, { _buttonStyle } from "./IconButton.style";

const IconButton = (props) => {
  const {
    text,
    iconAlt,
    onPress,
    iconStyle,
    buttonStyle,
    imageSource,
    textStyle,
    textDisable = false,
    textContainerStyle,
    hoverColor = "rgba(255, 255, 255, 0.08)",
  } = props;

  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const onMouseEnter = () => {
    setBackgroundColor(hoverColor);
  };
  const onMouseLeave = () => {
    setBackgroundColor("transparent");
  };

  return (
    <div className="icon-button">
      <div>
        <button
          type="button"
          onClick={onPress}
          className="button-style"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={buttonStyle || _buttonStyle(backgroundColor)}
        >
          <img
            alt={iconAlt}
            src={imageSource}
            style={iconStyle || styles.iconStyle}
          />
        </button>
      </div>
      {!textDisable && (
        <div style={textContainerStyle || styles.textContainerStyle}>
          <span style={textStyle || styles.textStyle}>{text}</span>
        </div>
      )}
    </div>
  );
};

export default IconButton;
