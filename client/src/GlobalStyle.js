import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    html,body{
        height: 100%;
        width: 100%;
    }

    #root {
        height: 100%;
        --header-color: rgb(32,47,78);
        --card-color: #d2dbe0;
        --spotify-green: rgb(30,215,96)
    }


    h1, h2, h3, h4, h5, h6, a {
        font-family: 'Roboto', sans-serif;
    }


    a {
        text-decoration: none;
        color: black
    }

    button {
        border: 2px solid var(--header-color);
        background-color: var(--header-color);
        padding: 0  20px;
        min-height: 50px;
        border-radius:25px;
        color: white;
        margin: 10px 0;
        cursor:pointer;
        :hover{
            background-color: white;
            color: var(--header-color)
        }
    }

    /* Works on Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
    width: 7px;
    }

    *::-webkit-scrollbar-track {
    background: none ;
    }

    *::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 55px;
    }
`;

export default GlobalStyle;
