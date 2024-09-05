import ProfileCard from "./Components/ProfileCard"

export default function App() {
    return (
        <div>
            <ProfileCard name="João" age={null}/>
            <ProfileCard name="Gabriel" age={19}/>
            <ProfileCard name="Bruno" age={null}/>
        </div>
    )
}