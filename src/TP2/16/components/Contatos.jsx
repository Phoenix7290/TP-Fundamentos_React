import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EmailIcon from "../Assets/png/email.png";
import LinkedInIcon from "../Assets/svg/linkedin.svg";
import GitHubIcon from "../Assets/svg/github.svg";
import "./styles.css";

export default function Contato() {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Dados do formulário:", values);
    alert("Mensagem enviada com sucesso!");
    resetForm();
  };

  const validationSchema = Yup.object({
    nome: Yup.string()
      .min(2, "Nome muito curto")
      .max(50, "Nome muito longo")
      .required("Nome é obrigatório"),
    email: Yup.string()
      .email("Email inválido")
      .required("Email é obrigatório"),
    mensagem: Yup.string()
      .min(10, "Mensagem muito curta")
      .required("Mensagem é obrigatória"),
  });

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
          <a
            href="https://www.linkedin.com/in/marcosryan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              title="LinkedIn Profile"
            />
          </a>
          <p>LinkedIn</p>
        </div>
        <div className="contato-item">
          <a
            href="https://github.com/Phoenix7290"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" title="GitHub Profile" />
          </a>
          <p>GitHub</p>
        </div>
      </div>

      <div className="contato-formulario">
        <h2>Envie uma mensagem</h2>
        <Formik
          initialValues={{ nome: "", email: "", mensagem: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <Field
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Seu nome"
                />
                <ErrorMessage
                  name="nome"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Seu email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem:</label>
                <Field
                  as="textarea"
                  name="mensagem"
                  id="mensagem"
                  placeholder="Sua mensagem"
                />
                <ErrorMessage
                  name="mensagem"
                  component="div"
                  className="error"
                />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <hr id="last-hr" />
    </footer>
  );
}
