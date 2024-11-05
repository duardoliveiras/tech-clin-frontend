import React from "react";

interface ScheduleCardProps {
  specialty: string;
  name: string;
  times: string[];
  onTimeClick: (time: string) => void;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  specialty,
  name,
  times,
  onTimeClick,
}) => {
  return (
    <div className="bg-third text-white p-6 rounded-lg">
      <div className="info">
        <p>
          <strong>Especialidade:</strong> {specialty}
        </p>
        <p>
          <strong>Nome:</strong> {name}
        </p>
      </div>
      <div className="times">
        <p>
          <strong>Horários Disponíveis:</strong>
        </p>
        <div className="">
          {times.map((time, index) => (
            <button
              className="m-1 p-1.5 bg-primary text-white rounded-md cursor-pointer"
              key={index}
              onClick={() => onTimeClick(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
