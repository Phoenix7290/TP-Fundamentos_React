import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import Styles from "./styles.module.css";
import { useState } from "react";

export default function TodoList() {
  const [item, setItem] = useState([
    "Fazer TP",
    "Jogar",
    "Procurar jogo da Nintendo",
    "Procurar meios alternativos de entretenimento",
    "Fazer PB",
  ]);
  const [createItem, setCreateitem] = useState("");

  const addItem = () => {
    setItem([...item, createItem]);
    setCreateitem('');
  }

  return (
    <div className={Styles.containerList}>
      <ul>
        {item.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
      <div className={Styles.containerAdd}>
        <input type="text" value={createItem} onChange={(e) => setCreateitem(e.target.value)} placeholder="Nova Tarefa" />
        <button onClick={addItem}>Adicionar</button>
      </div>
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
};
