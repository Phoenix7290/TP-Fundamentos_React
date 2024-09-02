import Comida5 from "../../Assets/comida5.jpeg";
import Comida6 from "../../Assets/comida6.jpeg";
import Comida7 from "../../Assets/comida7.jpeg";
import Comida8 from "../../Assets/comida8.jpeg";
import Comida9 from "../../Assets/comida9.jpeg";
import Comida10 from "../../Assets/comida10.jpeg";
import './styles.css';

export default function Produtos() {
    return (
        <div className="container-produtos" id='produtos'>
            <h1>Produtos</h1>
            <div>
                <img src={Comida5} alt="Placeholder" />
                <img src={Comida6} alt="Placeholder" />
                <img src={Comida7} alt="Placeholder" />
                <img src={Comida8} alt="Placeholder" />
                <img src={Comida9} alt="Placeholder" />
                <img src={Comida10} alt="Placeholder" />
            </div>
        </div>
    )
}