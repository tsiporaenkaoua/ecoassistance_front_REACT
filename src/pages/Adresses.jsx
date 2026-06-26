import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Adresses() {
  const [adresses, setAdresses] = useState([]);
  const navigate = useNavigate();

  // Charger la liste des adresses
  const loadAdresses = () => {
    api.get("/adresses")
      .then(res => setAdresses(res.data))
      .catch(err => console.error("Erreur chargement adresses :", err));
  };

  useEffect(() => {
    loadAdresses();
  }, []);

  // Suppression
  const handleDelete = (id) => {
    if (!confirm("Supprimer cette adresse ?")) return;
    //console.log("DELETE CLICKED", id);

    api.delete(`/adresses/${id}`)
      .then(() => loadAdresses()) // recharge la liste
      .catch(err => console.error("Erreur suppression :", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Liste des adresses</h1>

      <button
        onClick={() => navigate("/adresses/new")}
        style={{ marginBottom: "20px" }}
      >
        ➕ Ajouter une adresse
      </button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Adresse</th>
            <th>Code Postal</th>
            <th>Ville</th>
            <th>Gestionnaire</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {adresses.map(a => (
            <tr key={a.idAdresse}>
              <td>{a.idAdresse}</td>
              <td>{a.adresse}</td>
              <td>{a.codePostal}</td>
              <td>{a.ville}</td>
              <td>{a.idGestionnaire}</td>

              <td>
                <button onClick={() => navigate(`/adresses/${a.idAdresse}`)}>
                  ✏️ Modifier
                </button>

                <button
                  onClick={() => handleDelete(a.idAdresse)}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  🗑️ Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Adresses;

/*
OPTION 1 : Supprimer d’abord le suivi lié :
Supprimer d’abord le suivi lié :
DELETE /api/suiviOperations/24/318
puis supprimer l’adresse 24.

option 2 : Ajouter une suppression en cascade dans la base de données :
Ajouter une suppression en cascade dans la base de données :
quand tu supprimes une adresse, ses suiviOperation liés sont supprimés automatiquement.

option 3 : A PRIVILEGIER 
Empêcher la suppression côté front avec un message :
“Impossible de supprimer cette adresse car elle est utilisée dans un suivi d’opération.”
*/
