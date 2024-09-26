import PropTypes from "prop-types";
import Styles from "./styles.module.css";

const TodoItem = ({ item, isCompleted, onDelete, onComplete }) => {

  const handleComplete = () => {
    onComplete(item);
  };

  const handleDeleteItem = () => {
    onDelete(item);
  };

  return (
    <li className={Styles.itemList} style={{ color: isCompleted ? "green" : "black"}}>
      {item}
      <button onClick={handleComplete}>
        {isCompleted ? "Desmarcar" : "Concluir"}
      </button>
      <button onClick={handleDeleteItem}>
        Excluir
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default TodoItem;
