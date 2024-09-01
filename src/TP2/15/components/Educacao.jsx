import Infnet from "../Assets/jpeg/infnet.jpeg";
import "./styles.css";

export default function Educacao() {
    return (
        <section className="container-educacao">
            <h1>Formação Acadêmica</h1>
            <div>
                <h2>Ensino Superior</h2>
                <img src={Infnet} alt="Infnet" title="Infnet" />
                <p id="educacao-date">2024-2027</p>
            </div>
            <hr />
        </section>
    );
}