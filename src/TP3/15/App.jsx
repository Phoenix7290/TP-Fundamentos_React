import Product from './Components/Product';

export default function App() {
    return (
        <div>
            <Product name="Vitor" price={120} description="Aqui tem uma descrição" />
            <Product name="Arwen" price={120} />
            <Product name="Leonardo" price={120} description="Aqui tem uma descrição 2.0" />
        </div>
    )
}