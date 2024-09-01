"use client";
import { useState } from "react";
import Header from "../Header";
import { Login } from "./Login";
import { Register } from "./Register";

interface Login {
  nome: string;
  email: string;
  password: string;
}
export default function LoginPage() {
  const [loginData, setLoginData] = useState<Login>({
    nome: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-white ">
        <Header />
        <div className="flex flex-row w-full h-full p-5 gap-x-2">
          <Login />
          <Register />
        </div>
      </div>
    </>
  );
}