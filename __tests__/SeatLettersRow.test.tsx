import { render, screen } from "@testing-library/react"
import { SeatLettersRow } from "../components/PlaneSeatLayout/SeatLettersRow"

describe("SeatLettersRow", () => {
  const mockSeatLetters = ["A", "B", "C"]

  it("renders the component with correct seat letters", () => {
    render(<SeatLettersRow seatLetters={mockSeatLetters} />)

    const seatLetterElements = screen.getAllByText(/[A-Z]/i)

    expect(seatLetterElements).toHaveLength(mockSeatLetters.length)
    expect(seatLetterElements[0]).toHaveTextContent("A")
    expect(seatLetterElements[1]).toHaveTextContent("B")
    expect(seatLetterElements[2]).toHaveTextContent("C")
  })

  it("renders the correct number of seat letter elements", () => {
    render(<SeatLettersRow seatLetters={mockSeatLetters} />)

    const seatLetterElements = screen.getAllByTestId("seat-letter")

    expect(seatLetterElements).toHaveLength(mockSeatLetters.length )
  })
})
