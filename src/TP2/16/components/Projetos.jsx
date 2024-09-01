import IAbot from "../Assets/png/ia-bot.png";
import ToDo from "../Assets/png/to-do.png";
import WhatsApp from "../Assets/svg/whatsapp.svg";
import RythmX from "../Assets/jpg/RythmX.jpg";

export default function Projetos() {
  return (
    <section className="container-projetos">
      <h1>Projetos</h1>
      <div>
        <article className="projetos">
          <a href="https://github.com/Phoenix7290/Bot-Discord_IA-INFNET">
            <img src={IAbot} alt="Discord bot AI" title="Discord bot AI" />
          </a>
          <p>
            Bot do Discord usando a API do ChatGPT, capaz de responder
            interativamente e rapidamente.
          </p>
        </article>
        <article className="projetos">
          <img src={ToDo} alt="To do List" id="to-do"/>
          <p>Uma To do list para aplicar o CRUD, permitindo colocar atividades, editá-las e eliminá-las</p>
        </article>
        <article className="projetos">
          <a href="https://github.com/Phoenix7290/WhatsApp-Bot">
            <img
              src={WhatsApp}
              alt="WhatsApp bot. Icon by Icons9"
              title="WhatsApp bot. Icon by Icons9"
            />
          </a>
          <p>
            Bot de WhatsApp para marcar everyone e futuramente apagar mensagens
            em grupos.
          </p>
        </article>
        <article className="projetos">
          <a href="https://github.com/Phoenix7290/RythmX-discord-bot">
            <img
              src={RythmX}
              alt="RythmX, discord bot for music."
              title="RythmX, discord bot for music."
            />
          </a>
          <p>
            Bot de Música realizado a partir do Python com comandos simples para
            escutar músicas e demais.
          </p>
        </article>
      </div>
      <h2>
        Some other minor projects are also avaliable in my{" "}
        <a href="https://github.com/Phoenix7290" alt="My GitHub Account">
          GitHub
        </a>
      </h2>
      <hr />
    </section>
  );
}
