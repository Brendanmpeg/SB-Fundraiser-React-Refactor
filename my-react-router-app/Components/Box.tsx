// This Component represents each individual box to be sold
// Each box will recieve an Id from its parent component
// Each box will recieve a status from its parent component that defines its state (Assigned, Open, Sold, Paid)

interface BoxProps {
    Id: number;
    Status: string /*Status Values: Unassigned, Assigned, Open, Sold, Paid*/
    Seller: string
    BuyerName: string
    BuyerNumber: string

}

export default function Box({Id, Status}: {Id: number, Status: string /*Status Values: Unassigned, Assigned, Open, Sold, Paid*/}) {

  const Styles: Record<string, string> = {
    Unassigned: "bg-gray-200 text-gray-600",
    Assigned: "bg-slate-400 text-black",
    Open: "bg-cyan-400 text-black",
    Sold: "bg-green-500 text-black",
    Paid: "bg-green-700 text-black",
  };

return <>
<td 
/*The Status defines the color the of box*/ 
className={`border border-black hover:bg-blue-800 hover:text-emerald-100\
    ${Styles[Status ]}`}
>
    {Id}
</td>
</>
}