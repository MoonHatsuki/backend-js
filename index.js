const express = require('express');
const { somar, calculaSalario } = require('./service/exercicios')
const app = express();
app.use(express.json());
//EXERCICIO 1
app.post("/ex1", (req, res) => {

    const resultado = somar(req.body.num1, req.body.num2);
    res.json({ message: resultado })
})

//EXERCICIO 2
app.post("/ex2", (req, res) => {

    const resultado = calculaSalario;
    res.json({ message: resultado })
})

//EXERCICIO 3
app.post("/ex3", (req, res) => {
    var pesofinal = 0
    let peso = req.body.peso
    for (i = 0; i < 5; i++) {
        pesofinal = Number(pesofinal) + Number(peso);
    }
    res.json({ message: pesofinal })
})
//EXERCICIO 4
app.post("/ex4", (req, res) => {
    const cel = req.body.cel
    let fah = (9 * cel + 160) / 5;
    res.json({ message: fah })
})
//EXERCICIO 5
app.post("/ex5", (req, res) => {
    const mil = req.body.mil
    let km = mil * 1.60934;
    res.json({ message: km })
})
//EXERCICIO 6
app.post("/ex6", (req, res) => {
    const seg = req.body.seg
    let h = seg / 3600
    let resto = seg % 3600
    let m = resto / 60;
    res.json({ message: h, m })
})
//EX 7
app.post("/ex7", (req, res) => {
    const km = req.body.seg
    let m = km * 100
    let cm = m * 100;
    res.json({ message: km, m })
})
//EX 8
app.post("/ex8", (req, res) => {
    const num = req.body.num
    for (i = 0; i < 11; i++) {
        let result = num * i
    }
    res.json({ message: result })


})
//ex 9
app.post("/ex9", (req, res) => {
    const nota1 = req.body.nota1
    const nota2 = req.body.nota2
    const nota3 = req.body.nota3
    let media = (nota1 + nota2 + nota3) / 3;
    if (media < 3) {
        console.log('Reprovado')
    } else if (media < 7) {
console.log('Recuperação')
    } else { 
        console.log('Aprovado!')
      }
      res.json({ message: 'sua média foi: ', media })
})
//ex10
app.post("/ex10", (req, res) => {
    const genero = req.body.genero
        const peso = req.body.peso
    const altura = req.body.altura
    if (genero == "m"){
        let imc = (72.7*altura)-58;
        }else if (genero == "f"){
        let imc = (62.1*altura)-44.7;
       }
      
console.log("Seu IMC é:", imc)
})



//RESPOSTA E CONFIRMAÇÃO
app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})