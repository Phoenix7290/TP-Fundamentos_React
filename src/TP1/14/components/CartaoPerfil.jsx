import './CartaoPerfil.css';

const CartaoPerfil = () => {
  return (
    <div className="cartao-perfil">
      <img 
        src="./imagens/Chad.jpeg"
        alt="Ele é Chad"
        className="cartao-perfil__imagem"
      />
      <h1 className="cartao-perfil__titulo">Chad</h1>
      <p className="cartao-perfil__descricao">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Voluptatum architecto delectus magni voluptates velit tenetur 
        neque commodi. Dolorum consequuntur illum quia fuga, 
        possimus odit voluptate deleniti at aut ratione blanditiis!
      </p>
    </div>
  );
};

export default CartaoPerfil;
