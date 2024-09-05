import Temperature from "./Components/Temperature"

export default function App() {
    return (
        <div>
            <Temperature temperature={30} />
            <Temperature temperature={26} />
            <Temperature temperature={25} />
            <Temperature temperature={10} />
        </div>
    )
}