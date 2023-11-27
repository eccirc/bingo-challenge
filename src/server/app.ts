import express, { Response } from "express"
import { Router } from "express"
import { Validator } from "jsonschema"
import bodyParser from "body-parser"

import { bingoCardSchema, bingoRequestObjectSchema, rowSchema } from "./schemas"
import { isCardBingo } from "../functions/isCardBingo"

const app = express()

const validator = new Validator();

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

validator.addSchema(rowSchema)
validator.addSchema(bingoCardSchema)
validator.addSchema(bingoRequestObjectSchema)

const router = Router()
export const getBingoResult = async (req: express.Request,res: express.Response) => {
    if(req.get('Content-Type') != 'application/json'){
        res.status(401).send("Invalid header format!")
        return 
    }
    try{
        validator.validate(req.body, bingoRequestObjectSchema, { throwError: true })
        validator.validate(req.body.bingoCard, bingoCardSchema, { throwError: true })
    } catch(error: any) {
        res.status(401).end('Invalid body format: ' + error.message);
        return
    }
    res.status(200).send(isCardBingo(req.body.bingoCard, req.body.bingoNumbersList))
}

router.get("/isBingo", getBingoResult)

app.use("/api", router)

export default app

app.listen(port, () => {
    console.log("Listening on port: " + port)
})


