import { MainGeral } from "../styles/styled"
import FotoAugusto from "../img/augusto.jpg"
import FotoGabriel from "../img/gabriel.jpg"
import FotoGuilherme from "../img/guilherme.jpg"
import FotoGustavo from "../img/gustavo.jpg"


const Sobre = () =>{
    return(
        <MainGeral>
        <h1>Sobre</h1>
        <section className="quemsomos">

            <div id="texto">
            <h2>Quem somos?</h2>

            <p>
            No início de 2024, começamos o curso de Engenharia de Software na FIAP com grande entusiasmo pelo   desenvolvimento web. Desde o início, a experiência tem sido transformadora. Participamos de   hackathons, workshops e desafios práticos, mergulhando em novas tecnologias e discutindo tendências   emergentes. Cada projeto e atividade nos proporcionou oportunidades valiosas para aplicar o que   aprendemos e explorar nossa criatividade. Nossa jornada até agora tem sido marcada pela colaboração   intensa e pela busca constante de inovação. Estamos motivados por um objetivo comum: fazer a diferença    na indústria de tecnologia e enfrentar os desafios do futuro com determinação e criatividade. A cada   passo, sentimos que estamos cada vez mais preparados para transformar o cenário digital e deixar nossa    marca no mundo da engenharia de software. Se quiser saber mais sobre nós ou compartilhar ideias, segue     nossos links do <strong>GITHUB</strong>.
            </p>
            </div> 

            <div className="git">
            <a className="git git1" href="https://github.com/gutomend"><img src={ FotoAugusto } alt="github Augusto"/></a>
            <a className="git git2" href="https://github.com/gvqsilva"><img src= { FotoGabriel }alt="github Gabriel"/></a>
            <a className="git git3" href="https://github.com/guilhermearaujodec"><img src={ FotoGuilherme } alt="github Guilherme"/></a>
            <a className="git git4" href="https://github.com/Gusta346"><img src={ FotoGustavo } alt="github Gustavo"/></a>
            </div>
        </section>
        </MainGeral>
    )
}

export default Sobre