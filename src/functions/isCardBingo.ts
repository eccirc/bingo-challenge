import { BingoCard, BingoRow, IsBingoObject } from "./types";
import { checkRowsHaveBingo, isCardValid } from "./bingoFunctions";

export const isCardBingo = (bingoCardObject: BingoCard, bingoNumbersList: number[]): IsBingoObject => {
    const accrossRows = Object.values(bingoCardObject)
    if (!Array.isArray(bingoNumbersList) || !isCardValid(accrossRows)) {
        return {
            isBingo: false,
            message: "Invalid Bingo Card provided!"
        }
    }
    const downRows = accrossRows.map((item, index) => accrossRows.map((row: BingoRow) => row[index]))
        const isBingo = checkRowsHaveBingo(downRows, bingoNumbersList) || checkRowsHaveBingo(accrossRows, bingoNumbersList)
        return {
            isBingo,
            message: isBingo ? "This is your winning card!" : "Try another card!",
        }
}