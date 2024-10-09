"use client";
// pages/administrativo.tsx
import { useState } from "react";
import ClinicaForm from "./clinicaForm";
import { GerarHorarios } from "./gerarHorarios";
import MedicoForm from "./medicoForm";

const Administrativo = () => {
  const [activeScreen, setActiveScreen] = useState<string>("medico");

  const renderScreen = () => {
    switch (activeScreen) {
      case "clinica":
        return <ClinicaForm />;
      case "medico":
        return <MedicoForm />;
      case "gerarHorarios":
        return <GerarHorarios />;
      default:
        return <ClinicaForm />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-primary p-4 flex flex-col space-y-4">
        <button
          className={`py-2 px-4 rounded-lg ${
            activeScreen === "clinica"
              ? "bg-white text-gray-700"
              : "bg-gray-300 text-white"
          }`}
          onClick={() => setActiveScreen("clinica")}
        >
          Clinica
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            activeScreen === "medico"
              ? "bg-white text-gray-700"
              : "bg-gray-300 text-white"
          }`}
          onClick={() => setActiveScreen("medico")}
        >
          Médico
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            activeScreen === "gerarHorarios"
              ? "bg-white text-gray-700"
              : "bg-gray-300 text-hite"
          }`}
          onClick={() => setActiveScreen("gerarHorarios")}
        >
          Gerar Horários
        </button>
      </div>
      <div className="flex-1 p-8 bg-white overflow-auto">{renderScreen()}</div>
    </div>
  );
};

export default Administrativo;
