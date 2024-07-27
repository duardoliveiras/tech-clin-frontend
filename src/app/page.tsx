import { LogIn } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="w-full bg-primary h-auto px-24">
        <div className="w-full h-full font-semibold flex flex-row justify-between items-center uppercase gap-x-24">
          <div className="w-1/5">
            <Image src={"/techclin.svg"} width={90} height={90} alt={"Logo"} />
          </div>

          <div className="w-full justify-between px-24 flex flex-row">
            <div className="w-24 h-12 bg-secondary rounded-lg p-3 flex items-center justify-center">
              Início
            </div>
            <div className="min-w-24 w-auto h-12 bg-secondary rounded-lg p-3 flex items-center justify-center">
              Parceiros
            </div>
            <div className="min-w-24 w-auto  h-12 bg-secondary rounded-lg p-3 flex items-center justify-center">
              Contato
            </div>
            <div className="w-auto h-12 bg-secondary rounded-lg p-3 flex items-center justify-center">
              Meu Perfil
            </div>
            <div className="min-w-24 w-auto  h-12 bg-secondary rounded-lg p-3 flex items-center justify-center">
              Agendar
            </div>
          </div>
          <div className="w-1/5">
            <div className="min-w-24 w-auto  gap-x-4 h-12 bg-third rounded-lg p-3 flex items-center justify-center">
              <LogIn />
              <p>Entrar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full full bg-white flex flex-col p-20">
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
