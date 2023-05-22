const express = require("express")
const app = express()

const PORT = 8000;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

const systemsRouter = require("./routes/systems")
const userUrgentsRouter = require("./routes/user-agents")

app.use("/systems", systemsRouter)
app.use("/user-urgents", userUrgentsRouter)

app.listen(PORT, () => {
    console.debug(`Server running on http://localhost:${PORT}`)
})
