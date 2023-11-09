import { Board, Coord, Move } from "./types";

function getValue(board: Board, coord: Coord) : number {
    return board[coord.row][coord.col]
}

function isMoveInBoard(board: Board, move: Move) : boolean {
    return getValue(board, move.start) !== 2 && getValue(board, move.end) !== 2
}

function IsFirstHasPiece(board: Board, move: Move) : boolean {
   return getValue(board, move.start) === 1;
}

function IsLastIsEmpty(board: Board, move: Move): boolean {
    return getValue(board, move.end) === 0;
}

function isSameLineOrCol(board: Board, move: Move): boolean {
    return move.start.col === move.end.col || move.start.row === move.end.row
}

function isMove2Spots(board: Board, move: Move): boolean {
    let nbr_row_spots = Math.abs(move.start.row - move.end.row)
    let nbr_col_spots = Math.abs(move.start.col - move.end.col)
    return nbr_col_spots + nbr_row_spots === 2
}

function isOverPiece(board: Board, move: Move): boolean {
    let lowerRow = move.start.row < move.end.row? move.start.row: move.end.row
    let row = move.start.row === move.end.row? move.start.row : lowerRow  + 1

    let lowerCol= move.start.col < move.end.col? move.start.col: move.end.col
    let col= move.start.col === move.end.col? move.start.col: lowerCol  + 1

    console.log(`Move over ${row}, ${col}`)
    return board[row][col] === 1
}

let constraints = [isMoveInBoard, IsFirstHasPiece, IsLastIsEmpty, isSameLineOrCol, isMove2Spots, isOverPiece]

export function isMoveValid(board: Board, move: Move): boolean {
    for (const actionFunc of constraints) {
        if (!actionFunc(board, move)){
            console.log(actionFunc.name)
            return false
        }
    }
    return true
}