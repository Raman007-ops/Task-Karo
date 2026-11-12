import express from "express";


const app = express();
const PORT = 3000;

app.use(express.json());



app.get("/", (req, res) => {
    res.send("Todo crud api");
});


app.listen(PORT , ()=> {
    console.log("server is running on port 3000");
})
