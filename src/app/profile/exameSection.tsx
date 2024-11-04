import React from "react";

const ExameSection: React.FC = () => {
  const exams = [
    {
      id: 1,
      title: "Exame de Sangue",
      date: "10/11/2024",
      details: "8h - Laboratório X",
    },
    { id: 2, title: "Raio-X", date: "15/11/2024", details: "10h - Clínica Y" },
  ];

  return (
    <div className="mb-5">
      <h2>Exames</h2>
      <div className="flex flex-wrap gap-2.5">
        {exams.map((exam) => (
          <div key={exam.id} className="bg-teal-100 p-2 rounded-md w-52">
            <p>
              <strong>{exam.title}</strong>
            </p>
            <p>{exam.date}</p>
            <p>{exam.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExameSection;
