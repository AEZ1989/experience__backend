
/*let commentaires = []; // Tableau pour stocker les commentaires

 app.post("/commentaires", (req, res) => {
  const nouveauCommentaire = req.body.message;
  const nouveauName = req.body.name;

  commentaires.push({
    name: nouveauName,
    id: commentaires.length + 1,
    message: nouveauCommentaire,
  });

  res.send("Commentaire enregistré !");
});



app.get("/commentaires", (req, res) => {
  res.json(commentaires);
});

/*app.delete("/commentaires/:id", (req, res) => {
  const id = Number(req.params.id);
  commentaires =  commentaires.filter((com) => com.id !== id);
  res.send("Commentaire supprimé");
});


app.put("/commentaires/:id", (req, res) => {
  const newCommentaires = req.body.message;
  console.log(newCommentaires);
  const id = Number(req.params.id);
  const commentaire =  commentaires.find(
    (com) => com.id === id);
  commentaire.message = newCommentaires;
    res.send("Commentaire modifié");
    console.log(commentaire);
});


*/



/*avec sqlite*/

/*

app.get("/commentaires", (req, res) => {

  db.all(
    "SELECT * FROM commentaires",
    [],
    (err, rows) => {

      if (err) {
        console.error(err.message);
        return res.status(500).send("Erreur SQLite");
      }

      res.json(rows);

    }
  );

});

/*
app.post("/commentaires", (req, res) => {

  const nouveauCommentaire = req.body.message;
  const nouveauName = req.body.name;

  db.run(
    "INSERT INTO commentaires (name, message) VALUES (?, ?)",
    [nouveauName, nouveauCommentaire],
    (err) => {

      if (err) {
        console.error(err.message);
        return res.status(500).send("Erreur SQLite");
      }

      res.send("Commentaire enregistré !");
    }
  );

});


app.delete("/commentaires/:id", (req, res) => {

  const id = Number(req.params.id);

  db.run(
    "DELETE FROM commentaires WHERE id = ?",
    [id],
    (err) => {

      if (err) {
        console.error(err.message);
        return res.status(500).send("Erreur SQLite");
      }

      res.send("Commentaire supprimé");

    }
  );

});

app.put("/commentaires/:id", (req, res) => {

  const id = Number(req.params.id);
  const newCommentaires = req.body.message;

  db.run(
    "UPDATE commentaires SET message = ? WHERE id = ?",
    [
      newCommentaires ,
      id
    ],
    (err) => {

     if (err) {
        console.error(err.message);
        return res.status(500).send("Erreur SQLite");
      }

      res.send("Commentaire modifié");

    }
  );

});
*/