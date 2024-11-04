import { AuthContext } from "@/context/UserContext";
import Image from "next/image";
import React, { useContext } from "react";

const ProfileForm: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full flex justify-center gap-x-8">
      <div className="w-auto flex flex-col justify-center items-center">
        <div className="flex w-20 h-20 rounded-full border-2 justify-center items-center overflow-hidden">
          <Image
            src="/assets/profile.png"
            alt="profile"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
        <button>Alterar Foto</button>
      </div>

      <div className="w-[80%] columns-2">
        <label className="block mt-2 font-semibold">Nome Completo:</label>
        <input
          type="text"
          placeholder="Nome completo"
          className="bg-red-500s w-full p-2 mt-1 rounded-md border"
          value={user?.name}
        />

        <label className="block mt-2 font-semibold">Tipo de Usuário:</label>
        <input
          type="text"
          placeholder="Tipo de usuário"
          className="w-full p-2 mt-1 rounded-md border"
        />

        <label className="block mt-2 font-semibold">CPF:</label>
        <input
          type="text"
          placeholder="CPF"
          className="w-full p-2 mt-1 rounded-md border"
        />

        <label className="block mt-2 font-semibold">Sexo:</label>
        <input
          type="text"
          placeholder="Sexo"
          className="w-full p-2 mt-1 rounded-md border"
        />

        <label className="block mt-2 font-semibold">Endereço:</label>
        <input
          type="text"
          placeholder="Endereço"
          className="w-full p-2 mt-1 rounded-md border"
        />

        <label className="block mt-2 font-semibold">Número:</label>
        <input
          type="text"
          placeholder="Número"
          className="w-full p-2 mt-1 rounded-md border"
        />

        <label className="block mt-2 font-semibold">Complemento:</label>
        <input
          type="text"
          placeholder="Complemento"
          className="w-full p-2 mt-1 rounded-md border"
        />

        <label className="block mt-2 font-semibold">UF:</label>
        <input
          type="text"
          placeholder="UF"
          className="w-full p-2 mt-1 rounded-md border"
        />

        <label className="block mt-2 font-semibold">E-mail:</label>
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-2 mt-1 rounded-md border"
          value={user?.email}
        />

        <button className="cursor-pointer mt-4 p-2 bg-third text-white rounded-md">
          Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
