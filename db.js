const sqlite3 = require('sqlite3').verbose()

const db =  new sqlite3.Database('./WORKSHOPDEV.bd')

db.serialize(function(){
    //Criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    //Inserir na tabela
    //const query = `
    //INSERT INTO ideas(
     //   image,
       // title,
       //category,
     //   description,
        //link
   // ) VALUES (?,?,?,?,?);`


    //const values = [
      //  "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        //"Curso de Programação",
        //"Estudo",
        //"alohaalohaalohaalohaalohaalohaalohaalohaaloa",
        //"https://google.com.br"
    //]
    
  //  db.run(query, values, function(err){
  //     if (err) return console.log(err)

   //     console.log(this)
   // } )

    //db.run(`DELETE FROM ideas WHERE id = ?`,[1], function(){
      //  if (err) return console.log(err)

        //console.log("DELETEI", this)
    //})

    //db.all(` SELECT * FROM ideas`, function(err, rows){
    //  if (err) return console.log(err)

     //   console.log(rows)
    //})

})

module.exports = db
