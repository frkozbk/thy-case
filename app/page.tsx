import { SeatMapData } from "@/constants/SeatMapData"

import PlaneSeatLayout from "@/components/PlaneSeatLayout"

export default function IndexPage() {
  return <PlaneSeatLayout SeatMapData={SeatMapData} />
}
