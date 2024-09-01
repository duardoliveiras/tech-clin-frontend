import { LogIn } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full bg-primary h-auto overflow-hidden justify-center flex ">
      <div className="w-full md:w-[80%] h-full font-semibold flex flex-row justify-between items-center uppercase gap-x-24">
        <div className="w-auto">
          <Image src={"/techclin.svg"} width={60} height={60} alt={"Logo"} />
        </div>

        <div className="w-full justify-center gap-x-5 text-white items-center flex flex-row">
          <p className="cursor-pointer hover:text-green-600">inicio</p>
          <p className="cursor-pointer hover:text-green-600">parceiros</p>
          <p className="cursor-pointer hover:text-green-600">contato</p>
          <p className="cursor-pointer hover:text-green-600">agendar</p>
        </div>
        <div className="w-auto">
          <div className="w-auto  h-auto text-xs text-white hover:text-green-600 cursor-pointer gap-x-2 rounded-lg p-2 flex items-center justify-center">
            <LogIn />
            <p>Entrar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
