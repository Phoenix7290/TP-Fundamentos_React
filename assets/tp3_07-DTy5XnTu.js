import{r as m,j as t,c as l,R as d}from"./client-C9r4PM53.js";import{P as r}from"./index-B5sg49pb.js";const p="_containerList_1otjn_1",u="_itemList_1otjn_17",j="_itemButton_1otjn_37",n={containerList:p,itemList:u,itemButton:j},i=({task:e})=>{const[s,o]=m.useState(!1),a=()=>{o(!s)};return t.jsx(t.Fragment,{children:t.jsxs("li",{className:n.itemList,style:{color:s?"green":"black"},children:[e,t.jsx("button",{onClick:a,children:s?"Desmarcar":"Concluir"})]})})};i.propTypes={task:r.string.isRequired};function c({items:e}){return c.propTypes={items:r.array.isRequired},t.jsx("div",{className:n.containerList,children:t.jsx("ul",{children:e.map((s,o)=>t.jsx(i,{task:s},o))})})}function x(){const e=["Fazer TP","Jogar","Procurar jogo da Nintendo","Procurar meios alternativos de entretenimento","Fazer PB"];return t.jsx(c,{items:e})}l.createRoot(document.getElementById("root")).render(t.jsx(d.StrictMode,{children:t.jsx(x,{})}));