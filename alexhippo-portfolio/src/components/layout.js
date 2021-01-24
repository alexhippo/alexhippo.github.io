import React from "react"
import styled from "styled-components"

import GlobalStyle from "./globalStyle"
import Header from "./header"
import Footer from "./footer"
import PropTypes from "prop-types"

const StyledLayout = styled.div`
    width: 100%;
    max-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    #main-content {
        width: 100%;
        height: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 0rem;
    }
`

const Layout = ({children}) => {
    return (
        <StyledLayout>
            <GlobalStyle />
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
        </StyledLayout>
    )
}

Layout.propTypes = {
    children: PropTypes.any
}

export default Layout