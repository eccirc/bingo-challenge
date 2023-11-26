import { BingoRow } from "./types"

export const checkRowsHaveBingo = (bingoCardArray: BingoRow[], bingoNumbersList: number[]): boolean => {
    const listToSet = new Set(bingoNumbersList)
    return bingoCardArray.some((row: BingoRow) => row.every((num) => listToSet.has(num)))
}
  export const isCardValid = (bingoCardArray: BingoRow[]): boolean => {
    const nRequiredRows = bingoCardArray.length === 5
    const nRequiredNumbers = bingoCardArray.every(item => Array.isArray(item) && item.length === 5)
    return nRequiredRows && nRequiredNumbers
  }