export default function BoardButton({ label }: { label: string }) {
  return (
    <button
      className="
        min-w-[90px]
        bg-blue-600 text-white font-small rounded-sm
        hover:bg-blue-700 active:scale-95 transition
      "
    >
      {label}
    </button>
  );
}
