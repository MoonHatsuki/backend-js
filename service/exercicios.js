class ServiceExercicio {
    somar(num1, num2) {
        return Number(num1) + Number(num2);
    }
    calculaSalario(val, qtd) {
        return Number(val) * Number(qtd);
    }

}

module.exports = { somar, calculaSalario } 
