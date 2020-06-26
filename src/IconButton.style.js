export const _buttonStyle = (backgroundColor) => ({
  zIndex: "2",
  width: "60px",
  height: "60px",
  border: "none",
  minWidth: "0",
  display: "flex",
  padding: "0 8px",
  cursor: "pointer",
  borderRadius: "64px",
  alignItems: "center",
  justifyContent: "center",
  background: backgroundColor,
});
export default {
  buttonStyle: {
    zIndex: "2",
    width: "60px",
    height: "60px",
    border: "none",
    minWidth: "0",
    display: "flex",
    padding: "0 8px",
    cursor: "pointer",
    background: "none",
    borderRadius: "64px",
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    width: 32,
    height: 32,
    background: "none",
  },
  textContainerStyle: {
    marginLeft: "8px",
    borderRadius: "16px",
    padding: "5px 12px 5px 12px",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  textStyle: {
    color: "#fdfdfd",
  },
};
