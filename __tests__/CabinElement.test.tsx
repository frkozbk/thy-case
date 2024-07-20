import { render, screen } from "@testing-library/react"
import { CabinElement } from "../components/PlaneSeatLayout/CabinElement"
import { CabinElements } from "@/constants/CabinElements"
import { ICabinElement } from "@/types/SeatMapData.types"

describe("CabinElement", () => {})
  test("renders a meal icon when type is MEAL", () => {
    const cabinElement: ICabinElement = {
      rowNumber: "0",
      type: "MEAL",
      elementString: null,
      seatLocationType: "TOILET",
      wcFlag: false,
      exitCorridor: false,
      wcSeatFlag: true,
    }

    render(<CabinElement cabinElement={cabinElement} />)

    const mealIcon = screen.getByTestId("meal-icon")

    expect(mealIcon).toBeInTheDocument()
  })

  it("renders a toilet icon when type is TOILET", () => {

    const cabinElement: ICabinElement = {
      rowNumber: "0",
      type: CabinElements.TOILET,
      elementString: null,
      seatLocationType: "TOILET",
      wcFlag: false,
      exitCorridor: false,
      wcSeatFlag: true,
    }

    render(<CabinElement cabinElement={cabinElement} />)

    const toiletIcon = screen.getByTestId("toilet-icon")

    expect(toiletIcon).toBeInTheDocument()
  })

  it("renders a door element when type is DOOR", () => {

    const cabinElement: ICabinElement = {
      rowNumber: "0",
      type: CabinElements.DOOR,
      elementString: null,
      seatLocationType:  CabinElements.DOOR,
      wcFlag: false,
      exitCorridor: false,
      wcSeatFlag: true,
    }

    render(<CabinElement cabinElement={cabinElement} />)

    const doorElement = screen.getByText("DOOR")

    expect(doorElement).toBeInTheDocument()
  })

  it("renders a seat component when type is SEAT", () => {
    const cabinElement: ICabinElement = {
      rowNumber: "0",
      type: CabinElements.SEAT,
      elementString: null,
      seatLocationType:  CabinElements.SEAT,
      wcFlag: false,
      exitCorridor: false,
      wcSeatFlag: true,
    }
    render(<CabinElement cabinElement={cabinElement} />)

    const seatComponent = screen.getByTestId("seat-icon")

    expect(seatComponent).toBeInTheDocument()
  })
