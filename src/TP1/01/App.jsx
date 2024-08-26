const calcularPrecoTotal = ({ precoProduto, quantidadeProduto }) => {
  const precoTotal = precoProduto * quantidadeProduto;
  console.log(precoTotal);
  return (
    <main>
      <h1>{precoTotal}</h1>
      <p>O preço do produto é {precoProduto} R$ </p>
      <p>A quantidade do é {quantidadeProduto} produtos.</p>
    </main>
  );
};

export default calcularPrecoTotal;
