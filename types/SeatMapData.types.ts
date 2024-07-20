export interface ISeatMapData {
  planeMap: IPlaneMap
}
export interface IPlaneMap {
  cabinType: string
  seatMapRow: ISeatMapRow[]
  seatLetters: string[]
}

export type TCabinElementType =
  | "TOILET"
  | "MEAL"
  | "DOOR"
  | "EXITCORRIDOR"
  | "WINDOW"
  | "SEAT"
  | "CORRIDOR"

export interface ISeatMapRow {
  rowNumber: string
  cabinElement: ICabinElement[]
}

export interface ICabinElement {
  rowNumber?: string | null
  type: TCabinElementType
  elementString: any
  seatLocationType?: TCabinElementType | null
  wcFlag: boolean
  exitCorridor: boolean
  wcSeatFlag: boolean
  planeSeat?: IPlaneSeat
}

export interface IPlaneSeat {
  seatNumber?: string | null
  nonSmoking: boolean
  smoking: boolean
  exit: boolean
  basinet: boolean
  aisle: boolean
  window: boolean
  center: boolean
  notForMedical: boolean
  notForYoung: boolean
  notForInfant: boolean
  notForChild: boolean
  notForPetc: boolean
  forTransit: boolean
  largeSpace: boolean
  chargableSeat: boolean
  leastPreferable: boolean
  handicap: boolean
  selectable: boolean
  available: boolean
  standard: boolean
  reserved: boolean
  seatType?: string | null
  rightSideExtraSeatAvailable: boolean
  leftSideExtraSeatAvailable: boolean
  leftSideExtraSeatNumber: any
  rightSideExtraSeatNumber: any
  planeSeatAmenity: any
  planeSeatAmenities: IPlaneSeatAmenity[] | null
  mandatoryInd: any
  planeSection: any
  premiumCode: any
  occupied: boolean
}

export interface IPlaneSeatAmenity {
  description: string
  currency?: string | null
  code: string
  amount?: number | null
  mileAmount: any
  mileCurrency: any
  passengerRph: string
  premiumCode: string
  feeCode: any
  canSelectSeat: boolean
  mandatoryInd: any
  beforeDiscountAmount: any
  beforeDiscountMileAmount: any
}
