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
        padding-top: 12rem;
        background-color: #57233a;
        text-align: center;
        font-family: 'Miriam Libre', sans-serif;
        @media (min-width: 1200px) {
            padding-top: 12rem;
        }
    }
    .jumbotron {
        padding: 0 0 0 0;
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
        padding: 5rem;
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

    @keyframes fadeInUp {
        from {
            transform: translate3d(0,40px,0)
        }
    
        to {
            transform: translate3d(0,0,0);
            opacity: 1
        }
    }
    
    @-webkit-keyframes fadeInUp {
        from {
            transform: translate3d(0,40px,0)
        }
    
        to {
            transform: translate3d(0,0,0);
            opacity: 1
        }
    }
    
    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
        -webkit-animation-duration: 1s;
        -webkit-animation-fill-mode: both
    }
    
    .animatedFadeInUp {
        opacity: 0
    }
    
    .fadeInUp {
        opacity: 0;
        animation-name: fadeInUp;
        -webkit-animation-name: fadeInUp;
    }
`

export default GlobalStyle