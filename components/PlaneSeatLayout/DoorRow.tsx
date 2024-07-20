export const DoorRow = () => (
  <div className="flex items-center justify-between pb-2 overflow-hidden" data-testid="door-row-component">
    <div data-testid="door-icon" className="  sm:w-[28px]  rounded-sm h-[32px] bg-gray-300 sm:rotate-[25deg]" />
    <p>EMERGENCY EXIT</p>
    <p>EMERGENCY EXIT</p>
    <div data-testid="door-icon" className=" sm:w-[28px]  rounded-sm h-[32px] bg-gray-300 sm:rotate-[-25deg]" />
  </div>
)
