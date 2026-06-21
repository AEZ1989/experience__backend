const express = require("express");
const app = express();
const Port = 3000;
const db = require("./database/db");

app.use(express.json());
app.use(express.static("public"));

db.run(`
CREATE TABLE IF NOT EXISTS commentaires (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    message TEXT
)
`);//creation d'un table sqlite3


const commentairesRoutes = require("./routes/commentairesRoutes");
app.use("/commentaires", commentairesRoutes);




app.listen(Port, () => {
  console.log("Serveur démarré au port 3000");
});
