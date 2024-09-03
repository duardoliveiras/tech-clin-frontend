"use client";
import { AuthContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

interface iLogin {
  email: string;
  password: string;
}
export const Login = () => {
  const [loginData, setLoginData] = useState<iLogin>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer login");
      }
      const data = await response.json();
      setError(null);

      if (data) {
        localStorage.setItem("token", data.token);
        const user = {
          id: data.id,
          name: data.name,
          email: data.email,
        };
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        router.push("/");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex w-1/2 h-full justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white border text-black border-gray-300 w-[80%]  shadow-md rounded-lg py-2"
      >
        {error && <p className="text-red-500">{error}</p>}
        <div className="w-full justify-center flex">
          <h1 className="text-2xl font-bold text-black">Entrar</h1>
        </div>
        <div className="flex flex-col w-full gap-y-8 p-10">
          <div className="flex flex-col w-full px-2">
            <p className="font-bold text-black">Email:</p>
            <input
              className="w-full h-10 rounded-lg border-blue-800 border px-2"
              type="email"
              onChange={(e) =>
                setLoginData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder="seunome@email.com"
            />
          </div>
          <div className="flex flex-col w-full px-2">
            <p className="font-bold text-black">Password:</p>
            <input
              className="w-full h-10 rounded-lg border-blue-800 border px-2"
              onChange={(e) =>
                setLoginData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              type="password"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="flex bg-blue-500 rounded-lg p-2 text-white font-bold hover:bg-blue-600"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};
