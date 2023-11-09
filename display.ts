import { Board } from "./types";

export function printAscii(board: Board) {
    let outStr  = "";
    
    for (const row of board) {
        let line = ""
        for (const spot of row) {
            let asciiMapping = {0: "o", 1: "x", 2: " "}
            line += asciiMapping[spot]
        } 
        if (row.length !== 7) {
            line = "  " + line + "  "
        }
        outStr += line + "\n";
    }
    
    console.log(outStr)
}