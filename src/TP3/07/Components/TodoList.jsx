import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import Styles from "./styles.module.css";

export default function TodoList({ items }) {
  
  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  return (
    <div className={Styles.containerList}>
      <ul>
        {items.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  )

}
