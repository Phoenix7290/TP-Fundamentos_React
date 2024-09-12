import PropTypes from "prop-types";
import { useState } from "react";
import Styles from "./styles.module.css";

const TodoItem = ({ item }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      <li className={Styles.itemList} style={{ color: isCompleted ? "green" : "black"}}>
        {item}
        <button onClick={handleComplete}>
          {isCompleted ? "Desmarcar" : "Concluir"}
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default TodoItem;
