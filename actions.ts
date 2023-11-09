import { Board } from "./types";

export function init_board(): Board{
    let board: Board = [
        [2, 2, 1, 1, 1, 2, 2],
        [2, 2, 1, 1, 1, 2, 2],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [2, 2, 1, 1, 1, 2, 2],
        [2, 2, 1, 1, 1, 2, 2],
    ]
    return board
}