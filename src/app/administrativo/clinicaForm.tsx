import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { MapRecenter } from "./map/mapRecenter";

// Importacao dinamica das bibliotecas de mapa para evitar problemas no servidor
const DynamicMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const DynamicTileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const DynamicMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

type FullAddress = {
  cidade: string;
  estado: string;
  rua: string;
  cep: string;
  lat: number | null;
  lon: number | null;
};

export type Especialidade = {
  id: number;
  descricao: string;
};

const ClinicForm = () => {
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);
  const [selectedEspecialidade, setSelectedEspecialidade] = useState<number[]>(
    []
  );
  const [clinicName, setClinicName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [address, setAddress] = useState("");
  const [fullAddress, setFullAddress] = useState<FullAddress>({
    cidade: "",
    estado: "",
    rua: "",
    cep: "",
    lat: null,
    lon: null,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [position, setPosition] = useState<[number, number]>([
    -15.5987, -56.0991,
  ]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      // Usar FileReader para gerar uma URL de visualização da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setImagePreview(null);
    }
  };

  // Função para lidar com a pesquisa de endereço
  const handleAddressSearch = async () => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        address
      )}&format=json&addressdetails=1&limit=1`
    );
    const results = await response.json();
    if (results && results.length > 0) {
      const firstResult = results[0];

      setFullAddress({
        cidade: firstResult.address.city,
        estado: firstResult.address.state,
        rua: firstResult.address.road,
        cep: firstResult.address.postcode,
        lat: Number(firstResult.lat),
        lon: Number(firstResult.lon),
      });

      const coords: [number, number] = [
        parseFloat(firstResult.lat),
        parseFloat(firstResult.lon),
      ];
      setPosition(coords);
    } else {
      console.error("Endereço não encontrado.");
    }
  };

  const handleCreateClinica = async () => {
    const loadingToast = toast.loading("Carregando...");

    try {
      if (!selectedFile) {
        toast.update(loadingToast, {
          render: "Selecione uma imagem!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        return;
      }
      const formData = new FormData();
      formData.append("file", selectedFile); // Adicione a imagem
      formData.append(
        "data",
        JSON.stringify({
          ...fullAddress,
          cnpj: cnpj,
          nome: clinicName,
          especialidadeIds: selectedEspecialidade,
        })
      );

      const response = await fetch("http://localhost:4000/clinica", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.update(loadingToast, {
          render: "Clínica criada com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(loadingToast, {
          render: "Falha ao criar a clínica. Tente novamente.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.update(loadingToast, {
        render: "Erro na requisição. Tente novamente.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  // Função para adicionar/remover especialidades
  const toggleSpecialty = (id: number) => {
    setSelectedEspecialidade((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const getAllEspecialidades = async () => {
      const response = await fetch("http://localhost:4000/especialidades");
      const data = await response.json();
      setEspecialidades(data);
    };
    getAllEspecialidades();
  }, []);

  return (
    <div className="p-8 bg-white overflow-auto text-gray-700 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Criar Clínica</h2>
      {/* Nome da Clínica */}
      <div className="mb-4">
        <label className="block text-gray-700">Nome</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={clinicName}
          onChange={(e) => setClinicName(e.target.value)}
        />
      </div>
      {/* CNPJ */}
      <div className="mb-4">
        <label className="block text-gray-700">CNPJ</label>
        <InputMask
          mask="99.999.999/9999-99"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      {/* Endereço */}
      <div className="mb-4">
        <label className="block text-gray-700">Endereço</label>
        <div className="flex">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 bg-primary text-white rounded-lg"
            onClick={handleAddressSearch}
          >
            Buscar
          </button>
        </div>
      </div>
      {/* Mapa */}
      <div className="mb-4">
        <label className="block text-gray-700">Localização no mapa</label>
        <DynamicMapContainer
          center={position}
          zoom={15}
          style={{ height: "300px", width: "100%" }}
        >
          <DynamicTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <DynamicMarker position={position} />
          <MapRecenter position={position} />
        </DynamicMapContainer>
      </div>
      {/* Upload de Foto */}
      <div className="mb-4">
        <label className="block text-gray-700">Foto</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2"
        />
        {selectedFile && (
          <p className="text-gray-600 mt-2">
            Arquivo selecionado: {selectedFile.name}
          </p>
        )}
        {imagePreview && (
          <div className="mt-4">
            <Image
              src={imagePreview}
              alt="Preview"
              className="border rounded-lg"
              width={300} // Adjust as necessary
              height={200} // Adjust as necessary
              style={{ maxHeight: "200px", maxWidth: "100%" }} // Limit image size
            />
          </div>
        )}
      </div>
      {/* Especialidades */}
      <div className="mb-4">
        <label className="block text-gray-700">Especialidades</label>
        <div className="flex space-x-2">
          {especialidades.map((specialty) => (
            <button
              key={specialty.id}
              className={`px-4 py-2 border rounded-lg  first-letter:uppercase ${
                selectedEspecialidade.includes(specialty.id)
                  ? "bg-primary text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => toggleSpecialty(specialty.id)}
            >
              {specialty.descricao}
            </button>
          ))}
        </div>
      </div>
      {/* Botão de Salvar */}
      <button
        className="w-full py-2 px-4 bg-green-500 text-white rounded-lg"
        onClick={handleCreateClinica}
      >
        Salvar
      </button>
    </div>
  );
};

export default ClinicForm;
