import TodoList from "./Components/TodoList";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(['Jogar', 'Estudar React', 'Fazer exercícios']);

  const addItem = (task) => {
    setItems([...items, task]);
  };

  const deleteTask = (task) => { 
    setItems(items.filter((item) => item !== task));
  }

  return <TodoList items={items} addItem={addItem} deleteTask={deleteTask} />;
}
