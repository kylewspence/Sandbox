import { Button } from "@/components/ui/button";


export function Chessboard() {

  const squares = Array(9).fill(null);
 
  return (
    <div className="grid grid-cols-3 h-screen w-screen">
      {squares.map((_, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;
        const isWhite = (row + col) % 2 === 0;
        const color = isWhite ? "bg-white" : "bg-gray-600";
        const piece = null;
        return (
          <div key={index} className={`${color} w-full h-full`}>
            {piece}
          </div>
        );
      })}
    </div>
  );
}