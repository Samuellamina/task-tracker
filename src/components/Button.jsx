import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  const onClickt = (e) => {
    console.log(e);
  };

  return (
    <div>
      <button
        onClick={onClickt}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
