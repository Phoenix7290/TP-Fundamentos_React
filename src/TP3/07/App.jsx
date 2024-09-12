import TodoList from "./Components/TodoList";

export default function App() {
  const items = [
    "Fazer TP",
    "Jogar",
    "Procurar jogo da Nintendo",
    "Procurar meios alternativos de entretenimento",
    "Fazer PB",
  ];

  return <TodoList items={items} />;
}
