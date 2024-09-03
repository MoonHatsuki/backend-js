const express = require('express');
const app = express();
//EXERCICIO 1
app.get("/ex1", (req, res) => {
const num1 = req.query.num1
const num2 =req.query.num2

const resultado = Number(num1)+ Number(num2);
res.json({message: resultado})
} )

//EXERCICIO 2
app.get("/ex2", (req, res) => {
const val = req.query.val
const qtd =req.query.qtd

const resultado = Number(val) * Number(qtd);
res.json({message: resultado})
} )

//EXERCICIO 3
app.get("/ex3", (req, res) => {
    let peso = req.query.peso
    let pesofinal = Number(pesofinal) + Number(peso);
})
//RESPOSTA E CONFIRMAÇÃO
app.listen(3000, () =>{
    console.log('servidor está rodando na porta 3000')
})