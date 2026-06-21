const express = require("express");

const router = express.Router();

const {
  getCommentaires,
   PostCommentaires,
     Deletecommentaires,
     UpdateCommentaire,
} = require("../controllers/commentairesController");

router.get("/", getCommentaires);
router.post("/", PostCommentaires)
router.delete("/:id",Deletecommentaires)
router.put("/:id",UpdateCommentaire)




module.exports = router;