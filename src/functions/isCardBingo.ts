import { BingoCard, BingoRow } from "./types";
import { checkRowsHaveBingo, isCardValid } from "./bingoFunctions";

export const isCardBingo = (bingoCardObject: BingoCard, bingoNumbersList: number[]): boolean => {
    const accrossRows = Object.values(bingoCardObject)
    if (!Array.isArray(bingoNumbersList) || !isCardValid(accrossRows)) {
      return false
    }
    const downRows = accrossRows.map((item, index) => accrossRows.map((row: BingoRow) => row[index]))
       return checkRowsHaveBingo(downRows, bingoNumbersList) || checkRowsHaveBingo(accrossRows, bingoNumbersList)
}