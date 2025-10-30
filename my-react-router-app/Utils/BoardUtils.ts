import { useState } from "react";


export function HandleBoardButtonClick(setBoardState: React.Dispatch<React.SetStateAction<string>>,givenState: string, BoardState: string): void { 
if (givenState === BoardState) {
    setBoardState("Status")
} 
else{
    setBoardState(givenState);
}
}

export function createBoardButtonHandler(setBoardState: React.Dispatch<React.SetStateAction<string>>,givenState: string, CurrentState: string) {
return () => HandleBoardButtonClick(setBoardState,givenState, CurrentState);
}

export function ManageSnapshot() {
    // This function is to handle the management of the 
}
