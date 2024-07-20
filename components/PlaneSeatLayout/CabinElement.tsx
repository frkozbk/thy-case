import { useMemo } from "react"
import { CabinElements } from "@/constants/CabinElements"

import { ICabinElement } from "@/types/SeatMapData.types"
import { cn } from "@/lib/utils"
import { Seat } from "@/components/PlaneSeatLayout/Seat"
import IconMeal from "@/components/icons/IconMeal"
import IconToilet from "@/components/icons/IconToilet"

export const CabinElement = ({
  cabinElement,
}: {
  cabinElement: ICabinElement
}) => {
  const cabinElementType = cabinElement.type

  const CabinElementContent = useMemo(() => {
    if (cabinElementType === CabinElements.MEAL) return <IconMeal />
    if (cabinElementType === CabinElements.TOILET) return <IconToilet />
    if (cabinElementType === CabinElements.EXITCORRIDOR) return null
    if (cabinElementType === CabinElements.SEAT)
      return <Seat cabinElement={cabinElement} />
    if (cabinElementType === CabinElements.CORRIDOR) return null
  }, [cabinElement, cabinElementType])

  if (cabinElementType === CabinElements.WINDOW) {
    return null
  }
  if (cabinElementType === CabinElements.DOOR) {
    return <div className="w-[30px] flex-1">DOOR</div>
  }
  const isMealOrToilet =
    cabinElementType === CabinElements.MEAL ||
    cabinElementType === CabinElements.TOILET
  return (
    <div
      className={cn({
        "flex justify-center items-center w-14 h-16 hover:bg-[#c3cbd7] cursor-pointer":
          isMealOrToilet,
        "w-[30px]": !isMealOrToilet,
      })}
    >
      {CabinElementContent}
    </div>
  )
}
