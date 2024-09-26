import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import Styles from "./styles.module.css";
import { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([
    { text: "Fazer TP", isCompleted: false },
    { text: "Jogar", isCompleted: false },
    { text: "Procurar jogo da Nintendo", isCompleted: false },
    { text: "Procurar meios alternativos de entretenimento", isCompleted: false },
    { text: "Fazer PB", isCompleted: false },
  ]);
  const [createItem, setCreateitem] = useState("");

  const addItem = () => {
    if (createItem) {
      setItems([...items, { text: createItem, isCompleted: false }]);
      setCreateitem("");
    }
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isCompleted = !newItems[index].isCompleted;
    setItems(newItems);
  };

  return (
    <div className={Styles.containerList}>
      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item.text}
            isCompleted={item.isCompleted}
            onComplete={() => toggleComplete(index)}
          />
        ))}
      </ul>
      <div className={Styles.containerAdd}>
        <input
          type="text"
          value={createItem}
          onChange={(e) => setCreateitem(e.target.value)}
          placeholder="Nova Tarefa"
        />
        <button onClick={addItem}>Adicionar</button>
      </div>
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
};
