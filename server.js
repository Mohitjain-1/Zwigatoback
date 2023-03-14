const express=require('express');
const app = express();
const port=process.env.PORT || 5000;
const mondoDB=require('./db');
mondoDB();
const BASE_URL=process.env.BASE_URL

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", `${BASE_URL}`);
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.get('/',(req,res)=>{res.send('App is running');});

app.use(express.json())
app.use('/create',require("./Routes/CreateUser"));
app.use('/create',require("./Routes/DisplayData"));
app.use('/create',require("./Routes/login"));
app.use('/create',require("./Routes/myorder"));
app.use('/create',require("./Routes/OrderData"));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

