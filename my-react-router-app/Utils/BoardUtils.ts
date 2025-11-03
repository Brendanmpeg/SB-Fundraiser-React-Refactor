// This type consists of a box's Id as well as aBox's current state
export type BoxRecord = [Id: number, State: string]
 
// This function updates the state of the board for box selection and form submission.
export function HandleBoardButtonClick(
  setBoardState: React.Dispatch<React.SetStateAction<string>>,
  givenState: string, 
  boardState: string,
  boxesState: Array<BoxRecord>,
  setBoxSnapshot: React.Dispatch<React.SetStateAction<Array<BoxRecord>>>
): void { 
    console.log(`given state = ${givenState}`)
    if (givenState === "Submit") {
        //Handle form submission details here
        //this should display the form for the appropriate actions from here
        // setBoxSnapshot([...boxesState]);
        setBoardState("Status");
        return
    }
    else if (givenState === boardState) {
        setBoardState("Status")
} 
    else{
        setBoardState(givenState);
    }
}

// This function takes a react state setter, a the new state of the board, and the current state of the board.
// It is a helper function for modularity of the action button components. 
export function createBoardButtonHandler(
  setBoardState: React.Dispatch<React.SetStateAction<string>>,
  givenState: string, 
  boardState: string,
  boxesState: Array<BoxRecord>,
  setBoxSnapshot: React.Dispatch<React.SetStateAction<Array<BoxRecord>>>) 
  {
    return () => HandleBoardButtonClick(setBoardState, givenState, boardState, boxesState, setBoxSnapshot);
}

export function createBoxHandler(setBoxState: React.Dispatch<React.SetStateAction<Array<BoxRecord>>>, Box: BoxRecord, BoardState: string,  Snapshot: Array<BoxRecord>) {
return () => HandleBoxClick(setBoxState, Box, BoardState, Snapshot);
}

// This function is for the management of board state via snapshots. The management of snapshots will consist of X actions.
//  - The first action will be creating a snapshot.
//  - The second action will be Updating the snapshot
export function ManageSnapshot() {
    // This function is to handle the management of the 
}

// This function takes a react state setter, a number, a string for the new state, a string for the current state.
// It checks the state for operation validity, and updates the state of the box for submission
export function HandleBoxClick(setBoxState: React.Dispatch<React.SetStateAction<Array<BoxRecord>>>, Box: BoxRecord, givenState: string, Snapshot: Array<BoxRecord>) {
    const Id = Box[0];
    let retBox: BoxRecord;
    switch (givenState) {
        case "Sell":
            // mark the box as sold
            if (Box[1] === "Sold") {
                retBox = Snapshot[Id-1];
            }
            else if (Box[1] !== "Open" && Box[1] !== "Assigned") {
                break;
            }
            else {
                retBox = [Id, "Sold"];
            }
            console.log(`Return box = ${retBox}`);
            setBoxState(CurrentBoxesState => {
                const newState = [...CurrentBoxesState];
                newState[Id-1] = retBox;
                return newState;
            })
            break
        case "Open":
            // mark the box as open
            if (Box[1] === "Open") {
                retBox = Snapshot[Id-1];
            }
            else if (Box[1] !== "Unassigned" && Box[1] !== "Assigned") {
                break;
            }
            else {
                retBox = [Id, "Open"];
            }
            setBoxState(CurrentBoxesState => {
                const newState = [...CurrentBoxesState];
                newState[Id-1] = retBox;
                return newState;
            })
            break
    }
}