const { somar } = require('../service/exercicios');
const { describe, it, expect } = require('@jest/globals')
describe('testando a funcao somar: ', () => {
    //faz os its(testes)
    it('Somar dois números positivos', () => {
        const resultado = somar(1, 2);
        expect(resultado).toBe(3);
    })
    it('somar um numero positivo com um negativo', ()=>{
        
        const resultado = somar(-1, 2);
        expect(resultado).toBe(1);
    })
    it('somar um numero negativo com um zero', ()=>{
        
        const resultado = somar(0, 0);
        expect(resultado).toBe(0);
    })
    it('somar um numero com uma letra', ()=>{
        
        const resultado = somar(2, 'a');
        expect(resultado).toBe('erro');
    })
})
// describe('testando a funcao calculaSalario: ', () => {
//     //faz os its(testes)

// })const { somar, calculaSalario } = require('../service/exercicios')
const { describe, it, expect } = require('@jest/globals')

describe('Testes da função somar: ', () => {
    
    it('Somar dois números positivos', () => {
        const resultado = somar(1, 2);
        expect(resultado).toBe(3)
    })

    it('Somar um número negativo com um positivo', () => {
        const resultado = somar(-1, 2);
        expect(resultado).toBe(1)
    })

    it('Somar um número positivo com um negativo', () => {
        const resultado = somar(1, -2);
        expect(resultado).toBe(-1)
    })

    it('Somar um número negativo com zero', () => {
        const resultado = somar(-1, 0);
        expect(resultado).toBe(-1)
    })
    
    it('Somar zero com um número negativo', () => {
        const resultado = somar(0, -2);
        expect(resultado).toBe(-2)
    })

    it('Somar um número com uma letra', () => {
        const resultado = somar(1, 'a');
        expect(resultado).toBe('Informe um número')
    })
    
    it('Somar uma letra com um número', () => {
        const resultado = somar('b', 2);
        expect(resultado).toBe('Informe um número')
    })
    
})

describe('Testes da função calculaSalario: ', () => {
    // faz os its (testes)
})