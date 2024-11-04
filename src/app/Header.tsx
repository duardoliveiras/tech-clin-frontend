"use client";

import { AuthContext } from "@/context/UserContext";
import { LogIn } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  return (
    <div className="w-full bg-white border-b h-auto overflow-hidden justify-center flex ">
      <div className="w-full md:w-[80%] h-full font-semibold flex flex-row justify-between items-center uppercase gap-x-24">
        <div className="w-auto p-1">
          <Image src={"/tech_clin.png"} width={60} height={60} alt={"Logo"} />
        </div>

        <div className="w-full justify-center gap-x-5 text-gray-800 items-center flex flex-row">
          <p
            className="cursor-pointer hover:text-green-600"
            onClick={() => router.push("/")}
          >
            inicio
          </p>
          <p className="cursor-pointer hover:text-green-600">parceiros</p>
          <p className="cursor-pointer hover:text-green-600">contato</p>
          <p className="cursor-pointer hover:text-green-600">agendar</p>
        </div>
        <div className="w-auto">
          <div className="w-auto  h-auto text-xs text-gray-800   cursor-pointer gap-x-2 rounded-lg p-2 flex items-center justify-center">
            {!user ? (
              <div
                className="flex justify-center hover:text-green-600 items-center gap-x-2"
                onClick={() => {
                  router.push("/login");
                }}
              >
                <LogIn />
                <p>Entrar</p>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-x-2">
                <p
                  className="hover:text-green-600"
                  onClick={() => {
                    router.push("/profile");
                  }}
                >
                  {user.name}
                </p>
                <p>/</p>
                <p className="hover:text-green-600" onClick={() => logout()}>
                  Sair
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
