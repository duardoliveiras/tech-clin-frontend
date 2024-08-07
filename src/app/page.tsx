import {
  AlarmClock,
  Check,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  LogIn,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 overflow-y-scroll">
      <div className="w-full bg-primary overflow-hidden justify-center flex h-16">
        <div className="w-full md:w-[80%] h-full font-semibold flex flex-row justify-between items-center uppercase gap-x-24">
          <div className="w-auto">
            <Image src={"/techclin.svg"} width={80} height={80} alt={"Logo"} />
          </div>

          <div className="w-full justify-center gap-16 text-white items-center grid grid-cols-4">
            <p className="cursor-pointer hover:text-green-600 text-xl tracking-widest">
              início
            </p>
            <p className="cursor-pointer hover:text-green-600 text-xl tracking-widest">
              parceiros
            </p>
            <p className="cursor-pointer hover:text-green-600 text-xl tracking-widest">
              contato
            </p>
            <p className="cursor-pointer hover:text-green-600 text-xl tracking-widest">
              agendar
            </p>
          </div>
          <div className="w-40">
            <div className="w-auto h-auto text-l text-white hover:bg-green-600 cursor-pointer rounded-lg p-2 flex items-center justify-center bg-green-700">
              <LogIn size={28} />
              <p>Entrar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white flex flex-col p-16">
        <div className="w-full h-auto flex flex-row">
          <div className="w-1/2 flex overflow-hidden">
            <Image
              src={"/assets/doctors.svg"}
              width={400}
              height={400}
              style={{ opacity: 0.8 }}
              alt="Médicos"
            />
          </div>
          <div className="w-full flex flex-col ">
            <div className="w-full flex items-center pl-5 gap-x-2 text-3xl text-green-700 uppercase font-bold">
              <Stethoscope size={40} />
              <p>sua saúde em primeiro lugar</p>
            </div>
            <div className="mt-5 w-full pl-10 gap-y-10 text-2xl flex flex-col text-gray-600">
              <div className="w-full items-center gap-x-2  flex">
                <AlarmClock className="text-green-700" />
                <p>Facilidade em marcar suas consultas e exames.</p>
              </div>
              <div className="w-full items-center gap-x-2  flex">
                <Check className="text-green-700" />
                <p>Marque quando quiser e de onde estiver.</p>
              </div>
              <div className="w-full items-center gap-x-2  flex">
                <LayoutGrid className="text-green-700" />
                <p>Tudo em um só lugar.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-80 flex flex-row mt-24 rounded-xl">
          <div className="w-16 h-full flex bg-third opacity-80 justify-center items-center text-white rounded-tl-lg rounded-bl-lg">
            <ChevronLeft size={32} cursor={"pointer"} />
          </div>
          <div className="w-full h-full bg-secondary flex flex-col items-center p-3">
            <div className="font-semibold text-white text-2xl mb-6 tracking-widest uppercase flex flex-col">
              Clínicas
              <div className="border-b-2 border-green-700"></div>
            </div>
            <div className="grid grid-cols-4 gap-x-10">
              <div className="flex justify-center items-center w-full h-full hover:scale-105 transform transition-transform duration-200">
                <Image
                  src={"/clinica.jpg"}
                  width={320}
                  height={320}
                  alt="Clinica 1"
                />
              </div>
              <div className="flex justify-center items-center w-full h-full hover:scale-105 transform transition-transform duration-200">
                <Image
                  src={"/clinica.jpg"}
                  width={320}
                  height={320}
                  alt="Clinica 1"
                />
              </div>
              <div className="flex justify-center items-center w-full h-full hover:scale-105 transform transition-transform duration-200">
                <Image
                  src={"/clinica.jpg"}
                  width={320}
                  height={320}
                  alt="Clinica 1"
                />
              </div>
              <div className="flex justify-center items-center w-full h-full hover:scale-105 transform transition-transform duration-200">
                <Image
                  src={"/clinica.jpg"}
                  width={320}
                  height={320}
                  alt="Clinica 1"
                />
              </div>
            </div>
          </div>
          <div className="w-16 h-full flex bg-third opacity-80 justify-center items-center text-white rounded-tr-lg rounded-br-lg">
            <ChevronRight size={32} cursor={"pointer"} />
          </div>
        </div>
      </div>
    </main>
  );
}
