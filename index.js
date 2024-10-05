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
    if (genero == "m") {
        let imc = (72.7 * altura) - 58;
    } else if (genero == "f") {
        let imc = (62.1 * altura) - 44.7;
    }

    console.log("Seu IMC é:", imc)
})
app.post("/ex11", (req, res) => {

    const num1 = req.body.num1
    const num2 = req.body.num2
    const operador = req.body.operador


    if (operador == '+') {
        console.log("O resultado da soma é: ", num1 + num2)
    } else if (operador == '-') {
        console.log("O resultado da subtração é: ", num1 - num2)
    } else if (operador == '*') {
        console.log("O resultado da multiplicação é: ", num1 * num2)
    } else if (operador == '/') {
        console.log("O resultado da divisão é: ", num1 / num2)
    } else {
        console.log("Operador inválido");
    }
})

app.post("/ex12", (req, res) => {
    const num = req.body.num
    if (num < 0) {
        console.log('Seu número é negativo!')
    } else if (num > 0) {
        cout << ('Seu número é positivo!');
    }
})
app.post("/ex13", (req, res) => {
    const num = req.body.num;
    if (num % 2 != 0) {
        console.log("Este número é ímpar!");
    } else if (num % 2 == 0) {
        console.log("Este número é par!");
    }
})
app.post("/ex14", (req, res) => {
    const num1 = req.body.num;
    const num2 = req.body.num;
    if (num1 > num2) {
        console.log("O número: ", num1, " É maior que o número: ", num2)
    } else if (num1 < num2) {
        console.log("O número: ", num2, " É maior que o número: ", num1)
    } else if (num1 == num2) {
        console.log("O número: ", num1, " É igual ao número: ", num2)
    } else
        console.log("valor inválido!");
})
//ex15
app.post("/ex16", (req, res) => {

    function verificaTriangulos(a, b, c) {
        let resultado
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            resultado = 'Nao é um triangulo'
        } else if ((a == b) || (a == c)) {
            resultado = 'Equilatero'
        } else if ((a == b) || (a == c) || (b == c)) {
            resultado = 'Isósceles'
        } else {
            resultado = 'Escaleno'
        }

        return resultado
    }
})
//ex16
app.post("/ex16", (req, res) => {
    const cpf = req.body.cpf;
    const dep = req.body.dep;
    const renda = req.body.renda;

    let salMin = 1412;
    let desc = (dep * (renda * 5)) / 100;
    if (renda <= 2 * salMin) {
        return "Isento";
    } else if (renda > 2 * salMin && renda <= 3 * salMin) {
        return "Aliquota de 5%, valor de imposto: " << (renda * 5) / 100;
    } else if (renda > 3 * salMin && renda <= 5 * salMin) {
        return "Aliquota de 10%, valor de imposto: " << (renda * 10) / 100;
    } else if (renda > 5 * salMin && renda <= 7 * salMin) {
        return "Aliquota de 15%, valor de imposto: " << (renda * 15) / 100;
    } else if (renda > 7 * salMin) {
        return "Aliquota de 20%, valor de imposto: " << (renda * 20) / 100;
    }
})
//ex 17
app.post("/ex17", (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    const n3 = req.body.n3
    let pn1 = 2;
    let pn2 = 3;
    let pn3 = 5;
    let media = (((n1 * pn1) + (n2 * pn2) + (n3 * pn3)) / (pn1 + pn2 + pn3))
    return ("A média do aluno foi: ", media);
})
//ex18
app.post("/ex18", (req, res) => {
})
//ex19
app.post("/ex19", (req, res) => {
})
//ex20
app.post("/ex20", (req, res) => {
})
//ex21
app.post("/ex21", (req, res) => {
})
//ex22
app.post("/ex22", (req, res) => {
})
//ex23
app.post("/ex23", (req, res) => {
    cout << "Insira [1] para Batata :D ou [Qualquer outra coisa] para sair D:"
    do {
        console.log("batata ")
        let num = req.body.num;
    }while(num==1);
})
//ex24
app.post("/ex24", (req, res) => {
    const num = req.body.num
    let i = 0;
	for (i=0; i<11; i++){
		console.log("num", "X", i," = ", num*i);
	}
})
//ex25
app.post("/ex25", (req, res) => {
    const numPes = req.body.numPes
    let i = 0
	for (i=1; i<numPes+1; i++){
		console.log("insira a altura da pessoa ", i, ": ")
        const altura = req.body.altura
        let soma= alturaTotal + altura
        let alturaTotal = soma
	}
	let media = alturaTotal/numPes;
	console.log(" A média da altura das pessoas é: ",media)	
})
//ex26
app.post("/ex26", (req, res) => {
    let i = 1;
	for (i=1; i<6;i++){
	    const pesoAtual = req.body.pesoAtual
		pesoFinal=pesoFinal+pesoAtual;
	}
	let media=(pesoFinal/5)
	console.log("A média dos pesos é: ", media)

})
//ex27
app.post("/ex27", (req, res) => {
    do{
    let num = 1
    console.log('Qual o peso da pessoa ', num)
    const peso= req.body.pesoAtual
     let somaPeso = somaPeso+peso
    }while (somaPeso<=180);
    let num=num+1
    return ('Você atingiu o peso máximo do elevador')
    
})

//ex28
app.post("/ex28", (req, res) => {
    let numNeg = 0
    let i =1
	for (i = 1; i<=10; i++){
		console.log("Escreva o ", i, "° número: ")
        const num= req.body.num
		if (num<0){
			let numNeg=numNeg+1;
		}	
	}
	return "foram digitados ", numNeg, " números negativos"
})

//ex29
// app.post("/ex29", (req, res) => {
//     let numAleatorio [15] = req.body,numAleatorio
//     let i = 0
// console.log('Vamos  gerar 15 números aleatórios!')
// for (i=1;i<=15; i++);
// numAleatorio(i)= rand(1);
// return(numAleatorio)


// })

//ex30
app.post("/ex30", (req, res) => {
    
})


//RESPOSTA E CONFIRMAÇÃO
app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})