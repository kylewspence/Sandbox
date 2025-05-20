export function Chessboard() {
  const squares = Array(64).fill(null);

  return (
    <div className="grid grid-cols-8 h-[1000px] w-[1000px]">
      {squares.map((_, index) => {
        const row = Math.floor(index / 8);
        const col = index % 8;

        const isWhite = (row + col) % 2 === 0;
        const color = isWhite ? 'bg-amber-100' : 'bg-amber-800';

        return (
          <div
            key={index}
            className={`${color} aspect-square flex items-center justify-center`}></div>
        );
      })}
    </div>
  );
}
