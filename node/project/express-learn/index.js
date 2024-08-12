const express = require("express")
const userRouter = require("./routers/user")

const app = express();
const port = 3000;

app.use(express.json())
app.use(userRouter)

// static
app.use(express.static("static"))

app.post("/api/test", (req, res) => {
	console.log(req.body)
	res.send('hello world')
})

app.listen(port, () => {
	console.log("server is running at 3000")
})

