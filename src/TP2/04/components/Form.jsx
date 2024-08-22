import "./styles.css";

export default function Form() {
    return (
        <form action="get">
            <h1>Cadastro de Produtos</h1>
            <label htmlFor="Nome">Nome do Produto</label>
            <input type="text" id="Nome" name="Nome" placeholder="Informe o nome do produto"/>
            <div>
                <label htmlFor="preco">Preço de Venda</label>
                <input type="text" id="preco" name="preco" placeholder="Informe o nome do produto"/>
                <label htmlFor="custo">Preço de custo</label>
                <input type="password" id="custo" name="custo" placeholder="Informe o nome do produto"/>
                <label htmlFor="fornecedor">Fornecedor</label>
                <select name="fornecedor" id="fornecedor">
                    <option value="selecione" disabled>Selecione um fornecedor</option>
                    <option value="fornecedor1">Fornecedor 1</option>
                    <option value="fornecedor2">Fornecedor 2</option>
                    <option value="fornecedor3">Fornecedor 3</option>
                </select>
                <label htmlFor="categoria">Categoria</label>
                <select name="categoria" id="categoria">
                    <option value="selecione" disabled>Selecione uma categoria</option>
                    <option value="categoria1">Categoria 1</option>
                    <option value="categoria2">Categoria 2</option>
                    <option value="categoria3">Categoria 3</option>
                </select>
            </div>
            <div>
                <label htmlFor="descricao">Descrição</label>
                <textarea id="descricao" name="descricao" placeholder="Informe o nome do produto"></textarea>
                <input type="submit" value="Salvar" />
            </div>
        </form>
    )
}