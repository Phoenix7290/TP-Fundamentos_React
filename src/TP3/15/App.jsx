import Product from './Components/Product';

export default function App() {
    return (
        <div>
            <Product name="Pastel" price={120} description="Aqui tem uma descrição" />
            <Product name="Cadeira" price={120} />
            <Product name="Computador" price={120} description="Aqui tem uma descrição 2.0" />
        </div>
    )
}