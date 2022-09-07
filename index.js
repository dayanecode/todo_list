const express = require("express")
const server = express()
server.listen(4000)

//POST Criar Tarefas
server.post("/tarefas", function(req, res) {
    //res.send("Eu sou um POST")
    res.status(404)
    res.send("NOT FOUND")

})

//GET Listar Tarefas
server.get("/tarefas", function(req, res) {
    //res.send("Eu sou um GET por ID")
    res.status(404)
    res.send("NOT FOUND")

})

//PATCH Listar uma tarefa específica
server.patch("/tarefas/:id", function(req, res) {
    //req.params.id
    //res.send(`Eu sou um PATCH em ${req.params.id}`)
    res.status(404)
    res.send("NOT FOUND")
})

//DELETE 
server.delete("/tarefas/:id", function(req, res) {
    //res.send("Eu sou DELETE")
    res.status(404)
    res.send("NOT FOUND")
})


//console.log("oi")
//POST - Cadastrar
//GET - Obter
//DELETE - Deletar um item da lista
