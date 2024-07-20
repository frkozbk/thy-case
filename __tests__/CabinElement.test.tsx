import { render, screen } from "@testing-library/react"
import { CabinElement } from "../components/PlaneSeatLayout/CabinElement"
import { CabinElements } from "@/constants/CabinElements"
import { ICabinElement } from "@/types/SeatMapData.types"

describe("CabinElement", () => {
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

  it("renders a standart-seat icon when the seat is reservered", () => {
    const cabinElement: ICabinElement = {
      rowNumber: "0",
      type: CabinElements.SEAT,
      elementString: null,
      seatLocationType:  CabinElements.SEAT,
      wcFlag: false,
      exitCorridor: false,
      wcSeatFlag: true,
      planeSeat: {
        seatNumber: "02C",
        nonSmoking: false,
        smoking: false,
        exit: false,
        basinet: false,
        aisle: true,
        window: false,
        center: false,
        notForMedical: false,
        notForYoung: false,
        notForInfant: true,
        notForChild: false,
        notForPetc: false,
        forTransit: false,
        largeSpace: false,
        chargableSeat: false,
        leastPreferable: false,
        handicap: false,
        selectable: false,
        available: false,
        standard: true,
        reserved: false,
        seatType: "CORRIDOR",
        rightSideExtraSeatAvailable: false,
        leftSideExtraSeatAvailable: false,
        leftSideExtraSeatNumber: null,
        rightSideExtraSeatNumber: null,
        planeSeatAmenity: null,
        planeSeatAmenities: [
          {
            description: "NO FARE",
            currency: null,
            code: "Non-Chargable Seat",
            amount: null,
            mileAmount: null,
            mileCurrency: null,
            passengerRph: "1",
            premiumCode: "1",
            feeCode: null,
            canSelectSeat: true,
            mandatoryInd: null,
            beforeDiscountAmount: null,
            beforeDiscountMileAmount: null,
          },
        ],
        mandatoryInd: null,
        planeSection: null,
        premiumCode: null,
        occupied: false,
      },
    }
    render(<CabinElement cabinElement={cabinElement} />)

    const standardSeatIcon = screen.getByTestId("icon-standart-seat");

    expect(standardSeatIcon).toBeInTheDocument();

  })
  it("renders a full-seat icon when the seat is reservered", () => {
    const cabinElement: ICabinElement = {
      rowNumber: "0",
      type: CabinElements.SEAT,
      elementString: null,
      seatLocationType:  CabinElements.SEAT,
      wcFlag: false,
      exitCorridor: false,
      wcSeatFlag: true,
      planeSeat: {
        seatNumber: "02C",
        nonSmoking: false,
        smoking: false,
        exit: false,
        basinet: false,
        aisle: true,
        window: false,
        center: false,
        notForMedical: false,
        notForYoung: false,
        notForInfant: true,
        notForChild: false,
        notForPetc: false,
        forTransit: false,
        largeSpace: false,
        chargableSeat: false,
        leastPreferable: false,
        handicap: false,
        selectable: false,
        available: false,
        standard: false,
        reserved: true,
        seatType: "CORRIDOR",
        rightSideExtraSeatAvailable: false,
        leftSideExtraSeatAvailable: false,
        leftSideExtraSeatNumber: null,
        rightSideExtraSeatNumber: null,
        planeSeatAmenity: null,
        planeSeatAmenities: [
          {
            description: "NO FARE",
            currency: null,
            code: "Non-Chargable Seat",
            amount: null,
            mileAmount: null,
            mileCurrency: null,
            passengerRph: "1",
            premiumCode: "1",
            feeCode: null,
            canSelectSeat: true,
            mandatoryInd: null,
            beforeDiscountAmount: null,
            beforeDiscountMileAmount: null,
          },
        ],
        mandatoryInd: null,
        planeSection: null,
        premiumCode: null,
        occupied: false,
      },
    }
    render(<CabinElement cabinElement={cabinElement} />)

    const standardSeatIcon = screen.getByTestId("icon-full-seat");

    expect(standardSeatIcon).toBeInTheDocument();

  })
})

