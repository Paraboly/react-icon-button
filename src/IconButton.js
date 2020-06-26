import React from "react";
/**
 * ? Local Imports
 */
import "./IconButton.scss";
import styles from "./IconButton.style";

const IconButton = (props) => {
  const {
    text,
    iconAlt,
    onPress,
    iconStyle,
    buttonStyle,
    imageSource,
    iconTextStyle,
    iconTextContainerStyle,
  } = props;
  return (
    <div className="icon-button">
      <div>
        <button
          type="button"
          style={buttonStyle || styles.buttonStyle}
          onClick={onPress}
        >
          <img
            alt={iconAlt}
            src={imageSource}
            style={iconStyle || styles.iconStyle}
          />
        </button>
      </div>
      <div style={iconTextContainerStyle || styles.iconTextContainerStyle}>
        <span style={iconTextStyle || styles.iconTextStyle}>{text}</span>
      </div>
    </div>
  );
};

export default IconButton;
