import{j as o,c as a,R as i}from"./client-C9r4PM53.js";function c(r){return r.reduce((e,s)=>{const{categoria:n}=s;return e[n]||(e[n]=[]),e[n].push(s),e},{})}const d=[{nome:"Laptop",categoria:"Eletrônicos"},{nome:"Camisa",categoria:"Roupas"},{nome:"Smartphone",categoria:"Eletrônicos"},{nome:"Calça",categoria:"Roupas"},{nome:"Fone de Ouvido",categoria:"Eletrônicos"}],p=()=>{const r=c(d);return console.log(r),o.jsxs("main",{children:[o.jsx("h1",{children:"Produtos Agrupados por categoria:"}),Object.keys(r).map(t=>o.jsxs("div",{children:[o.jsx("h2",{children:t}),o.jsx("ul",{children:r[t].map(e=>o.jsx("li",{children:e.nome},e.nome))})]},t))]})};a.createRoot(document.getElementById("root")).render(o.jsx(i.StrictMode,{children:o.jsx(p,{})}));