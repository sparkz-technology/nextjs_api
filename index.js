import express from "express"
import cors from "cors"

import { data } from "./data.js"

const app = express()
app.use(cors("*"))
const PORT = process.env.PORT || 3000
app.get("/", (req, res) => {
  res.json({ data: data, success: true })
})
app.listen(PORT, () => console.log(`server is running on ${PORT}`))
