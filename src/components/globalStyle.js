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
        scroll-behavior: smooth;
    }
    @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
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
        scroll-snap-type: y mandatory;
        scroll-padding: 1rem;
    }
    *,*::before,*::after {
        box-sizing: inherit;
      }
    h1 {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.375rem;
        color: black;
        @media (min-width: 1200px) {
            font-size: 2.625rem;
            line-height: 4rem;
        }
    }
    h2 {
        font-weight: 600;
        font-size: 1.6rem;
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
          font-weight: 700 !important;
        };
        &:focus-visible {
          outline: 3px solid black;
        }
    }
    a.description {
        text-decoration: underline;
    }
    #hero {
        background-color: #57233a;
        font-family: 'Miriam Libre', sans-serif;
        margin-right: auto;
        margin-left: auto;
        padding-top: 5rem;
        @media (min-width: 1024px) {
            padding-top: 10rem;
        }
    }
    #hero img{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        max-width: 100%;
        padding-top: 20px;
        @media(min-width: 1024px) {
            padding-top: 0px;
        }
    }
    #about.rowComponent{
        padding-top: 0rem;
    }
    .jumbotron {
        padding: 0 0 0 0;
    }
    .row{
        margin-left: 0;
        margin-right: 0;
        padding-left: 0;
        padding-right: 0;
        flex-direction: column;
        justify-content: space-between;
        @media(min-width: 1024px) {
            flex-direction: row;
            max-width: 100%;
        }
    }
    .col {
        max-width: 80%;
    }
    #header {
        background-color: #b98d72;
    }
    .headerNavLink {
        color: #000;
    }
    #portfolio {
        background-color: #161B1F;
        color: #fff;
        padding-left: 5rem;
        padding-right: 5rem;
        padding-bottom: 5rem;
    }
    #resume {
        background-color: #fff;
        color: #000;
    }
    .description {
        float: none;
        max-width: 62.5rem;
        margin: 0 auto;
        padding: 0 2.5rem;
    }
    #contact {
        background-color: #D3D3D3;
    }
    .rowComponent {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
    .portfolioCard {
        color: #000;
    }
    svg{
        margin-bottom: -3px;
    }
`

export default GlobalStyle