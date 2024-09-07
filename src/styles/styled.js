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

    a {
        text-decoration: none;
        color: var(--color-light);
        font-weight: 900;
        transition: var(--transition);
    }


    .card-title {
        font-size: 5vmin;
        text-align: center;
        margin: 4rem 0 2rem;
        color: var(--color-blue);
    }

    .card-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
    }

    .card-item {
        width: 28%;
        margin: 3rem 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        box-shadow: 1px 1px 30px #ccc;
        border-radius: 5px;
        transition: var(--transition);
    }

    .card-item:hover {
        transform: scale(1.1);
    }

    .card-item img {
        width: 90%;
        border-radius: 5px;
    }

    .card-item h3{
        margin: 2rem 0;
        font-weight: 800;
    }

    .card-item p {
        margin: 0 0 3rem;
        width: 80%;
    }

        .btn {
        background-color: var(--color-blue);
        border: 2px solid var(--color-blue);
        padding: 8px 3.5rem;
        border-radius: 5px;
        color: var(--color-light);
        transition: var(--transition);
    }

    .btn:hover {
        background-color: transparent;
        color: var(--color-blue)
    }

    // Estilização página Sobre

    .quemsomos{
        margin: 2.7vh;
    }

    .quemsomos img{
        width: 100px;
        border-radius: 5px;
        margin: 2%;
        box-shadow: 1px 1px 30px #ccc;
    }

    .quemsomos {
        display: grid;
        grid-template-rows: 3fr 2fr;
        grid-template-areas: 
        "texto"
        "git";
        justify-content: center;
        padding: 10vh;
    }

    .quemsomos h2 {
        font-weight:10px;
    }

    .quemsomos p {
        margin-top: 30px;
        text-align: justify;
    }

    #texto {
        grid-area: texto;
    }


    .git {
        margin: 15px;
        grid-area: git;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas: "git1 git2 git3 git4";
    }

    .git1 {
        grid-area: git1;
        display: flex;
        justify-content: center;
    }
    .git2 {
        grid-area: git2;
        display: flex;
        justify-content: center;
    }
    .git3 {
        grid-area: git3;
        display: flex;
        justify-content: center;
    }
    .git4 {
        grid-area: git4;
        display: flex;
        justify-content: center;
    }

`