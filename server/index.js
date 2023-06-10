const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./database/database.js");
const contactRouter = require("./routes/contact.js");
const path = require("path");

const app=express();
dotenv.config();

app.use(express.json());

app.get("/",(req,res)=>
{
    res.status(200).json("This is main page on api");
})

// app.post("/api/upload", upload.single("file"), (req, res) => {
//     res.status(200).json({ status: "SUCCESS", msg: "Image has been uploaded" });
//   });

// routes
app.use("/api/contact", contactRouter);

app.listen(process.env.PORT,()=>{
    connectDB();
    console.log("App is running at port " + process.env.PORT);
});