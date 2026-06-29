import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Adresses from "./pages/Adresses";
// import AdresseForm from "./pages/AdresseForm";
import Nav from "./components/Nav";

// import Syndics from "./pages/Syndics";
// import SyndicForm from "./pages/SyndicForm";

import Gestionnaires from "./pages/Gestionnaires";
// import GestionnaireForm from "./pages/GestionnaireForm";

import Operations from "./pages/Operations";
// import OperationForm from "./pages/OperationForm";

// // Associations
// import GestionnairesSyndics from "./pages/GestionnairesSyndics";
// import GestionnaireSyndicForm from "./pages/GestionnaireSyndicForm";

// import SuiviOperations from "./pages/SuiviOperations";
// import SuiviOperationForm from "./pages/SuiviOperationForm";

import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>

        {/*Adresses*/}
        {/* Redirection de la racine */}
        <Route path="/" element={<Navigate to="/adresses" />} />
        <Route path="/adresses" element={<Adresses />} />
        {/* <Route path = "/adresses/new" element = {<AdresseForm/>} />
        <Route path = "/adresses/:id" element = {<AdresseForm/>} /> */}

        <Route path="/gestionnaires" element={<Gestionnaires/>} />

        <Route path="/operations" element={<Operations/>} />






      </Routes>
    </BrowserRouter>
  );
}

export default App
