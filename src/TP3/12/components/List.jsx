import PropTypes from 'prop-types';

export default function List({ numbers }) {
  return (
    <div>
      {numbers.length === 0 ? (
        <p>A lista está vazia</p>
      ) : (
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

List.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};
