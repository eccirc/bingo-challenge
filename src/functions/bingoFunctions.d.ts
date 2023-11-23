import { BingoRow, BingoCard } from "./types"

export const checkRowsHaveBingo = (bingoCardArray: BingoRow[], bingoNumbersList: number[]): boolean => {
    const listToSet = new Set(bingoNumbersList)
    return bingoCardArray.some((row: BingoRow) => row.every((num) => listToSet.has(num)))
}
  export const isCardValid = (bingoCardArray: Array<5>): boolean => {
    const nRequiredRows = bingoCardArray.length === 5
    const nRequiredNumbers = bingoCardArray.every(item => Array.isArray(item) && item.length === 5)
    return nRequiredRows && nRequiredNumbers
  }


export const isCardBingo = (bingoCardObject: BingoCard, bingoNumbersList: []): boolean => {
    const accrossRows = Object.values(bingoCardObject)
    if (!Array.isArray(bingoNumbersList) || !isCardValid(accrossRows)) {
      return false
    }
    const downRows = accrossRows.map((item, index) => accrossRows.map((row: BingoRow) => row[index]))
       return checkRowsHaveBingo(downRows, bingoNumbersList) || checkRowsHaveBingo(accrossRows, bingoNumbersList)
}