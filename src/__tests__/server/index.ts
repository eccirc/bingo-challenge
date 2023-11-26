import request from "supertest"
import app from "../../server/app"

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

describe("GET endpoint for getting the result of a Bingo Card", () => {
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
            .send({})
        expect(res.statusCode).toEqual(401)
    })
})