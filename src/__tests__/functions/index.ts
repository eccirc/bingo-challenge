import "jest"
import { BingoRow, BingoCard } from "../../functions/types" 
import { checkRowsHaveBingo, isCardValid } from "../../functions/bingoFunctions" 
import { isCardBingo } from "../../functions/isCardBingo" 
describe('checkRowsHaveBingo', () => {
    // Should return true if all numbers in a row match the numbers in the bingoNumbersList
    it('should return true when all numbers in a row match the numbers in the bingoNumbersList', () => {
      const bingoCardArray: BingoRow[] = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
      ] 
      const bingoNumbersList: number[] = [1, 2, 3, 4, 5] 
  
      const result = checkRowsHaveBingo(bingoCardArray, bingoNumbersList) 
  
      expect(result).toBe(true) 
    }) 

    // Should return false if no row matches the numbers in the bingoNumbersList
    it('should return false when no row matches the numbers in the bingoNumbersList', () => {
      const bingoCardArray: BingoRow[] = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
      ] 
      const bingoNumbersList: number[] = [16, 17, 18, 19, 20] 
  
      const result = checkRowsHaveBingo(bingoCardArray, bingoNumbersList) 
  
      expect(result).toBe(false) 
    }) 

    // Should return true if multiple rows match the numbers in the bingoNumbersList
    it('should return true when multiple rows match the numbers in the bingoNumbersList', () => {
      const bingoCardArray: BingoRow[] = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
      ] 
      const bingoNumbersList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
  
      const result = checkRowsHaveBingo(bingoCardArray, bingoNumbersList) 
  
      expect(result).toBe(true) 
    }) 

    // Should return false if bingoCardArray is empty
    it('should return false when bingoCardArray is empty', () => {
      const bingoCardArray: BingoRow[] = [] 
      const bingoNumbersList: number[] = [1, 2, 3, 4, 5] 
  
      const result = checkRowsHaveBingo(bingoCardArray, bingoNumbersList) 
  
      expect(result).toBe(false) 
    }) 

    // Should return false if bingoNumbersList is empty
    it('should return false when bingoNumbersList is empty', () => {
      const bingoCardArray: BingoRow[] = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
      ] 
      const bingoNumbersList: number[] = [] 
  
      const result = checkRowsHaveBingo(bingoCardArray, bingoNumbersList) 
  
      expect(result).toBe(false) 
    }) 
}) 

describe('isCardValid', () => {

  // Returns True for a valid bingo card with 5 rows and 5 columns
  it('should return true for a valid bingo card with 5 rows and 5 columns', () => {
    const bingoCardArray = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ] 
    const result = isCardValid(bingoCardArray) 
    expect(result).toBe(true) 
  }) 

  // Returns False for a bingo card with less than 5 rows or more than 5 columns

  it('should return false for a bingo card with less than 5 rows or more than 5 columns', () => {
    const bingoCardArray = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ] 
    const result = isCardValid(bingoCardArray) 
    expect(result).toBe(false) 
  }) 

  // Returns False for a bingo card with less than 5 columns or more than 5 rows
  it('should return false for a bingo card with less than 5 columns or more than 5 rows', () => {
    const bingoCardArray = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23]
    ] 
    const result = isCardValid(bingoCardArray) 
    expect(result).toBe(false) 
  }) 

  // Returns False for an array with elements that are arrays of length other than 5
  it('should return false for an array with elements that are arrays of length other than 5', () => {
    const bingoCardArray = [
      [1, 2, 3, 4, 5],
      [6, 7, 8],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ] 
    const result = isCardValid(bingoCardArray) 
    expect(result).toBe(false) 
  }) 
}) 

