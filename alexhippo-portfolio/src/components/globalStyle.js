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
        font-weight: 300;
    }
    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
        color: black;
        @media (min-width: 1200px) {
            font-size: 2.625rem;
            line-height: 4rem;
        }
    }
    h2 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.5rem;
        color: black;
        font-family: 'Miriam Libre', sans-serif;
        @media (min-width: 1200px) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }
    h3 {
        font-weight: 500;
        font-size: 1.50rem;
        line-height: 1.5rem;
        color: black;
        font-family: "Asap", Arial, Helvetica, sans-serif;
        @media (min-width: 1200px) {
            font-size: 1.85rem;
            line-height: 3rem;
        }
    }
    h4 {
        font-weight: 300;
        font-size: 1.30rem;
        line-height: 1.5rem;
        color: black;
        font-family: "Asap", Arial, Helvetica, sans-serif;
        @media (min-width: 1200px) {
            font-size: 1.50rem;
            line-height: 1rem;
        }
    }
    h4.companyTitle {
        display: inline-block;
        margin-top: 0;
    }
    span.personalTitle {
        margin-left: 10px;
        color: #7A7A7A;
        font-weight: 700;
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
        font-family: 'Miriam Libre', sans-serif;
    }
    #header {
        background-color: #b98d72;
    }
    #portfolio {
        background-color: #161B1F;
        color: #fff;
        padding: 5rem;
    }
    #resume {
        background-color: #fff;
        color: #000;
    }
    .description {
        width: 100%;
        float: none;
        max-width: 62.5rem;
        margin: 0 auto;
        padding: 0 2.5rem;
    }
    #contact {
        background-color: #D3D3D3;
        text-align: center;
    }
    .rowComponent {
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .portfolioCard {
        color: #000;
    }
    .downloadResume {
        text-align: center;
    }
    a.downloadResume{
        text-decoration: none;
        color: #fff;
    }
`

export default GlobalStyle