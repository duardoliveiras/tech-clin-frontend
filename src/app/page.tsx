import {
  AlarmClock,
  Check,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import ImageSlider from "./components/imageSlider";
import Footer from "./footer";

export default function Home() {
  const images = [
    {
      src: "/assets/clinicas/1.jpeg",
      title: "POR DO SOL",
      subtitle: "CLÍNICA POR DO SOL",
    },
    {
      src: "/assets/clinicas/2.jpg",
      title: "CLÍNICA POR DO SOL",
      subtitle: "CLÍNICA POR DO SOL",
    },
    {
      src: "/assets/clinicas/3.jpg",
      title: "CLÍNICA DA LUA",
      subtitle: "CLÍNICA DA LUA",
    },
    {
      src: "/assets/clinicas/1.jpeg",
      title: "POR DO SOL",
      subtitle: "CLÍNICA POR DO SOL",
    },
    {
      src: "/assets/clinicas/2.jpg",
      title: "CLÍNICA POR DO SOL",
      subtitle: "CLÍNICA POR DO SOL",
    },
    {
      src: "/assets/clinicas/3.jpg",
      title: "CLÍNICA DA LUA",
      subtitle: "CLÍNICA DA LUA",
    },
    {
      src: "/assets/clinicas/1.jpeg",
      title: "POR DO SOL",
      subtitle: "CLÍNICA POR DO SOL",
    },
    {
      src: "/assets/clinicas/2.jpg",
      title: "CLÍNICA POR DO SOL",
      subtitle: "CLÍNICA POR DO SOL",
    },
    {
      src: "/assets/clinicas/3.jpg",
      title: "CLÍNICA DA LUA",
      subtitle: "CLÍNICA DA LUA",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Header />
      <div className="w-full h-full bg-white flex flex-col p-16">
        <div className="w-full h-full flex flex-row">
          <div className="w-1/2 flex overflow-hidden">
            <Image
              src={"/assets/doctors.svg"}
              width={500}
              height={500}
              alt="Médicos"
            />
          </div>
          <div className="w-full flex flex-col ">
            <div className="w-full flex items-center pl-5 gap-x-2 text-3xl text-green-700 uppercase">
              <Stethoscope size={40} />
              <p>sua saúde em primeiro lugar</p>
            </div>
            <div className="mt-5 w-full pl-10 gap-y-10 text-2xl flex flex-col text-green-700">
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
        <div className="w-full h-[35vh] flex flex-row bg-green-700 mt-20 rounded-lg overflow-hidden">
          <div className="w-full h-full bg-secondary flex flex-col items-center p-3">
            <div className="font-semibold text-white">Clínicas</div>
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
