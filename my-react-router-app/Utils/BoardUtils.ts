// This type consists of a box's Id as well as aBox's current state
export type BoxRecord = [Id: number, State: string]
 
// This function updates the state of the board for box selection and form submission.
export function HandleBoardButtonClick(givenState: string, boardState: string): string { 
    console.log(`given state = ${givenState}`)
    if (givenState === "Submit") {
        //Handle form submission details here
        //this should display the form for the appropriate actions from here
        // setBoxSnapshot([...boxesState]);
        return "Status"
    }
    else if (givenState === boardState) {
        return "Status"
    }
    return givenState;
}

export function HandleBoxClick(Box: BoxRecord, givenState: string, Snapshot: Array<BoxRecord>): Array<BoxRecord> {
    const Id = Box[0];
    let retBox: BoxRecord = Snapshot[Id-1];
    const retArray = [...Snapshot];
    switch (givenState) {
        case "Sell":
            // mark the box as sold
            if (Box[1] === "Open" || Box[1] === "Assigned") {
                retArray[Id-1] = [Id, "Sold"];
                break;
            }
            console.log(`Return box = ${retBox}`);
            break
        case "Open":
            // mark the box as open
            if (Box[1] === "Unassigned" || Box[1] === "Assigned") {
                retArray[Id-1] = [Id, "Open"];
                break;
            }
    }
    return retArray;
}


// This function is for the management of board state via snapshots. The management of snapshots will consist of X actions.
//  - The first action will be creating a snapshot.
//  - The second action will be Updating the snapshot
export function ManageSnapshot() {
    // This function is to handle the management of the 
}