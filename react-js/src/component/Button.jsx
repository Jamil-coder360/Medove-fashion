import "./Button.css";

const Button = ({ text, type = "dark" }) => {
  return (
    <button className={`btn ${type}`}>
      {text}
    </button>
  );
};

export default Button;
