import { LogIn } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="w-full bg-primary h-auto overflow-hidden justify-center flex ">
        <div className="w-full md:w-[80%] h-full font-semibold flex flex-row justify-between items-center uppercase gap-x-24">
          <div className="w-auto">
            <Image src={"/techclin.svg"} width={60} height={60} alt={"Logo"} />
          </div>

          <div className="w-full justify-center gap-x-3 items-center flex flex-row">
            <div className="w-auto h-auto text-xs bg-secondary rounded-lg p-3 flex items-center justify-center">
              Início
            </div>
            <div className="w-auto h-auto text-xs bg-secondary rounded-lg p-3 flex items-center justify-center">
              Parceiros
            </div>
            <div className="w-auto  h-auto text-xs bg-secondary rounded-lg p-3 flex items-center justify-center">
              Contato
            </div>
            <div className="w-auto  h-auto text-xs bg-secondary rounded-lg p-3 flex items-center justify-center">
              Agendar
            </div>
          </div>
          <div className="w-auto">
            <div className="w-auto  h-auto text-xs bg-third gap-x-2 rounded-lg p-2 flex items-center justify-center">
              <LogIn />
              <p>Entrar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white flex flex-col p-20">
        <div className="w-full h-auto border-2">
          <Image
            src={"/assets/doctors.svg"}
            width={500}
            height={500}
            alt="Médicos"
          />
        </div>
      </div>
    </main>
  );
}
