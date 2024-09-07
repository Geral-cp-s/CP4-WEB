import { Link } from "react-router-dom"
import { NavMenu } from "../styles/styled"

const Nav = () =>{
    return(
        <>
        <NavMenu>
        <Link to={'/'}>Home</Link>
        <Link to={'/produtos'}>Produtos</Link>
        <Link to={'/contato'}>Contato</Link>
        <Link to={'/sobre'}>Sobre</Link>
        </NavMenu>
        </>
    )
}

export default Nav