const formulaire = document.getElementById("formulaire");
const affichage = document.getElementById("commentaires");
const htmlName=document.getElementById("bname");  
const btndelete =document.getElementById('delete') ;    
const btnModif =document.getElementById('modifier') ;    

formulaire.addEventListener("submit", async (event) => {
  
  
  location.reload();
  const message = document.getElementById("message").value;
  const name = document.getElementById("name").value;

  // Envoie le message au backend
  const response = await fetch("/commentaires", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message,name:name}),
  });
  
  async function chargerCommentaires() {
    const response = await fetch("/commentaires");

    const commentaires = await response.json();
    console.log(commentaires);
  }

  const result = await response.text();
  console.log(result);
  await chargerCommentaires();
});

async function Affiche() {

const response = await fetch("/commentaires");
const com = await response.json();
  
 com.forEach((commentaire) => {
   
    affichage.innerHTML += 
    `<div class="ComInbacktite"> ${commentaire.message}  </div> `;
   htmlName.innerHTML +=  `<div class="nameInBacktite"> ${commentaire.name}</div>    
   `
   btndelete.innerHTML += `
           <div class="blockInBactiteSupprimer">   
        <button onclick="supprimer(${commentaire.id})">
            🗑️
        </button
    `;
 btnModif.innerHTML += `
<div class="blockInBactiteModifier">
<button onclick="modifier(${commentaire.id})">
    ✏️
</button>
</div>
`;
});
}

async function supprimer(id) {
    await fetch(`/commentaires/${id}`, {
        method: "DELETE"
    });
     location.reload();
}

async function modifier(id) {
    const nouveauMessage =
    prompt("Nouveau message");
     location.reload();

    await fetch(`/commentaires/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            message: nouveauMessage
        })
      });
}

Affiche();
