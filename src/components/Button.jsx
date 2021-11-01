import PropTypes from "prop-types";

const Button = ({ color, text, onAdd }) => {
  return (
    <div>
      <button
        onClick={onAdd}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
