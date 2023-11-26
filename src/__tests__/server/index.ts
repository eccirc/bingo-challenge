import request from "supertest"
import app from "../../server/app"
//import { getBingoResult } from "../../server/app"

describe("GET endpoint for getting the result of a Bingo Card", () => {
    it("Should return a 400 when an empty body is sent", async() => {
        const res = await request(app)
            .get("/api/isBingo")
            .send({})
        expect(res.statusCode).toEqual(401)
    })
})