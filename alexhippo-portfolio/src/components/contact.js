import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFreeCodeCamp, faInstagram } from '@fortawesome/free-brands-svg-icons'

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
        text-align: center;
    }
    .subtitle {
        margin-top: 0;
        text-align: center;
    }
    a {
        text-decoration: underline;
    }
    li {
        padding: 5px 0px;
    }
    svg {
        display: block;
    }
    padding-bottom: 0px;
`

export const Contact = ({ content }) => {
    const { html, frontmatter } = content

    return (
        <StyledSection id="contact" className="rowComponent">
            <h2 className="subtitle">
                {frontmatter.title}
            </h2>
            <div className="description">
                <p dangerouslySetInnerHTML={{ __html: html }} />
                <ul className="fa-ul">
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} listItem />
                        <a href="mailto:alex.hipolito@outlook.com?subject=Enquiry about Alex Hipolito Portfolio Website">
                            Email alex.hipolito
                        </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} listItem /> 
                        <a href="https://www.linkedin.com/in/alexhippo/">
                            LinkedIn /alexhippo
                        </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub} listItem />
                            <a href="https://github.com/alexhippo">
                                Github /alexhippo
                            </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFreeCodeCamp} listItem />
                            <a href="https://www.freecodecamp.org/alexhippo">
                                freeCodeCamp /alexhippo
                            </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInstagram} listItem />
                            <a href="https://www.instagram.com/letsgohippo/">
                                Instagram /letsgohippo
                            </a>
                    </li>
                </ul>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 110 1440 200">
                <path fill="#000000" 
                      fillOpacity="1" 
                      d="M0,160L60,186.7C120,213,240,267,360,261.3C480,256,600,192,720,154.7C840,117,960,107,1080,122.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>            
        </StyledSection>
    ) 
}

Contact.propTypes = {
    content: PropTypes.object,
}

export default Contact