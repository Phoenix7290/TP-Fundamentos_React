import Alexa1 from '../Assets/alexa1.jpeg';
import Alexa2 from '../Assets/alexa2.jpg';
import Alexa3 from '../Assets/alexa3.jpeg';
import Alexa4 from '../Assets/alexa4.jpg';

export default function Produtos() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{
                display: "flex",
                flex: "1",
                justifyContent: "space-around",
                alignItems: "center",
                flexFlow: "row wrap",
            }}>
                <img 
                    src={Alexa1}
                    alt="Placeholder"
                    style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px"
                    }}
                />
                <img 
                    src={Alexa2}
                    alt="Placeholder"
                    style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px"
                    }}
                />
                <img 
                    src={Alexa3}
                    alt="Placeholder"
                    style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px"
                    }}
                />
            </div>
            <div style={{
                display: "flex",
                flex: "1",
                justifyContent: "space-evenly",
                flexFlow: "row",
                margin: "50px"
            }}>
                <div>
                    <h1>Alexa</h1>
                    <p>Assistente da Amazon</p>
                    <p>R$ 400,00</p>
                    <p>Alexa é uma assistente virtual desenvolvido pela Amazon e lançada em novembro de 2014. Ela serve para auxiliar na execução de tarefas do dia a dia, como, por exemplo, definir alarmes, pesquisar na internet e até mesmo controlar a sua casa conectada.</p>
                </div>
                <img src={Alexa4} alt="Placeholder" style={{width: "150px"}}/>
            </div>
        </div>
    )
}