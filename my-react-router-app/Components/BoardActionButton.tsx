type BoardButtonProps = {
  label: string;
  eventHandler: () => void;
  BoardState: string;
};

export default function BoardButton({ label, eventHandler, BoardState }: BoardButtonProps) {
  return (
    <button onClick={eventHandler}
      className={`
        min-w-[90px] rounded-sm font-medium transition
                ${BoardState === label && label !== "submit"
          ? "bg-blue-600 text-white"              // Active (blue)
          : "bg-gray-200 text-gray-800 hover:bg-gray-300" // Inactive (white)
        }
        ${BoardState !== "Status" && label!== "Submit" && BoardState !== label ? "hidden" : ""}
        ${BoardState === "Status" && label ==="Submit" ? "hidden": "bg-amber-300 text-gray-800"}
        active:scale-95
      `}
    >
      {label}
    </button>
  );
}
