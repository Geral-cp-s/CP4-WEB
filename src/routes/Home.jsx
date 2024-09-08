import { MainGeral } from "../styles/styled"

const Home = () =>{
    return(
        <MainGeral>
            <div className="home-container">
                <div className="video-container">
                    <video className="home-video" autoPlay muted loop>
                        <source src="./src/video/video.mp4" type="video/mp4" />
                    </video>
                </div>

                <h1>Bem-vindo à EsporteElite</h1>
                <p>Estamos entusiasmados em receber você em nossa loja online, onde o esporte é mais do que uma paixão, é um estilo de vida!</p><br/>
                <p>Estamos felizes em ter você aqui! Na nossa loja online, oferecemos tudo o que você precisa para seus treinos e competições, com produtos de alta qualidade das melhores marcas. Nosso objetivo é tornar sua experiência de compra fácil e agradável. Agradecemos sua visita e esperamos que encontre exatamente o que precisa para alcançar seus objetivos esportivos.</p>
            </div>
        </MainGeral>
    )
}

export default Home