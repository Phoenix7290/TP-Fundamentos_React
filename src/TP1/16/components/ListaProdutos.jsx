const produtos = [ 
    {
    nome: "Tênis de Corrida", 
    descricao: "Tênis confortável para corridas diárias.", 
    preco: "R$ 299,90", 
    imagem: "https://via.placeholder.com/150" 
    },
    { 
    nome: "Camisa de Ciclismo", 
    descricao: "Camisa respirável para ciclistas.", 
    preco: "R$ 129,90", 
    imagem: "https://via.placeholder.com/150" 
    }, 
    { 
    nome: "Boné Esportivo", 
    descricao: "Boné ajustável para proteção solar.", 
    preco: "R$ 59,90", 
    imagem: "https://via.placeholder.com/150" 
    }
];

export default function ListaProdutos() {
    return (
        <div>
            <h1>Produtos</h1>
            {produtos.map((produto, index) => (
                <div key={index}>
                    <h2>{produto.nome}</h2>
                    <img src={produto.imagem} alt={produto.nome} />
                    <p>{produto.descricao}</p>
                    <p>{produto.preco}</p>
                </div>
            ))}
        </div>
    );
}
