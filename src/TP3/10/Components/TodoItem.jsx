import PropTypes from "prop-types";
import { useState } from "react";
import Styles from "./styles.module.css";

const TodoItem = ({ item, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDeleteItem = () => {
    onDelete(item);
  }

  return (
    <>
      <li className={Styles.itemList} style={{ color: isCompleted ? "green" : "black"}}>
        {item}
        <button onClick={handleComplete}>
          {isCompleted ? "Desmarcar" : "Concluir"}
        </button>
        <button onClick={handleDeleteItem}>
          Excluir
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
