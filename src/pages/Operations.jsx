import api from "../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Operations() {
    const [operations, setOperations] = useState([]);
    const navigate = useNavigate();

    // Charger la liste des opérations
    const loadOperations = () => {
        api.get("/operations")
            .then(res => setOperations(res.data))
            .catch(err => console.error("Erreur de chargement des opérations :", err));
    };

    useEffect(() => {
        loadOperations();
    }, []);

    // Suppression
    const handleDelete = (id) => {
        if (!confirm("Supprimer cette opération ?")) return;

        api.delete(`/operations/${id}`)
            .then(() => loadOperations())
            .catch(err => console.error("Erreur suppression :", err));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Liste des opérations</h1>

            <button
                onClick={() => navigate("/operations/new")}
                style={{ marginBottom: "20px" }}
            >
                ➕ Ajouter une opération
            </button>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {operations.map(o => (
                        <tr key={o.idOperation}>
                            <td>{o.idOperation}</td>
                            <td>{o.nom}</td>

                            <td>
                                <button
                                    onClick={() => navigate(`/operations/${o.idOperation}`)}
                                >
                                    ✏️ Modifier
                                </button>

                                <button
                                    onClick={() => handleDelete(o.idOperation)}
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

export default Operations;