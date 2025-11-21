import Box from "./Box";
import BoardButton from "./BoardActionButton";
import { useState, useEffect} from "react";
import * as Utils from "Utils/BoardUtils";
import type { BoardRecord } from "Utils/HomepageUtils";

type BoardProps = {
  Board: BoardRecord
  Remove: (board: BoardRecord) => void;
}

/* This Component represents a single board for the fundraiser. This board consists of a title, a delete button, 100 Box components, and 2 BoardButton Components */
// TODO: 
//  - Implement the logic for retrieving box states from the server and rendering the boxes correct states
//  - Implement the logic for completing actions (form submission)
//  - Implement the logic for Showing the box information when a box is clicked on in the default state
//    - Look int the Daisy UI "Card" Component to show all the information
//    - Look into how to make a modal with the Daisy UI component


export default function Board({Board, Remove}: BoardProps) {
  
  const initialBoxes: Array<Utils.BoxRecord>= Array.from(
    { length: 100 }, 
    (_, index) => [index + 1, "Assigned"]
  );
  
  initialBoxes[68] = [69, "Open"];
  initialBoxes[12] = [13, "Sold"];
  
  const [boardState, setBoardState] = useState<string>("Status");
  const [boxesState, setBoxesState] = useState<Array<Utils.BoxRecord>>(initialBoxes);
  
  // Snapshot is created once with initialBoxes, only updated on submission
  const [boxSnapshot, setBoxSnapshot] = useState<Array<Utils.BoxRecord>>(initialBoxes);

  // Restore snapshot when returning to "Status"
  useEffect(() => {
    if (boardState === "Status") {
      setBoxesState([...boxSnapshot]);
    }
  }, [boardState, boxSnapshot]);


  return (

    <div /*Outter Container*/ className="relative flex flex-col items-center p-4 max-w-[450px] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%]">
      <div /*Header container*/ className="relative w-full flex items-center justify-center mb-1">
        <h1 /*Title*/ className="text-2xl font-bold text-blue-600 text-center">
          Fundraiser Board
        </h1>
        <button /*Delete Button*/ className="
            absolute right-0
            text-black hover:bg-red-600 rounded hover:text-white
            text-xl font-bold leading-none
            transition text-center p-1
          "
          aria-label="Close board"
          //Might need a custom hook here or something to change the states from 2 different components
          onClick={() => {Remove(Board)}}
        >
          &times;
        </button>
      </div>

      <div /*Board/Grid*/ className="
          grid grid-cols-10 gap-0
          w-full
          border border-gray-400 rounded-md overflow-hidden bg-gray-100
        "
      >
        {boxesState.map((box) => (
          <Box key={box[0]} Id={box[0]} Status={box[1]} eventHandler={() => setBoxesState(Utils.HandleBoxClick([box[0], box[1]], boardState, boxesState))} />
        ))}
      </div>
      <div /*Buttons container for assign and sell buttons*/ className="*
        flex justify-center gap-2 mt-2
      "
      >
        <BoardButton label="Open" eventHandler={() => setBoardState(Utils.HandleBoardButtonClick("Open", boardState))} BoardState={boardState} />
        <BoardButton label="Sell" eventHandler={() => setBoardState(Utils.HandleBoardButtonClick("Sell", boardState))} BoardState={boardState}/>
        <BoardButton label="Submit" eventHandler={() => setBoardState(Utils.HandleBoardButtonClick("Submit", boardState, Board.Id))} BoardState={boardState}/>
      </div>
    </div>
  );
}