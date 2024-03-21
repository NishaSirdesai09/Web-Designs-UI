const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb+srv://nisha:nisha@cluster0.9b7pkbk.mongodb.net/";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
    console.log("DB connected");
});

app.use(express.json());

const userRouter = require("./routes/user");
app.get('/', (req, res)=>{
    console.log('API Running!');
    res.status(200).send('API Running');
})
app.use("/user", userRouter);


const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});