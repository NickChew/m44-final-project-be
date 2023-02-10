require("./db/connection");

const express = require ("express");
const cors = require ("cors");
const userRouter = require('./user/userRoutes');
const bookRouter = require('./Books/bookRoutes');


const app = express();
//check what port to use in sequalize
const port = process.env.PORT  || 5001;

app.use(cors());
app.use(express.json());
app.use(bookRouter);

app.get("/health",(req,res)=>{
  res.status(200).json({message:"API is Working!"})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

