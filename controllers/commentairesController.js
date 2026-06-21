const db = require("../database/db");
function getCommentaires(req, res) {
  db.all("SELECT * FROM commentaires", [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Erreur SQLite");
    } else res.json(rows);
  });
}
function PostCommentaires(req, res) {
  const nouveauCommentaire = req.body.message;
  const nouveauName = req.body.name;
  db.run(
    "INSERT INTO commentaires (name,message)VALUES (? , ?)",
    [nouveauName, nouveauCommentaire],
    (err) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send("erreur Sqlite");
      } else {
        res.send("commentaire enregistré");
      }
    },
  );
}

function Deletecommentaires(req, res) {
  const id = Number(req.params.id);
  db.run("DELETE FROM commentaires WHERE id= ?", [id], (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("erreur Sqlite");
    }
    res.send("commenaire supprimé");
  });
}

function UpdateCommentaire(req, res) {
  const id = Number(req.params.id);
  const newCommentaire = req.body.message;
  db.run(
    "UPDATE commentaires SET message = ?  WHERE id = ?" ,
   [newCommentaire, id],
    (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("erreur Sqlite");
      }
      res.send("commentaire modifier");
    },
  );
}
module.exports = {
  getCommentaires,
  PostCommentaires,
  Deletecommentaires,
  UpdateCommentaire,
};
