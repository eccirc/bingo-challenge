import express from "express"

const app = express()

const port = process.env.PORT || 3000

app.get("/isBingo", (req,res) => {
    console.log(req),
    res.send({
        isBingo: true
    })
})

app.listen(port, () => {
    console.log("Listening on port: " + port)
})