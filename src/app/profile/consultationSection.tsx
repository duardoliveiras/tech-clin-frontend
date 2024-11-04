import React from "react";

const ConsultationSection: React.FC = () => {
  const consultations = [
    {
      id: 1,
      title: "Consulta com Dr. Silva",
      date: "20/11/2024",
      details: "14h - Clínica Z",
    },
    {
      id: 2,
      title: "Consulta com Dra. Souza",
      date: "22/11/2024",
      details: "16h - Clínica X",
    },
  ];

  return (
    <div className="mb-5">
      <h2>Consultas</h2>
      <div className="flex flex-wrap gap-2.5">
        {consultations.map((consultation) => (
          <div
            key={consultation.id}
            className="bg-teal-100 p-2 rounded-md w-52"
          >
            <p>
              <strong>{consultation.title}</strong>
            </p>
            <p>{consultation.date}</p>
            <p>{consultation.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationSection;
