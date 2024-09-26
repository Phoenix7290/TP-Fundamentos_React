import PropTypes from "prop-types";
import Styles from "./styles.module.css";

const TodoItem = ({ item, isCompleted, onComplete }) => {
  return (
    <>
      <li
        className={Styles.itemList}
        style={{ color: isCompleted ? "green" : "black" }}
      >
        {item}
        <button onClick={onComplete}>
          {isCompleted ? "Desmarcar" : "Concluir"}
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default TodoItem;
