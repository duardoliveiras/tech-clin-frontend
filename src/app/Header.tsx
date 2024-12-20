"use client";

import { AuthContext } from "@/context/UserContext";
import { LogIn } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import ContactModal from "./components/contactModal";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const router = useRouter();

  return (
    <div className="w-full bg-white border-b h-auto overflow-hidden justify-center flex ">
      <div className="w-full md:w-[80%] h-full font-semibold flex flex-row justify-between items-center uppercase gap-x-24">
        <div className="w-auto p-1">
          <Image src={"/tech_clin.png"} width={60} height={60} alt={"Logo"} />
        </div>

        <div className="w-full justify-center gap-x-5 text-gray-800 items-center flex flex-row">
          <p
            className="cursor-pointer hover:text-green-600 select-none"
            onClick={() => router.push("/")}
          >
            inicio
          </p>
          <p className="cursor-pointer hover:text-green-600 select-none">
            parceiros
          </p>
          <p
            className="cursor-pointer hover:text-green-600 select-none"
            onClick={openModal}
          >
            contato
          </p>
          <ContactModal isOpen={isModalOpen} onClose={closeModal} />
          <p
            className="cursor-pointer hover:text-green-600 select-none"
            onClick={() => {
              router.push("/agendamento");
            }}
          >
            agendar
          </p>
        </div>
        <div className="w-auto">
          <div className="w-auto  h-auto text-xs text-gray-800   cursor-pointer gap-x-2 rounded-lg p-2 flex items-center justify-center">
            {!user ? (
              <div
                className="flex justify-center select-none hover:text-green-600 items-center gap-x-2"
                onClick={() => {
                  router.push("/login");
                }}
              >
                <LogIn />
                <p>Entrar</p>
              </div>
            ) : (
              <div className="flex gap-x-2">
                <div className="flex w-10 h-10 rounded-full border-2 justify-center items-center overflow-hidden">
                  <Image
                    src="/assets/profile.png"
                    alt="profile"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center select-none items-center gap-x-2">
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
