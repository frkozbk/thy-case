import { ICabinElement } from "@/types/SeatMapData.types"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import IconFullSeat from "@/components/icons/IconFullSeat"
import IconStandartSeat from "@/components/icons/IconStandartSeat"

export const Seat = ({ cabinElement }: { cabinElement: ICabinElement }) => {
  const isReserverd = cabinElement.planeSeat?.reserved
  const isStandart = cabinElement.planeSeat?.standard

  const planeSeatAmenities = cabinElement.planeSeat?.planeSeatAmenities

  const planeSeatamenity =
    planeSeatAmenities && planeSeatAmenities?.length > 0
      ? planeSeatAmenities[0]
      : null
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger className="grid w-[30px] place-content-center" data-testid='tooltip-trigger'>
          {isReserverd ? <IconFullSeat /> : <IconStandartSeat />}
        </TooltipTrigger>
        <TooltipContent data-testid="tooltip-content"  className="border-0 flex items-center gap-2 rounded-md bg-[#00548a] p-2">
          <p  data-testid='seatNumber' className="text-2xl font-semibold text-white">
            {cabinElement.planeSeat?.seatNumber}
          </p>
          <div data-testid='seat-isStandard' className="flex flex-col gap-1">
            {isStandart ? (
              <p className="font-medium text-white ">Standart Seat</p>
            ) : null}
            <p data-testid='seat-price' className="font-medium text-white">
              {planeSeatamenity?.amount
                ? `${planeSeatamenity.amount} ${planeSeatamenity.currency}`
                : "FREE"}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
