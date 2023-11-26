export type BingoRow = number[]

export interface BingoCard {
  row1?: BingoRow;
  row2?: BingoRow;
  row3?: BingoRow;
  row4?: BingoRow;
  row5?: BingoRow;
}

export interface IsBingoObject {
  isBingo: boolean,
  message: string,
}
