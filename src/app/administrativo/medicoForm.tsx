import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Especialidade } from "./clinicaForm";

type Clinica = {
  id: number;
  nome: string;
};

type MedicoDTO = {
  nome: string;
  dataNascimento: string;
  crm: string;
  cpf: string;
  email: string;
  especialidade: number | null;
  clinica: number | null;
};

const MedicoForm = () => {
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);
  const [clinicas, setClinicas] = useState<Clinica[]>([]);

  const [nome, setNome] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [crm, setCrm] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [especialidade, setEspecialidade] = useState<number | null>(0);
  const [clinica, setClinica] = useState<number | null>(0);

  const salvarMedico = async () => {
    const novoMedico: MedicoDTO = {
      nome,
      dataNascimento,
      crm,
      cpf,
      email,
      especialidade,
      clinica,
    };

    const loadingToast = toast.loading("Carregando...");
    try {
      const response = await fetch("http://localhost:4000/medico", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          crm,
          email,
          especialidade,
          clinica,
        }),
      });
      if (response.ok) {
        toast.update(loadingToast, {
          render: "Medico criado com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(loadingToast, {
          render: "Falha ao criar a médico. Tente novamente.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.update(loadingToast, {
        render: "Erro na requisição. Tente novamente.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    setNome("");
    setDataNascimento("");
    setCrm("");
    setCpf("");
    setEmail("");
    setEspecialidade(0);
    setClinica(0);
  };

  useEffect(() => {
    const getAllEspecialidades = async () => {
      const response = await fetch("http://localhost:4000/especialidades");
      const data = await response.json();
      setEspecialidades(data);
    };
    const getAllClinicas = async () => {
      const response = await fetch("http://localhost:4000/clinicas");
      const data = await response.json();
      setClinicas(data);
    };
    getAllEspecialidades();
    getAllClinicas();
  }, []);

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

          {especialidades.length > 0 && (
            <select
              value={especialidade ?? 0}
              onChange={(e) => setEspecialidade(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            >
              <option value={0} disabled>
                Selecione uma especialidade
              </option>
              {especialidades.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.descricao} {e.id}
                  </option>
                );
              })}
            </select>
          )}

          {clinicas.length > 0 && (
            <select
              value={clinica ?? 0}
              onChange={(e) => setClinica(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            >
              <option value={0} disabled>
                Selecione uma clinica
              </option>
              {clinicas.map((c) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.nome}
                  </option>
                );
              })}
            </select>
          )}

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