describe('isCardBingo', () => {
  const successObject = { isBingo: true, message: "This is your winning card!" }
  const invalidObject = { isBingo: false, message: "Invalid Bingo Card provided!" }
  const notBingoObject = { isBingo: false, message: "Try another card!" }
  // should return true when a valid bingo card has a complete row of numbers in the bingoNumbersList
  it('should return true when a valid bingo card has a complete row of numbers in the bingoNumbersList', () => {
    const bingoCardObject: BingoCard = {
      row1: [1, 2, 3, 4, 5],
      row2: [6, 7, 8, 9, 10],
      row3: [11, 12, 13, 14, 15],
      row4: [16, 17, 18, 19, 20],
      row5: [21, 22, 23, 24, 25]
    }
    const bingoNumbersList: number[] = [1, 2, 3, 4, 5]
    const result = isCardBingo(bingoCardObject, bingoNumbersList)
    expect(result.isBingo).toBe(true)
    expect(result.message).toEqual(successObject.message)
  }) 

  // should return true when a valid bingo card has a complete column of numbers in the bingoNumbersList
  it('should return true when a valid bingo card has a complete column of numbers in the bingoNumbersList', () => {
    const bingoCardObject: BingoCard = {
      row1: [1, 6, 11, 16, 21],
      row2: [2, 7, 12, 17, 22],
      row3: [3, 8, 13, 18, 23],
      row4: [4, 9, 14, 19, 24],
      row5: [5, 10, 15, 20, 25]
    }
    const bingoNumbersList: number[] = [11, 12, 13, 14, 15]
    const result = isCardBingo(bingoCardObject, bingoNumbersList)
    expect(result.isBingo).toBe(true)
    expect(result.message).toEqual(successObject.message)
  })
  it('should return true when a valid bingo card has a complete column of numbers in a longer bingoNumbersList', () => {
    const bingoCardObject: BingoCard = {
      row1: [1, 6, 11, 16, 21],
      row2: [2, 7, 12, 17, 22],
      row3: [3, 8, 13, 18, 23],
      row4: [4, 9, 14, 19, 24],
      row5: [5, 10, 15, 20, 25]
    }
    const bingoNumbersList: number[] = [2, 22, 23, 11, 30, 12, 31, 13, 21, 14, 15]
    const result = isCardBingo(bingoCardObject, bingoNumbersList)
    expect(result.isBingo).toBe(true)
    expect(result.message).toEqual(successObject.message)
  }) 

  // should return false when the bingoCardObject is empty
  it('should return false when the bingoCardObject is empty', () => {
    const bingoCardObject: BingoCard = {}
    const bingoNumbersList: number[] = [1, 2, 3, 4, 5]
    const result = isCardBingo(bingoCardObject, bingoNumbersList)
    expect(result.isBingo).toBe(false)
    expect(result.message).toEqual(invalidObject.message)
  }) 

  // should return false when the bingoCardObject is not a valid bingo card
  it('should return false when the bingoCardObject is not a valid bingo card', () => {
    const bingoCardObject: BingoCard = {
      row1: [1, 2, 3, 4],
      row2: [5, 6, 7, 8],
      row3: [9, 10, 11, 12],
      row4: [13, 14, 15, 16],
      row5: [17, 18, 19, 20]
    }
    const bingoNumbersList: number[] = [1, 2, 3, 4, 5]
    const result = isCardBingo(bingoCardObject, bingoNumbersList)
    expect(result.isBingo).toBe(false)
    expect(result.message).toEqual(invalidObject.message)
  })
  it('should return false when the bingoCardObject does not have a complete row or column in the bingoNumberList', () => {
    const bingoCardObject: BingoCard = {
      row1: [1, 2, 3, 4, 5],
      row2: [6, 7, 8, 9, 10],
      row3: [11, 12, 13, 14, 15],
      row4: [16, 17, 18, 19, 20],
      row5: [21, 22, 23, 24 ,25],
    }
    const bingoNumbersList: number[] = [26, 27, 28, 29, 30, 31, 32, 33]
    const result = isCardBingo(bingoCardObject, bingoNumbersList)
    expect(result.isBingo).toBe(false)
    expect(result.message).toEqual(notBingoObject.message)
  })
  it('should return false when the bingoCardObject nmumbers in the bingoNumbersList but not in a row or column', () => {
    const bingoCardObject: BingoCard = {
      row1: [1, 2, 3, 4, 5],
      row2: [6, 7, 8, 9, 10],
      row3: [11, 12, 13, 14, 15],
      row4: [16, 17, 18, 19, 20],
      row5: [21, 22, 23, 24 ,25],
    }
    const bingoNumbersList: number[] = [1,7,13,19,24]
    const result = isCardBingo(bingoCardObject, bingoNumbersList)
    expect(result.isBingo).toBe(false)
    expect(result.message).toEqual(notBingoObject.message)
  }) 
}) 