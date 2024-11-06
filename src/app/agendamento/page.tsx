"use client";

import React, { useState } from "react";
import Footer from "../footer";
import Header from "../Header";
import ConfirmationModal from "./confirmationModal";
import ScheduleCard from "./scheduleCard";
import { scheduleData } from "./scheduleData";

const SchedulingPage: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const closeModal = () => {
    setSelectedTime(null);
  };

  return (
    <div className="flex flex-col  justify-center items-center w-screen min-h-screen bg-white text-black">
      <Header />
      <main className="flex-grow w-[80%] flex flex-col items-center">
        <h1>Agendamento de Consultas</h1>

        <div className="flex gap-2 mb-4">
          <button>TIPO DE AGENDAMENTO</button>
          <button>LOCAL DESEJADO</button>
          <button>FILTRAR POR ESPECIALIDADE</button>
          <button>DATA</button>
        </div>

        <div className="gap-2 mb-4 grid grid-cols-5">
          {scheduleData.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              specialty={schedule.specialty}
              name={schedule.name}
              times={schedule.times}
              date={schedule.date}
              onTimeClick={handleTimeClick}
            />
          ))}
        </div>

        {/* Modal de confirmação de agendamento */}
        {selectedTime && (
          <ConfirmationModal
            onClose={() => {
              setSelectedTime(null);
            }}
            onConfirm={() => {}}
            selectedTime={selectedTime}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SchedulingPage;
