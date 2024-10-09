"use client";
import { useEffect, useState } from "react";

interface iRegister {
  name: string;
  email: string;
  password: string;
}

export const Register = () => {
  const [register, setRegister] = useState<iRegister>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>();

  const fetchRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(register);
      const response = await fetch("http://localhost:4000/criar-usuario", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });
      console.log(response);
      const data = await response.json();

      if (!response.ok) {
        setError("Erro ao realizar a requisição");
        return;
      }
    } catch (err: any) {
      //setError(err.message);
      console.error(err);
    }
  };

  return (
    <div className="flex w-1/2 h-full justify-center items-center">
      <form
        className="flex flex-col bg-white border text-black border-gray-300 w-[80%]  shadow-md rounded-lg py-2"
        onSubmit={fetchRegister}
      >
        <div className="w-full justify-center flex">
          <h1 className="text-2xl font-bold text-black">Cadastre-se Já</h1>
        </div>
        <p className="text-red-500">{error}</p>
        <div className="flex flex-col w-full gap-y-8 p-10">
          <div className="flex flex-col w-full px-2">
            <p className="font-bold text-black">Nome:</p>
            <input
              className="w-full h-10 rounded-lg border-blue-800 border px-2"
              type="text"
              placeholder="John Smith"
              onChange={(e) =>
                setRegister((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col w-full px-2">
            <p className="font-bold text-black">Email:</p>
            <input
              className="w-full h-10 rounded-lg border-blue-800 border px-2"
              type="email"
              placeholder="seunome@email.com"
              onChange={(e) =>
                setRegister((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col w-full px-2">
            <p className="font-bold text-black">Password:</p>
            <input
              className="w-full h-10 rounded-lg border-blue-800 border px-2"
              type="password"
              onChange={(e) =>
                setRegister((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="flex bg-blue-500 rounded-lg p-2 text-white font-bold hover:bg-blue-600"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};
