import './styles.css';

export default function Descricao() {
    return (
        <div className='description'>
            <section className="container-section">
                <img src="https://via.placeholder.com/300" alt="Placeholder" />
                <article>
                    <h2 id='descricao'>Descrição</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                        purus ut nunc ultricies aliquam. Sed nec turpis auctor, ultricies
                        lectus ac, tincidunt metus. Sed in nisi at nunc tincidunt tincidunt
                        non vel justo. Nullam nec purus ut nunc ultricies aliquam. Sed nec
                        turpis auctor, ultricies lectus ac, tincidunt metus. Sed in nisi at
                        nunc tincidunt tincidunt non vel justo.
                    </p>
                </article>
            </section>
            <section className="container-about">
                <h2>Detalhes</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nostrum sit adipisci velit fugit reprehenderit illum, incidunt ducimus facilis minima ad rerum. Voluptatum sequi, culpa accusamus quisquam iusto aut? Harum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorum totam nisi ea corrupti unde natus blanditiis nobis neque exercitationem tempore, rem ratione ducimus fuga nam doloribus. Saepe, exercitationem nostrum!</p>
                <div>
                    <img src="https://via.placeholder.com/100" alt="Placeholder" />
                    <img src="https://via.placeholder.com/100" alt="Placeholder" />
                    <img src="https://via.placeholder.com/100" alt="Placeholder" />
                </div>
            </section>
        </div>
    )
}