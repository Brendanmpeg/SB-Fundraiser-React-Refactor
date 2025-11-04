export default function DisplayBox({ Status, Id }: { Status: "Assigned" | "Open" | "Sold" | "Paid", Id: string}) {
  const statusStyles: Record<string, string> = {
    Assigned: "bg-slate-400 text-black",
    Open: "bg-cyan-400 text-black",
    Sold: "bg-lime-600 text-black",
    Paid: "bg-green-700 text-black",
  };

  return (
    <>
        <div className="flex items-center gap-2 min-w-[100px]">
            <div
            className={`
                flex flex-col items-center justify-center text-sm font-small w-[30px]
                aspect-square border border-gray-900
                hover:bg-blue-800 hover:text-emerald-100 transition
                ${statusStyles[Status] ?? ""}
            `}
            >
            {Id}
            </div>
            <span className="text-sm">- {Status}</span>
        </div>

    </>
  );
}