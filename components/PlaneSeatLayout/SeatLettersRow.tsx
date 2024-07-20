export const SeatLettersRow = ({ seatLetters }: { seatLetters: string[] }) => {
  return (
    <div className="flex justify-center gap-4 p-4 py-1 seatRow">
      <div className="w-[30px]"></div>
      {seatLetters.map((letter,index) => (
        <div key={`${letter}-${index}`} className="grid w-[30px] place-content-center" data-testid='seat-letter'>{letter}</div>
      ))}
    </div>
  )
}
