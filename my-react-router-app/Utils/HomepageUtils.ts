export type BoardRecord = {
  Id: number
  Color: string
}

export function ManageBoardsList(Board: BoardRecord, Boards: Array<BoardRecord>, Action: string): Array<BoardRecord>{
    let retArray: Array<BoardRecord> = [...Boards]
    console.log(`Board creation called for Id: ${Board.Id}, Color: ${Board.Color}`)
    switch(Action){
      case "Create":
        retArray.push(Board)
        break
      case "Delete":
        retArray = retArray.filter(board => board.Id !== Board.Id)
        break
    }

    return retArray

    // return () => ();
    // come here to implement the handler for adding boards 
}
