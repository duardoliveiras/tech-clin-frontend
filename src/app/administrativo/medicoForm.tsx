import { useState } from "react";

const MedicoForm = () => {
  const [nome, setNome] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [crm, setCrm] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [especialidade, setEspecialidade] = useState<string>("");
  const salvarMedico = () => {
    const novoMedico = {
      nome,
      dataNascimento,
      crm,
      cpf,
      email,
      especialidade,
    };

    setNome("");
    setDataNascimento("");
    setCrm("");
    setCpf("");
    setEmail("");
    setEspecialidade("");
  };

  return (
    <div className="flex h-full bg-gray-100 text-gray-700">
      <div className="flex-1 p-8 bg-gray-100">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md space-y-4">
          <h1 className="text-xl font-bold text-center">Cadastro de Médico</h1>

          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border p-2 rounded-md"
          />

          <input
            type="date"
            placeholder="Data de nascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            className="w-full border p-2 rounded-md"
          />

          <input
            type="text"
            placeholder="CRM"
            value={crm}
            onChange={(e) => setCrm(e.target.value)}
            className="w-full border p-2 rounded-md"
          />

          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full border p-2 rounded-md"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded-md"
          />

          <select
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Especialidade</option>
            <option value="Cardiologia">Cardiologia</option>
            <option value="Dermatologia">Dermatologia</option>
            <option value="Pediatria">Pediatria</option>
            <option value="Ortopedia">Ortopedia</option>
          </select>

          <button
            onClick={salvarMedico}
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicoForm;
