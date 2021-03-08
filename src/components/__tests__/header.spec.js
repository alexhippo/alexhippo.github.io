import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("displays alexhipolito title", () => {
    const { getByText } = render(<Header />)
    expect(getByText("alexhipolito")).toBeInTheDocument();
  })

})