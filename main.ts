import { init_board } from "./actions";
import { Board, Coord , Move} from "./types";
import { printAscii } from "./display";
import { isMoveValid } from "./constraints";

let board: Board = init_board()

const readline = require('readline');

function readInput(sentence: string): Promise<string> {
    const itf = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => itf.question(sentence, answer => {
        itf.close();
        resolve(answer);
    }))
}

function getCoordInput(input: string): Coord {
    let coord: [number, number] = JSON.parse(input);
    
    return {row: coord[0], col: coord[1] }
}

(async () => {

    while (true){
        printAscii(board)
        const startStrInput: string = await readInput("Start coord:");
        let start = getCoordInput(startStrInput);
        const endStrInput: string = await readInput("End coord:");
        let end = getCoordInput(endStrInput);
        let move = {start: start, end: end}

        console.log(`Your move: ${move}`);
        console.log(`your move is ${isMoveValid(board, move)} !`)
    }
})();