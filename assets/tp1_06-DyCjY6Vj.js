import{j as o,c as n,R as s}from"./client-C9r4PM53.js";function a(e,t){return e.filter(r=>r.categoria===t)}const c=[{nome:"Laptop",categoria:"Eletrônicos"},{nome:"Camisa",categoria:"Roupas"},{nome:"Smartphone",categoria:"Eletrônicos"}],i=()=>{const e=a(c,"Eletrônicos");return console.log(e),o.jsxs("main",{children:[o.jsx("h1",{children:'Os produtos com a categoria "Eletrônicos" são:'}),o.jsx("ul",{children:e.map(t=>o.jsx("li",{children:t.nome},t.nome))})]})};n.createRoot(document.getElementById("root")).render(o.jsx(s.StrictMode,{children:o.jsx(i,{})}));