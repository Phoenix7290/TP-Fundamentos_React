import TodoItem from "./TodoItem";

import PropTypes from "prop-types";

export default function TodoList({ items }) {
  
  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  return (
    <ul>
      {items.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
}
