
import ChatBox from "./ChatBox"; // your Box component from before

export default function ChatBoard() {
  // Create an array of numbers 1–100
  const boxes = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center w-[30%] px-4 py-2 bg-blue-500 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Fundraiser Board</h1>
        <button
          className="aspect-square px-0.5 rounded bg-red-500 hover:bg-red-600 hover:text-white text-black text-sm transition"
          onClick={() => alert("Board deleted!")}
        >
          x
        </button>
      </div>

      {/* Grid */}
      <div
        className="
          grid grid-cols-10 gap-0
          w-full
          border border--400 rounded-md overflow-hidden
        "
      >
        {boxes.map((num) => (
          <ChatBox key={num} Id={num} Status="Assigned" />
        ))}
      </div>
    </div>
  );
}