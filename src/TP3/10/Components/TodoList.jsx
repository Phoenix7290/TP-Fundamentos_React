import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import Styles from "./styles.module.css";
import { useState } from "react";

export default function TodoList( {items, addItem, deleteTask} ) {
  const [createItem, setCreateitem] = useState("");

  const handleAddItem = () => {
    addItem(createItem);
    setCreateitem('');
  }

  return (
    <div className={Styles.containerList}>
      <ul>
        {items.map((item, index) => (
          <TodoItem key={index} item={item} onDelete={deleteTask}/>
        ))}
      </ul>
      <div className={Styles.containerAdd}>
        <input type="text" value={createItem} onChange={(e) => setCreateitem(e.target.value)} placeholder="Nova Tarefa" />
        <button onClick={handleAddItem}>Adicionar</button>
      </div>
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
