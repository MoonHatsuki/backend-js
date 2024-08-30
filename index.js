const express = require('express');
const app = express();
app.get("/ex1", (req, res) => {
const num1 = req.query.num1
const num2 =req.query.num2

const resultado = Number(num1)+ Number(num2);
res.json({message: resultado})
} )

app.listen(3000, () =>{
    console.log('servidor está rodando na porta 3000')
})