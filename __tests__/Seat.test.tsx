import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Seat } from "../components/PlaneSeatLayout/Seat"
import { ICabinElement } from "@/types/SeatMapData.types"
const mockCabinElement: ICabinElement = {
    rowNumber: "1",
    type: "SEAT",
    planeSeat: {
      seatNumber: "01A",
      nonSmoking: false,
      smoking: false,
      exit: false,
      basinet: true,
      aisle: false,
      window: true,
      center: false,
      notForMedical: false,
      notForYoung: false,
      notForInfant: false,
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
      reserved: true,
      seatType: "WINDOW",
      rightSideExtraSeatAvailable: false,
      leftSideExtraSeatAvailable: false,
      leftSideExtraSeatNumber: null,
      rightSideExtraSeatNumber: null,
      planeSeatAmenity: null,
      planeSeatAmenities: [
        {
          description: "FARE",
          currency: "EUR",
          code: "Non-Chargable Seat",
          amount: 6000,
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
      occupied: true,
    },
    elementString: null,
    seatLocationType: null,
    wcFlag: false,
    exitCorridor: false,
    wcSeatFlag: false,
  }
describe("Seat", () => {
  it("displays tooltip content on hover",async  () => {
    render(<Seat cabinElement={mockCabinElement} />)

    const tooltipTrigger = screen.getByTestId("tooltip-trigger")

    fireEvent.focus(tooltipTrigger)
    await waitFor(() => screen.getByTestId("tooltip-content"))

    const tooltipContent = screen.getByTestId("tooltip-content")

    expect(tooltipContent).toBeInTheDocument()
  })
  it("renders the component with correct seat information", async() => {
    render(<Seat cabinElement={mockCabinElement} />)
    const tooltipTrigger = screen.getByTestId("tooltip-trigger")

    fireEvent.focus(tooltipTrigger)


    const seatNumberElements = screen.getAllByText("01A")
    const standartSeatElements = screen.getAllByText("Standart Seat")
    const amountElements = screen.getAllByText("6000 EUR")

    expect(seatNumberElements[0]).toBeInTheDocument()
    expect(standartSeatElements[0]).toBeInTheDocument()
    expect(amountElements[0]).toBeInTheDocument()
  })

  it("renders the correct icon based on reservation status", () => {
    render(<Seat cabinElement={mockCabinElement} />)

    const iconStandartSeatElement = screen.queryByTestId("icon-standart-seat")
    const iconFullSeatElement = screen.queryByTestId("icon-full-seat")

    expect(iconStandartSeatElement).not.toBeInTheDocument()
    expect(iconFullSeatElement).toBeInTheDocument()
  })


})
