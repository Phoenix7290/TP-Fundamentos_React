import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['Tarefa 1: Lavar Casa', 'Tarefa 2: Fazer TP', 'Tarefa 3: A Arte da Guerra']
    };
  }

  render() {
    return (
      <ul>
        {this.state.tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    );
  }
}

export default TodoList;