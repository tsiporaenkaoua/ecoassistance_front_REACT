import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import api from "../services/api";

function Gestionnaires() {
    const [gestionnaires, setGestionnaires] = useState([]);
    const navigate = useNavigate();


    //Charger la liste des gestionnaires
    const loadGestionnaires = () => {
        api.get("/gestionnaires")
        .then(res => setGestionnaires(res.data))
        .catch(err => console.error("Erreur chargement gestionnaires :", err));
    };

    useEffect(() => {
        loadGestionnaires();
    }, []);

    //Suppression
    const handleDelete = (id) => {
        if(!confirm("Supprimer ce gestionnaire")) return; //affiche une boîte de dialogue avec un message et deux boutons :OK OU Annuler

        api.delete(`/gestionnaires/${id}`)
        .then(() => loadGestionnaires())
        .catch(err => console.error("Erreur suppression :", err));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Liste des gestionnaires</h1>

            <button
                onClick={() => navigate("/gestionnaires/new")}
                style={{ marginBottom: "20px" }}
            >
                ➕ Ajouter un gestionnaire
            </button> 

            <table border="1" cellPadding="10">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Actif</th>
                    <th>Actions</th>
                </tr>
                </thead>  

                <tbody>
                    {gestionnaires.map(g => (
                        <tr key={g.idGestionnaire}>
                            <td>{g.idGestionnaire}</td>
                            <td>{g.nom}</td>
                            <td>{g.prenom}</td>
                            <td>{g.actif===1 ? "Oui" : "Non"}</td>

                            <td>
                                <button onClick={() => navigate(`/gestionnaires/${g.idGestionnaire}`)}>
                                ✏️ Modifier
                                </button>

                                <button
                                onClick={() => handleDelete(g.idGestionnaire)}
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

export default Gestionnaires;

