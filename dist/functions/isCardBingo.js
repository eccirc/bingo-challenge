"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCardBingo = void 0;
const bingoFunctions_1 = require("./bingoFunctions");
const isCardBingo = (bingoCardObject, bingoNumbersList) => {
    const accrossRows = Object.values(bingoCardObject);
    if (!Array.isArray(bingoNumbersList) || !(0, bingoFunctions_1.isCardValid)(accrossRows)) {
        return {
            isBingo: false,
            message: "Invalid Bingo Card provided!"
        };
    }
    const downRows = accrossRows.map((item, index) => accrossRows.map((row) => row[index]));
    const isBingo = (0, bingoFunctions_1.checkRowsHaveBingo)(downRows, bingoNumbersList) || (0, bingoFunctions_1.checkRowsHaveBingo)(accrossRows, bingoNumbersList);
    return {
        isBingo,
        message: isBingo ? "This is your winning card!" : "Try another card!",
    };
};
exports.isCardBingo = isCardBingo;
