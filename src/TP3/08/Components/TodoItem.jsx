import PropTypes from "prop-types";
import { useState } from "react";
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

const TodoList = ({ items }) => {
  const [completedItems, setCompletedItems] = useState({});

  const handleComplete = (index) => {
    setCompletedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          isCompleted={!!completedItems[index]} 
          onComplete={() => handleComplete(index)} 
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
