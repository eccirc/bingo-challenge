export const rowSchema = { type: "array" }
export const bingoCardSchema = {
    id: "/bingoCard",
    type: "object",
    properties: {
        row1: rowSchema,
        row2: rowSchema,
        row3: rowSchema,
        row4: rowSchema,
        row5: rowSchema,
    },
    required: ["row1", "row2", "row3", "row4", "row5"]
}
export const bingoRequestObjectSchema = {
    id: "/bingoRequestObj",
    type: "object",
    properties: {
        bingoNumbersList: rowSchema,
        bingoCard: { type: "object" },
    },
    required: [ "bingoNumbersList", "bingoNumbersList" ]
}