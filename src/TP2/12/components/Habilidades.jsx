import HTML from "../Assets/svg/html.svg";
import CSS from "../Assets/svg/css.svg";
import Javascript from "../Assets/svg/javascript.svg";
import React from "../Assets/svg/react.svg";
import Node from "../Assets/svg/node.svg";
import Typescript from "../Assets/svg/typescript.svg";
import C from "../Assets/svg/c.svg";
import Python from "../Assets/svg/python.svg";
import Java from "../Assets/svg/java.svg";
import Git from "../Assets/svg/git.svg";
import "./styles.css";

export default function Habilidades() {
  return (
    <section className="container-habilidades">
      <h1>Habilidades</h1>
      <div>
        <img src={HTML} alt="HTML" />
        <img src={CSS} alt="CSS" />
        <img src={Javascript} alt="JavaScript" />
        <img src={React} alt="React" />
        <img src={Node} alt="Node" />
        <img src={Typescript} alt="TypeScript" />
        <img src={C} alt="C" />
        <img src={Python} alt="Python" />
        <img src={Java} alt="Java" id="java" />
        <img src={Git} alt="Git" id="git" />
      </div>
    </section>
  );
}
