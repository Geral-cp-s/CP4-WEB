import { MainGeral } from "../styles/styled"


const Contato = () =>{
    return(
        <MainGeral>
        <h1>Contato</h1>

        <section className="formulario">

        <h2>Entre em contato conosco: </h2>
        
        <form id="contato" onsubmit="return validateForm()">
            <fieldset id="info">
                <legend><strong>Dados Pessoais: </strong></legend><br/>
                <label for="c-nome">Nome:</label>
                <input type="text" name="nome" id="c-nome" required
                placeholder="Digite seu nome"/><br/>
                <label for="c-email">Email:</label>
                <input type="email" name="email" id="c-email" required
                placeholder="Digite seu email"/><br/>
                <label for="telefone">Telefone:</label>
                <input type="tel" id="c-tel" name="telefone" required
                placeholder="Digite o seu telefone"/><br/>
                <label for="c-msg">Mensagem:</label><br/>
                <textarea name="msg" id="c-msg" cols="30" rows="10"></textarea>
                <input type="submit" value="Enviar" id="btn"/>
            </fieldset>
        </form>
        </section>

        </MainGeral>
    )
}

export default Contato