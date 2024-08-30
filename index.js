const express = require('express');
const app = express();
app.get("/ex2", (req, res) => {
const val = req.query.val
const qtd =req.query.qtd

const resultado = Number(val) * Number(qtd);
res.json({message: resultado})
} )

app.listen(3000, () =>{
    console.log('servidor está rodando na porta 3000')
})