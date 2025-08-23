import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  height: 37px;
  transition: background-color 0.2s, color 0.15s, border 0.14s, transform 0.13s;

  /* Primary variant (default) */
  background-color: ${(props) =>
    props.variant === "secondary" ? "white" : "#2f6dff"};
  color: ${(props) => (props.variant === "secondary" ? "#2f6dff" : "white")};
  border: ${(props) =>
    props.variant === "secondary" ? "1px solid #4a4a4a" : "none"};

  min-width: ${({ variant }) => (variant === "primary" ? "90px" : "auto")};

  &:hover {
    background-color: ${(props) =>
      props.variant === "secondary" ? "#f0f4ff" : "#1e5aff"};
  }

  &:active {
    background-color: ${(props) =>
      props.variant === "secondary" ? "#e6edff" : "#014fff"};

    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    border: none;
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  variant = "primary",
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton disabled={disabled} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
