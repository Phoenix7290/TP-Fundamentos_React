import PropTypes from "prop-types";

export default function Greeting({ name , age }) {
  return (
    <div>
      <h1>Olá, {name}! Você tem {age} anos.</h1>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
