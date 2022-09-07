const express = require("express")
const server = express()
server.listen(4000)

const database = require("./database")

//POST Criar Tarefas
server.post("/tarefas", function(req, res) {
    res.status(200)
    res.send("UAUU, Você está indo muito bem!")

})

//GET Listar Tarefas
server.get("/tasks", function(req, res) {
    database("tasks").
        then(function(data) {
                res.json(data)
        }).
        catch(function(error) {
            res.status(500)
            res.json(error)
        })
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
     res.status(404)
    res.send("NOT FOUND")
})


//console.log("oi")