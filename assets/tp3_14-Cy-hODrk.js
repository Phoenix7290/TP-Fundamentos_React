import{j as e,c as i,R as t}from"./client-C9r4PM53.js";import{P as s}from"./index-B5sg49pb.js";function r({name:o,age:n}){return e.jsxs("div",{children:[e.jsx("h1",{children:o}),e.jsx("p",{children:n?`Idade ${n}`:"Idade não disponível"})]})}r.propTypes={name:s.string.isRequired,age:s.number};function d(){return e.jsxs("div",{children:[e.jsx(r,{name:"João",age:null}),e.jsx(r,{name:"Gabriel",age:19}),e.jsx(r,{name:"Bruno",age:null})]})}i.createRoot(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(d,{})}));