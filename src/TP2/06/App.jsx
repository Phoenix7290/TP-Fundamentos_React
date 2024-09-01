import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"

export default function App() {
    return (
        <div>
            <Header />
            <div className="container-cards">
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    )
}