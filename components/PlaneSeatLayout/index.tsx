import React from "react"

import { ISeatMapData, ISeatMapRow } from "@/types/SeatMapData.types"
import { SeatLettersRow } from "@/components/PlaneSeatLayout/SeatLettersRow"
import { SeatRow } from "@/components/PlaneSeatLayout/SeatRow"

interface IProps {
  SeatMapData: ISeatMapData
}

const PlaneSeatLayout = ({ SeatMapData }: IProps) => {
  const { seatMapRow } = SeatMapData.planeMap
  const isNextRowFirstSeatRow = (seatMapRow: ISeatMapRow[], index: number) => {
    return seatMapRow[index + 1]?.rowNumber === "1"
  }
  return (
    <section className="container gap-6 pt-6 pb-8 md:py-10">
      <div className="mx-auto max-w-[400px] overflow-hidden rounded-tl-[220px] rounded-tr-[220px] bg-[#f2f2f2]">
        {seatMapRow.map((row, index) => (
          <React.Fragment key={`${row.rowNumber}-${index}}`}>
            <SeatRow  row={row} />
            {isNextRowFirstSeatRow(seatMapRow, index) ? (
              <SeatLettersRow seatLetters={SeatMapData.planeMap.seatLetters} />
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default PlaneSeatLayout
