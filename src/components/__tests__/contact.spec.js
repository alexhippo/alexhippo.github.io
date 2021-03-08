import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from 'gatsby'

import Contact from "../contact"

describe("Contact", () => {
    beforeEach(() => {
        useStaticQuery
            .mockImplementation(() => ({
                "site": {
                    "siteMetadata": {
                        "title": "Test title"
                    }
                },
            }))
    })

    it("displays Contact component", () => {
        const content = {
            html: "<p>This is the Contact component</p>",
            frontmatter: {
                title: "contact",
            },
        }

        const { getByRole, getByText } = render(<Contact content={content} />)
        expect(getByRole("heading")).toHaveTextContent("contact");
        expect(getByText("This is the Contact component")).toBeInTheDocument();
    })
})