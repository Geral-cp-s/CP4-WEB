import styled from "styled-components";

export const Rodape = styled.footer `

    /* APENAS TESTE PARA FUNCIONAMENTO, MUDAR ASSIM QUE POSSIVEL 
    width: 100%;
    min-height: 5vh;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow:1;
    
    p{
        
        color: blue;
    }*/

    width: 100%;
    min-height: 5vh;
    padding: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    

    p{
        color: #fff;
        text-align: center;
        font-size: 12px;
    }


`
export const NavMenu = styled.nav`

    width: 100%;
    min-height: 1vh;
    padding: 10px;
    background-color: Black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;


    a{
        text-decoration: none;
        color: white;
        font-size: 1.3em;
    }

`
export const MainGeral = styled.main`
    flex-grow: 1;
    width: 100%;
    padding: 10px;

    h1{
        text-align: center;
        color: black;
    }

`
