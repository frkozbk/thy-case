import { CabinElements } from "@/constants/CabinElements"

import { ISeatMapRow } from "@/types/SeatMapData.types"
import { CabinElement } from "@/components/PlaneSeatLayout/CabinElement"
import { DoorRow } from "@/components/PlaneSeatLayout/DoorRow"

export const SeatRow = ({ row }: { row: ISeatMapRow }) => {
  const isDoorRow = row.cabinElement.some(
    (element) => element.type === CabinElements.DOOR
  )
  if (isDoorRow) {
    return <DoorRow />
  }
  return (
    <div className="flex justify-center gap-4 p-6 pt-0 mb-2">
      {Number(row.rowNumber) >= 1 ? (
        <div className="grid w-[30px] place-content-center">
          {row.rowNumber}
        </div>
      ) : null}
      {row.cabinElement.map((element,index) => {
        return <CabinElement key={`${element.rowNumber}-${index}`} cabinElement={element} />
      })}
    </div>
  )
}
