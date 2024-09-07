import { MainGeral } from "../styles/styled"
import ChuteiraAirZBranca from "../img/ChuteiraAirZBranca.png"
import ChuteiraAirZRosa from "../img/ChuteiraAirZRosa.png"
import ChuteiraAirZVerde from "../img/ChuteiraAirZVerde.png"
import ChuteiraGravity from "../img/ChuteiraGravity.png"
import ChuteiraPenalty from "../img/ChuteiraPenalty.png"
import ChuteiraPro5 from "../img/ChuteiraPro5.png"
import BolaBasquete from "../img/BolaBasquete.png"
import BolaFutebol from "../img/BolaFutebol.png"
import BolaVolei from "../img/BolaVolei.png"
import RaqueteTenis from "../img/RaqueteTenis.png"
import BolaTenis from "../img/BolaTenis.png"
import Raqueteira from "../img/Raqueteira.png"


const Produtos =() =>{
    return(
        <MainGeral>
        <h1>Produtos</h1>

        <div className="card-list">
        {/* <!-- 1º item --> */}
        <div className="card-item">
            <img src={ ChuteiraAirZBranca } alt="imagem 1"/>
            <h3>Chuteira Nike Air Zoom Mercurial Superfly Ix</h3>
            <p>R$479,90 </p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 1º item --> */}

        
        {/* <!-- 2º item --> */}
        <div className="card-item">
            <img src={ ChuteiraAirZRosa } alt="imagem 1"/>
            <h3>Chuteira Nike Air Zoom Mercurial Superfly Ix Elite Fg</h3>
            <p>R$479,90</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 2º item --> */}

        {/* <!-- 3º item --> */}
        <div className="card-item">
            <img src={ ChuteiraAirZVerde } alt="imagem 1"/>
            <h3>Chuteira Adulto Nike Air Zoom Mercurial Vapor 15</h3>
            <p>R$479,90</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 3º item --> */}

        {/* <!-- 4º item --> */}
        <div className="card-item">
            <img src={ ChuteiraGravity } alt="imagem 1"/>
            <h3>Chuteira Original Umbro Futsal Gravity</h3>
            <p>R$299,99</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 4º item --> */}

        {/* <!-- 5º item --> */}
        <div className="card-item">
            <img src={ ChuteiraPenalty } alt="imagem 1"/>
            <h3>Chuteira Futsal Penalty</h3>
            <p>R$254,90</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 5º item --> */}

        {/* <!-- 6º item --> */}
        <div className="card-item">
            <img src={ ChuteiraPro5} alt="imagem 1"/>
            <h3>Chuteira De Futsal Umbro Pro 5 Bump</h3>
            <p>R$503,99</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 6º item --> */}

        {/* <!-- 7º item --> */}
        <div className="card-item">
            <img src={ BolaFutebol } alt="imagem 1"/>
            <h3>Bola Para Futebol De Campo S11 Ecoknit Xxiv</h3>
            <p>R$377,98</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 7º item --> */}

        {/* <!-- 8º item --> */}
        <div className="card-item">
            <img src={ BolaVolei } alt="imagem 1"/>
            <h3>Bola de vôlei Mikasa V200W n° 5</h3>
            <p>R$146,12</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 8º item --> */}

        {/* <!-- 9º item --> */}
        <div className="card-item">
            <img src={ BolaBasquete } alt="imagem 1"/>
            <h3>Bola De Basquete Nba Authentic Indoor/outdoor Size 7 Wilson</h3>
            <p>R$219,60</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 9º item --> */}

        {/* <!-- 10º item --> */}
        <div className="card-item">
            <img src={ RaqueteTenis } alt="imagem 1"/>
            <h3>Raquete de Tênis Wilson Clash 100 V2.0</h3>
            <p>R$1.357,97</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 10º item --> */}

        {/* <!-- 11º item --> */}
        <div className="card-item">
            <img src={ BolaTenis } alt="imagem 1"/>
            <h3>Bola De Tênis Wilson Championship Extra Duty Tubo 3 Bolas</h3>
            <p>R$56,61</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 11º item --> */}

        {/* <!-- 12º item --> */}
        <div className="card-item">
            <img src={ Raqueteira } alt="imagem 1"/>
            <h3>Raqueteira Masculina E Feminina Pomezia Fila Cor Preto/Verde</h3>
            <p>R$349,00</p>
            <a href="" class="btn">Comprar</a>
        </div>
        {/* <!-- fim 12º item --> */}

        </div>
        
        </MainGeral>
    )
}

export default Produtos