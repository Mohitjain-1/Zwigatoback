const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res)=>{
    try{
        const data = {
            zwigato: global.Zwigato,
            categories: global.Zwigato_Category
        };
        res.status(200).send(data);
    }catch(err){
        console.log(err.message)
        res.status(500).send({ error: "Display Error" });
    }
});

module.exports = router;
