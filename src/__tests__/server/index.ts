import request from "supertest"
import app from "../../server/app"

const invalidBodyList = {
    "bingoNumbersList": true,
    "bingoCard" : {
        "row1": [12,2,3,4,5],
        "row2": [16,7,8,9,10],
        "row3": [18,12,13,14,15],
        "row4": [20,17,18,19,20],
        "row5": [21,22,23,24,25]
    }  
}

const invalidBodyCard = {
    "bingoNumbersList": true,
    "bingoCard" : "I am not an object!"
}

describe("Invalid requests for the isBingo endpoint", () => {
    it("Should return a 401 with an invalid content type", async() => {
        const res = await request(app)
            .get("/api/isBingo")
            .send("")
        expect(res.statusCode).toEqual(401)
    })
    it("Should return a 401 when an empty body is sent", async() => {
        const res = await request(app)
            .get("/api/isBingo")
            .send({})
        expect(res.statusCode).toEqual(401)
    })
    it("Should return a 401 when an invalid property for bingoNumbersList property", async() => {
        const res = await request(app)
            .get("/api/isBingo")
            .send(invalidBodyList)
        expect(res.statusCode).toEqual(401)
    })
    it("Should return a 401 when invalid property for bingoCard property", async() => {
        const res = await request(app)
            .get("/api/isBingo")
            .send(invalidBodyCard)
        expect(res.statusCode).toEqual(401)
    })
})

const validBodyWinColumn = {
    "bingoNumbersList": [12,16,18,20, 21],
    "bingoCard" : {
      "row1": [12,2,3,4,5],
      "row2": [16,7,8,9,10],
      "row3": [18,12,13,14,15],
      "row4": [20,17,18,19,20],
      "row5": [21,22,23,24,25]
    }
}
const validBodyWinRow = {
    "bingoNumbersList": [12,2,3,4,5],
    "bingoCard" : {
        "row1": [12,2,3,4,5],
        "row2": [16,7,8,9,10],
        "row3": [18,12,13,14,15],
        "row4": [20,17,18,19,20],
        "row5": [21,22,23,24,25]
    }
}

const validBodyNoWin = {
    "bingoNumbersList": [26,27,33,45,55],
    "bingoCard" : {
        "row1": [12,2,3,4,5],
        "row2": [16,7,8,9,10],
        "row3": [18,12,13,14,15],
        "row4": [20,17,18,19,20],
        "row5": [21,22,23,24,25]
    }
}
const validBodyInvalidCard = {
    "bingoNumbersList": [26,27,33,45,55],
    "bingoCard" : {
        "row1": [12,2,3,4],
        "row2": [16,7,8,9,10],
        "row3": [18,12,13,14,15],
        "row4": [20,17,18,19,20],
        "row5": [21,22,23,24,25]
    }
}

const successObject = { isBingo: true, message: "This is your winning card!" }
const invalidBingoCardObject = { isBingo: false, message: "Invalid Bingo Card provided!" }
const notBingoObject = { isBingo: false, message: "Try another card!" }

describe("Valid requests for the isBingo endpoint", () => {
    it("Should return a 200 when a valid body is sent #1", async() => {
        const res = await request(app)
            .get("/api/isBingo")
            .send(validBodyWinColumn)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(successObject)
    })
    it("Should return a 200 when a valid body is sent #2", async() => {
        const res = await request(app)
            .get("/api/isBingo")
            .send(validBodyWinRow)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(successObject)
    })
    it("Should return a 200 when a valid body is sent #3", async() => {
        const res = await request(app)
            .get("/api/isBingo")
            .send(validBodyNoWin)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(notBingoObject)
    })
    it("Should return a 200 when a valid body is sent #4", async() => {
        const res = await request(app)
            .get("/api/isBingo")
            .send(validBodyInvalidCard)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual(invalidBingoCardObject)
    })
})