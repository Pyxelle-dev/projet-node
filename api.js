import axios from "axios";

// Exemple : API publique JSONPlaceholder
// On va récupérer une liste d'utilisateurs fictifs
axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    console.log("Liste des utilisateurs :");
    console.log(response.data);
  })
  .catch(error => {
    console.error("Erreur lors de la requête :", error);
  });