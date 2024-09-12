import List from './components/List';

const App = () => {
  const numbers = []; 

  return (
    <div>
      <h1>Lista de Números</h1>
      <List numbers={numbers} />
    </div>
  );
};

export default App;
