import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
        color: black;
        font-size: 1.125rem;
        font-family: "Asap", Arial, Helvetica, sans-serif;
        line-height: 1.5rem;
        font-weight: 400;
    }
    h1 {
        font-weight: 300;
        font-size: 2rem;
        line-height: 2.375rem;
        color: black;
        @media (min-width: 1200px) {
            font-size: 2.625rem;
            line-height: 4rem;
        }
    }
    h2 {
        font-weight: 300;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: black;
        @media (min-width: 1200px) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }
    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: 0px;
          color: black;
        };
        &:focus-visible {
          outline: 3px solid black;
        }
    }
    #hero {
        padding-top: 200px;
        padding-bottom: 200px;
        background-color: #57233a;
        text-align: center;
        border-color: 5px solid black;
        position: relative;
    }

    #header {
        background-color: #b98d72;
    }

`

export default GlobalStyle