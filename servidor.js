const express = require('express')

const porta = 3000

const servidor = express()

servidor.use(express.json(0))

let array_roupas = [
    {
        "Descrisao":"Blusa nike",
        "Preco":150.00,
        "Cor":"Branca, Preta, Azul marinho",
        "Tamanho":"P,M,G e GG",
        "Marca":"Nike",
        "Tescido":"Dry fit"
    }
]

servidor.listen(porta,()=>{
    console.log("Servidor está rodando!")
})

servidor.get("/ver_catalogo",(req, res)=>{
    res.send(array_roupas)
})


servidor.post("/cadastrar_produto",(req, res)=>{
    const {Descricao, Preco, Cor , Tamanho, Marca} = req.body
    if(Descricao == ""){
        return res.send("Preencha a descrisão do produto!")
    }else if(Preco <=0){
        return res.send("Preencha o valor do produto!")
    }else if(Cor ==""){
        return res.send("Preencha a dor do produto!")
    }else if(Tamanho == ""){
        return res.send("Preencha o tamanho do produto!")
    }else if(Marca ==""){
        return res.send("Preencha a marca do pruduto!")
    }
    const produto = {Descricao, Preco, Cor , Tamanho, Marca}


    array_roupas.push(produto)
    res.send("Produto adicionado!")
})


servidor.delete("/delete_produto",(req,res)=>{
    const deletar = req.body.apagar
    array_roupas.splice(deletar,1)
    res.send("Produto apagado!")
})