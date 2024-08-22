import './styles.css';

export default function Produtos() {
    return (
        <div>
            <div className="container-images">
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Placeholder"
                />
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Placeholder"
                />
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Placeholder"
                />
            </div>
            <div className='container-text'>
                <div>
                    <h1>Nome do Produto</h1>
                    <p>Descrição do Produto</p>
                    <p>R$ 100,00</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste dolor natus obcaecati placeat velit aut voluptate esse suscipit ut ipsa! Unde a ipsa, consectetur minima quas officia tempore laudantium at?</p>
                </div>
                <img src="https://via.placeholder.com/150" alt="Placeholder" className='img-text'/>
            </div>
        </div>
    )
}