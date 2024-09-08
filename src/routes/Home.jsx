import { MainGeral } from "../styles/styled"


const Home = () =>{
    return(
        <MainGeral>
            <div className="home-container">
      <div className="video-container">
        <video className="home-video" autoPlay muted loop>
          <source src="./src/video/video.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>

      <h1>Bem-vindo à EsporteElite</h1>
      <p>Estamos entusiasmados em receber você em nossa loja online, onde o esporte é mais do que uma paixão, é um estilo de vida!</p>
      <h2>Alguns dos nossos produtos</h2>
    </div>
        </MainGeral>
    )
}

export default Home