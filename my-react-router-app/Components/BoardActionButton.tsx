type BoardButtonProps = {
  label: string;
  eventHandler?: () => void; // optional callback
  isActive?: boolean;   // optional styling flag
};

export default function BoardButton({ label, eventHandler, isActive }: BoardButtonProps) {
  return (
    <button onClick={eventHandler}
      className={`
        min-w-[90px] rounded-sm font-medium transition
        ${isActive 
          ? "bg-blue-600 text-white" 
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"}
        active:scale-95
      `}
    >
      {label}
    </button>
  );
}
