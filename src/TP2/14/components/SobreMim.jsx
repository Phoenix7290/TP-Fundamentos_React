import Perfil from "../Assets/jpg/perfil.jpg"
import "./styles.css";

export default function SobreMim() {
    return (
        <div>
            <header>
                <div>
                    <h1>Prazer, Marcos Ryan</h1>
                    <p>Engenheiro de Software, Entusiasta pela Programação</p>
                </div>
                <img src={Perfil} alt="placeholder" />
            </header>
            <section className="sobre-mim">
                <h1>Sobre mim</h1>
                <p>Estudante de Engenharia de Software esforçado no primeiro ano de graduação. Encontrei minha paixão na Programação e na Resolução de problemas reais. Gosto de aprimorar meus conhecimentos, além de ser flexível e adaptável à novos projetos. Atualmente, sou universitário pela INFNET onde estou aprimorando vastamente meus conhecimentos.</p>
            </section>
            <hr />
        </div>
    )
}