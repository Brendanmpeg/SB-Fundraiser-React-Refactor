import Board from "Components/Board";
import DisplayBox from "Components/DisplayBox";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8EB]">

      {/* Welcome Banner */}
      <header className="bg-[#FFF8EB] border-b-2 border-blue-600 p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to Fundraiser Central</h1>
      </header>

      {/* Main Body - Two Sections */}
      <main className="flex-1 flex">
        {/* Left Sidebar */}
        <aside className="w-20% lg:w-[280px] bg-[#FFF8EB] p-4 border-r-4 border-blue-600">
          <h3 className="text-lg font-semibold mb-4">Legend</h3>
          
          {/* Color Key */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-2">Box States:</p>
            <div className="space-y-2">
              {/* Sample boxes showing states */}
              <div className="
              grid grid-cols-2 
              sm:grid-cols-1 lg:grid-cols-2 gap-y-2">
                <DisplayBox Status="Assigned" Id="X" />
                <DisplayBox Status="Open" Id="X" />
                <DisplayBox Status="Sold" Id="X" />
                <DisplayBox Status="Paid" Id="X" />
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="mb-8">
            <h4 className="text-md font-semibold mb-2">Statistics</h4>
            <p className="text-sm">Total Sold: X</p>
            <p className="text-sm">Total Open: X</p>
            <p className="text-sm">Unassigned: X</p>
          </div>

          {/* Buttons */}
          <div className="space-y-2">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Create Board
            </button>
            <button className="w-full bg-gray-200 text-black py-2 px-4 rounded hover:bg-green-600">
              Export Data
            </button>
          </div>
        </aside>

        {/* Right Main Area - 80% width */}
        <section className="w-[80%] p-6 overflow-y-auto">
          {/* Flexbox with wrap */}
          <div className="flex flex-wrap gap-6 justify-evenly">
            <Board />
            <Board />
            {/* <ChatBoard />
            <ChatBoard /> */}
            {/* Map over your boards array here */}
          </div>
        </section>
      </main>
    </div>
  );
}