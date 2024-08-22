import paisagem from '../assets/paisagem.jpg';

function SimpleComponent() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img 
        src={paisagem}
        style={{ width: '100%', maxWidth: '400px' }}
        alt="Placeholder"
      />
      <h1>Lorem Impsu</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo quae fugiat reprehenderit vero nemo maiores esse soluta animi aspernatur, illum unde odio expedita architecto quis quia provident est fugit?</p>
    </div>
  );
}

export default SimpleComponent;
