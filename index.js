import express from "express"
import cors from "cors"
import fetch from "node-fetch"

import { data } from "./data.js"

const app = express()
app.use(cors())
const PORT = process.env.PORT || 3000

app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://661151fe95fdb62f24ecee68.mockapi.io/api/v1/users"
    )
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const card = await response.json()
    const responseData = {
      Header: data.Header,
      Banner: data.Banner,
      Cards: card,
      Footer: data.Footer,
    }
    res.json({ data: responseData, success: true })
  } catch (error) {
    console.error("Error fetching data:", error)
    res.status(500).json({ success: false, error: "Error fetching data" })
  }
})

app.listen(PORT, () => console.log(`server is running on ${PORT}`))
