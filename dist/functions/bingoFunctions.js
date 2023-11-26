"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCardBingo = exports.isCardValid = exports.checkRowsHaveBingo = void 0;
const checkRowsHaveBingo = (bingoCardArray, bingoNumbersList) => {
    const listToSet = new Set(bingoNumbersList);
    return bingoCardArray.some((row) => row.every((num) => listToSet.has(num)));
};
exports.checkRowsHaveBingo = checkRowsHaveBingo;
const isCardValid = (bingoCardArray) => {
    const nRequiredRows = bingoCardArray.length === 5;
    const nRequiredNumbers = bingoCardArray.every(item => Array.isArray(item) && item.length === 5);
    return nRequiredRows && nRequiredNumbers;
};
exports.isCardValid = isCardValid;
const isCardBingo = (bingoCardObject, bingoNumbersList) => {
    const accrossRows = Object.values(bingoCardObject);
    if (!Array.isArray(bingoNumbersList) || !(0, exports.isCardValid)(accrossRows)) {
        return false;
    }
    const downRows = accrossRows.map((item, index) => accrossRows.map((row) => row[index]));
    return (0, exports.checkRowsHaveBingo)(downRows, bingoNumbersList) || (0, exports.checkRowsHaveBingo)(accrossRows, bingoNumbersList);
};
exports.isCardBingo = isCardBingo;
