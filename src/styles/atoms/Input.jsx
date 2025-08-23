export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  ...props
}) => {
  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: `2px solid ${error ? "#ff4444" : "#e1e5e9"}`,
    borderRadius: "4px",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const focusStyle = {
    borderColor: error ? "#ff4444" : "#2f6dff",
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
        onBlur={(e) =>
          (e.target.style.borderColor = error ? "#ff4444" : "#e1e5e9")
        }
        {...props}
      />
      {error && (
        <div style={{ color: "#ff4444", fontSize: "14px", marginTop: "4px" }}>
          {error}
        </div>
      )}
    </div>
  );
};
