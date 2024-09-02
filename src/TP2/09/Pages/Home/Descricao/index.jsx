import Comida1 from "../../../Assets/comida1.jpeg";
import Comida2 from "../../../Assets/comida2.jpeg";
import Comida3 from "../../../Assets/comida3.jpeg";
import Comida4 from "../../../Assets/comida4.jpeg";
import './styles.css';

export default function Descricao() {
    return (
        <div id='descricao'>
            <section className="container-section">
                <img src={Comida1} alt="Placeholder"/>
                <article>
                    <h2>Descrição</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                        purus ut nunc ultricies aliquam. Sed nec turpis auctor, ultricies
                        lectus ac, tincidunt metus. Sed in nisi at nunc tincidunt tincidunt
                        non vel justo. Nullam nec purus ut nunc ultricies aliquam. Sed nec
                        turpis auctor, ultricies lectus ac, tincidunt metus. Sed in nisi at
                        nunc tincidunt tincidunt non vel justo.
                    </p>
                </article>
            </section>
            <section className="container-about">
                <h2>Detalhes</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nostrum sit adipisci velit fugit reprehenderit illum, incidunt ducimus facilis minima ad rerum. Voluptatum sequi, culpa accusamus quisquam iusto aut? Harum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorum totam nisi ea corrupti unde natus blanditiis nobis neque exercitationem tempore, rem ratione ducimus fuga nam doloribus. Saepe, exercitationem nostrum!</p>
                <div>
                    <img src={Comida2} alt="Placeholder" />
                    <img src={Comida3} alt="Placeholder" />
                    <img src={Comida4} alt="Placeholder" />
                </div>
            </section>
        </div>
    )
}