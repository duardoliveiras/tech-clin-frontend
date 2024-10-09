"use client";
import { useState } from "react";

interface Horario {
  medico: string;
  data: string;
  inicio: string;
  fim: string;
  status: string;
}

export const GerarHorarios = () => {
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [clinica, setClinica] = useState<string>("");
  const [medico, setMedico] = useState<string>("");
  const [dataInicial, setDataInicial] = useState<string>("");
  const [dataFinal, setDataFinal] = useState<string>("");

  const gerarHorarios = () => {
    const novosHorarios: Horario[] = [
      {
        medico: "Dr. Rubens",
        data: "10/10/2024",
        inicio: "9:00",
        fim: "9:15",
        status: "VAGO",
      },
      {
        medico: "Dr. Rubens",
        data: "10/10/2024",
        inicio: "9:15",
        fim: "9:30",
        status: "VAGO",
      },
      {
        medico: "Dr. Rubens",
        data: "10/10/2024",
        inicio: "9:30",
        fim: "9:45",
        status: "VAGO",
      },
    ];
    setHorarios(novosHorarios);
  };

  const salvarHorarios = () => {
    console.log("Horários salvos: ", horarios);
  };

  return (
    <div className="flex-1 p-8 bg-gray-100 text-black">
      <div className="flex space-x-4 mb-6">
        <select
          className="border p-2"
          value={clinica}
          onChange={(e) => setClinica(e.target.value)}
        >
          <option value="">Selecione a clínica</option>
          <option value="clinicaA">Clínica A</option>
        </select>

        <select
          className="border p-2"
          value={medico}
          onChange={(e) => setMedico(e.target.value)}
        >
          <option value="">Selecione o médico</option>
          <option value="drRubens">Dr. Rubens</option>
        </select>

        <input
          type="date"
          value={dataInicial}
          onChange={(e) => setDataInicial(e.target.value)}
          className="border p-2"
        />
        <input
          type="date"
          value={dataFinal}
          onChange={(e) => setDataFinal(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={gerarHorarios}
          className="py-2 px-4 bg-green-500 text-white"
        >
          Gerar horários
        </button>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Médico</th>
            <th className="border px-4 py-2">Data</th>
            <th className="border px-4 py-2">Início</th>
            <th className="border px-4 py-2">Fim</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((horario, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{horario.medico}</td>
              <td className="border px-4 py-2">{horario.data}</td>
              <td className="border px-4 py-2">{horario.inicio}</td>
              <td className="border px-4 py-2">{horario.fim}</td>
              <td className="border px-4 py-2">{horario.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={salvarHorarios}
        className="mt-4 py-2 px-4 bg-blue-500 text-white"
      >
        Salvar
      </button>
    </div>
  );
};
