import React from "react"
import renderer from "react-test-renderer"

import Portfolio from "../portfolio"

describe("Portfolio", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Portfolio />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})