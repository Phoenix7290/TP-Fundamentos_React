import Alexa1 from '../Assets/alexa1.jpeg';
import Alexa2 from '../Assets/alexa2.jpg';
import Alexa3 from '../Assets/alexa3.jpeg';
import Alexa4 from '../Assets/alexa4.jpg';
import './styles.css';

export default function Produtos() {
    return (
        <div>
            <div className="container-images">
                <img 
                    src={Alexa1}
                    alt="Placeholder"
                />
                <img 
                    src={Alexa2}
                    alt="Placeholder"
                />
                <img 
                    src={Alexa3}
                    alt="Placeholder"
                />
            </div>
            <div className='container-text'>
                <div>
                    <h1>Alexa</h1>
                    <p>Assistente da Amazon</p>
                    <p>R$ 400,00</p>
                    <p>Alexa é uma assistente virtual desenvolvido pela Amazon e lançada em novembro de 2014. Ela serve para auxiliar na execução de tarefas do dia a dia, como, por exemplo, definir alarmes, pesquisar na internet e até mesmo controlar a sua casa conectada.</p>
                </div>
                <img src={Alexa4}alt="Placeholder" className='img-text'/>
            </div>
        </div>
    )
}