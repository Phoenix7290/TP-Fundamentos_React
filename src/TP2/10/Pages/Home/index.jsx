import Logo from '../../Assets/logo.jpeg';
import './styles.css';

export default function Home() {
    return (
        <header id='home'>
            <img src={Logo} alt="Placeholder" id='logo' />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#descricao">Quem Somos</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}