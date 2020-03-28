const express = require("express")
const server = express()

const db = require("./db")


server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache: true, // boolean
})


server.get("/", function(req, res){

    db.all(` SELECT * FROM ideas`, function(err, rows){
        if (err) return console.log(err)

        const reverseIdeas = [...rows].reverse()

        let lastIdeas = []
        for (let idea of reverseIdeas){
           if (lastIdeas.length < 2){
                lastIdeas.push(idea)
           }
        }
    
    
        return res.render("index.html", { ideas: lastIdeas })
    })

    

})

server.get("/ideias", function(req, res){

    db.all(` SELECT * FROM ideas`, function(err, rows){
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados!")
        }
        const reverseIdeas = [...rows].reverse()
        return res.render("ideias.html", {ideas: reverseIdeas})
    })
   

})

server.post("/", function(req, res){
    //Inserir na tabela
    const query = `
    INSERT INTO ideas(
       image,
       title,
       category,
       description,
       link
    ) VALUES (?,?,?,?,?);`

    const values = [
         req.body.image,
         req.body.title,
         req.body.category,
         req.body.description,
         req.body.link
      ]
    
     db.run(query, values, function(err){
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        return res.redirect("/ideias")

       console.log(this)
    } )
   
})

server.post("/remover", function(req, res) {
    //Deletando dado na tabela
    const id =  req.body.id
    db.run('DELETE FROM ideas WHERE id = ?',id, function(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados!")
        } 
        return res.redirect("/ideias")
    })
})

server.listen(35000)