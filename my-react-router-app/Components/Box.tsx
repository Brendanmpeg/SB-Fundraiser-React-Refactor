type BoxProps = {
  Id: number
  Status: string
  eventHandler?: () => void;
}

export default function Box({Id, Status, eventHandler}: BoxProps) {
  const statusStyles: Record<string, string> = {
    Unassigned: "bg-gray-200 text-gray-600",
    Assigned: "bg-slate-400 text-black",
    Open: "bg-cyan-400 text-black",
    Sold: "bg-lime-600 text-black",
    Paid: "bg-green-700 text-black",
  };

  return (
    <div
      onClick={eventHandler}
      className={`
        flex items-center justify-center text-sm font-medium
        aspect-square border border-gray-900
        hover:bg-blue-800 hover:text-emerald-100 transition
        ${statusStyles[Status] ?? ""}
      `}
    >
      {Id}
    </div>
  );
}
