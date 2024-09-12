import PropTypes from 'prop-types';

const TodoItem = ({ task }) => {
  return (
    <li>{task}</li>
  )
}
TodoItem.propTypes = {
    task: PropTypes.string.isRequired
};

export default TodoItem;
