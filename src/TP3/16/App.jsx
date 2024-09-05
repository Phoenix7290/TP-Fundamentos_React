import StatusBadge from "./Components/StatusBagde"

export default function App() {
    return (
        <div>
            <h1>Status dos Usuários</h1>
            <StatusBadge status="ativo" />
            <StatusBadge status="inativo" />
            <StatusBadge status="pendente" />
        </div>
    )
}