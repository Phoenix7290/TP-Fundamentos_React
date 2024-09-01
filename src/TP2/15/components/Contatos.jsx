import EmailIcon from "../Assets/png/email.png";
import LinkedInIcon from "../Assets/svg/linkedin.svg";
import GitHubIcon from "../Assets/svg/github.svg";
import "./styles.css";

export default function Contato() {
    return (
        <footer className="container-contato">
            <h1>Contato</h1>
            <div className="contato-opcoes">
                <div className="contato-item">
                    <a href="mailto:ryansantos_2018@outlook.com">
                        <img src={EmailIcon} alt="Email" title="Enviar Email" />
                    </a>
                    <p>ryansantos_2018@outlook.com</p>
                </div>
                <div className="contato-item">
                    <a href="https://www.linkedin.com/in/marcosryan" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInIcon} alt="LinkedIn" title="LinkedIn Profile" />
                    </a>
                    <p>LinkedIn</p>
                </div>
                <div className="contato-item">
                    <a href="https://github.com/Phoenix7290" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubIcon} alt="GitHub" title="GitHub Profile" />
                    </a>
                    <p>GitHub</p>
                </div>
            </div>
            <hr id="last-hr"/>
        </footer>
    );
}
