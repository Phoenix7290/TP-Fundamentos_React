import TodoList from "./Components/TodoList";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { text: 'Jogar', isCompleted: false },
    { text: 'Estudar React', isCompleted: false },
    { text: 'Fazer exercícios', isCompleted: false }
  ]);

  const addItem = (task) => {
    setItems([...items, { text: task, isCompleted: false }]);
  };

  const deleteTask = (task) => { 
    setItems(items.filter((item) => item.text !== task));
  };

  const toggleComplete = (task) => {
    setItems(items.map((item) => 
      item.text === task ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  return (
    <TodoList 
      items={items} 
      addItem={addItem} 
      deleteTask={deleteTask}
      toggleComplete={toggleComplete}
    />
  );
}
