import Greeting from "./Components/Greeting"

export default function App() {
    return (
        <div>
            <Greeting name="Rayslan" age={22} />
            <Greeting name="Lucas" age={30}/>
            <Greeting name="José" age={24}/>
        </div>
    )
}