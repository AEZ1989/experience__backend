const sqlite3 = require("sqlite3").verbose();


const db = new sqlite3.Database("./database/commentaires.db",(err)=>{

 if(err){
    console.log(err.message)
 }
 else{
    console.log("connection a SqLite 3 à Réussi")
 }
}    
);
module.exports =db