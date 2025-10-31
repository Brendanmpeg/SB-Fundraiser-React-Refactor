
import ChatBox from "./ChatBox";
import BoardButton from "./BoardActionButton";
import { useState, useEffect} from "react";
import * as Utils from "Utils/BoardUtils";

/* This Component represents a single board for the fundraiser. This board consists of a title, a delete button, 100 Box components, and 2 BoardButton Components */
// TODO: 
//  - Done! Implement the logic for chosing board state (Assign/Sell)
//    - Done! An Idea to play with: when a mode is selected, change the other button to be a submit button instead of adding the submit button
//  - Implement the logic for selecting boxes, and unselecting boxes
//  - Implement the logic for clearing the selected boxes when the mode changes back to default
//    - An Idea to play with: hold a snapshot of the boces state and update it when actions(form submission) are taken. 
//      if the boards state changes without an action reset the board to the previous snapshot
//  - Implement the logic for retrieving box states from the server and rendering the boxes correct states
//  - Implement the logic for completing actions (form submission)
//  - Implement the logic for Showing the box information when a box is clicked on in the default state
//    - Look int the Daisy UI "Card" Component to show all the information
//    - Look into how to make a modal with the Daisy UI component

export default function ChatBoard() {
  
  const initialBoxes: Array<Utils.BoxRecord>= Array.from(
    { length: 100 }, 
    (_, index) => [index + 1, "Unassigned"]
  );
  
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

    <div /*Outter Container*/ className="relative flex flex-col items-center p-4 max-w-[500px] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[25%]">
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
          <ChatBox key={box[0]} Id={box[0]} Status={box[1]} eventHandler={Utils.createBoxHandler(setBoxesState, box, boardState)} />
        ))}
      </div>
      <div /*Buttons container for assign and sell buttons*/ className="*
        flex justify-center gap-2 mt-2
      "
      >
        <BoardButton label="Open" eventHandler={Utils.createBoardButtonHandler(setBoardState, "Open", boardState, boxesState, setBoxSnapshot)} BoardState={boardState} />
        <BoardButton label="Sell" eventHandler={Utils.createBoardButtonHandler(setBoardState, "Sell", boardState, boxesState, setBoxSnapshot)} BoardState={boardState}/>
        <BoardButton label="Submit" eventHandler={Utils.createBoardButtonHandler(setBoardState, "Submit", boardState, boxesState, setBoxSnapshot)} BoardState={boardState}/>
      </div>
    </div>
  );
}