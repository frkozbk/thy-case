import { render, screen } from "@testing-library/react"
import { DoorRow } from "../components/PlaneSeatLayout/DoorRow"

describe("DoorRow", () => {
  it("renders the component", () => {
    render(<DoorRow />)

    const doorRowComponent = screen.getByTestId("door-row-component")

    expect(doorRowComponent).toBeInTheDocument()
  })

  it("renders the correct number of emergency exit labels", () => {
    render(<DoorRow />)

    const emergencyExitLabels = screen.getAllByText("EMERGENCY EXIT")

    expect(emergencyExitLabels).toHaveLength(2)
  })

  it("renders the correct number of door elements", () => {
    render(<DoorRow />)

    const doorElements = screen.getAllByTestId("door-icon")

    expect(doorElements).toHaveLength(2)
  })

})
