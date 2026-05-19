export default class Produto{
    nome = ""
    preco = 0.0
    estoque = 0
    constructor(linha){
        const propriedades = linha.split("|")
        const prod = {}
        propriedades.forEach(propriedade => {
            const valores = propriedade.split(":")
            prod[valores[0].trim()] = valores[1].trim() // descobrir pq da erro aq
        })
        this.nome = prod.nome
        this.preco = Number.parseFloat(prod.preco)
        this.estoque = Number.parseInt(prod.estoque)
    }
}