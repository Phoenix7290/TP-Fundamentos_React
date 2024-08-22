export default function Produtos() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{
                display: "flex",
                flex: "1",
                justifyContent: "space-around",
                alignItems: "center",
                flexFlow: "row wrap",
            }}>
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Placeholder"
                    style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px"
                    }}
                />
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Placeholder"
                    style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px"
                    }}
                />
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="Placeholder"
                    style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px"
                    }}
                />
            </div>
            <div style={{
                display: "flex",
                flex: "1",
                justifyContent: "space-evenly",
                flexFlow: "row",
                margin: "50px"
            }}>
                <div>
                    <h1>Nome do Produto</h1>
                    <p>Descrição do Produto</p>
                    <p>R$ 100,00</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste dolor natus obcaecati placeat velit aut voluptate esse suscipit ut ipsa! Unde a ipsa, consectetur minima quas officia tempore laudantium at?</p>
                </div>
                <img src="https://via.placeholder.com/150" alt="Placeholder" style={{}}/>
            </div>
        </div>
    )
}