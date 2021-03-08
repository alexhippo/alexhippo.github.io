import React from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFreeCodeCamp, faStrava } from '@fortawesome/free-brands-svg-icons'

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
`

export const Contact = ({ content }) => {
    const { html, frontmatter } = content

    return (
        <StyledSection id="contact" className="rowComponent">
            <h2 className="subtitle" id="contact_heading">
                {frontmatter.title}
            </h2>
            <div className="description">
                <div dangerouslySetInnerHTML={{ __html: html }} />
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
                        <FontAwesomeIcon icon={faStrava} listItem />
                        <a href="https://www.strava.com/athletes/alexhippo">
                            Strava /alexhippo
                            </a>
                    </li>
                </ul>
            </div>
        </StyledSection>
    )
}

Contact.propTypes = {
    content: PropTypes.object,
}

export default Contact