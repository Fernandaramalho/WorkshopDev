const express = require("express")
const server = express()


const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Curso de Programação",
        category:"Estudo",
        description:"alohaalohaalohaalohaalohaalohaalohaalohaaloa",
        url:"https://google.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercício",
        category:"Saúde",
        description:"ExercícioExercícioExercícioExercícioExercíciio",
        url:"https://google.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category:"Mentalidade",
        description:"MeditaçãoMeditaçãoMeditaçãoMeditaçãoMeão",
        url:"https://google.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "karaokê",
        category:"Diversão em família",
        description:"adsdskkkkkkkkkkkkkkkkkkkkkkkkk",
        url:"https://google.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729021.svg",
        title: "Vídeo-Game",
        category:"Diversão",
        description:"gamegamegamegamegamegamegamegamegame",
        url:"https://google.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729028.svg",
        title: "Churrasco",
        category:"Lazer",
        description:"ChurrascadaChurrascadaChurrascadaChurrascada",
        url:"https://google.com.br"
    },
]


server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache: true, // boolean
})


server.get("/", function(req, res){
    const reverseIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reverseIdeas){
       if (lastIdeas.length < 2){
            lastIdeas.push(idea)
       }
    }


    return res.render("index.html", { ideas: lastIdeas })

})

server.get("/ideias", function(req, res){
    const reverseIdeas = [...ideas].reverse()
    return res.render("ideias.html", {ideas: reverseIdeas})

})

server.listen(35000)