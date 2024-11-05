import React from "react";

interface ConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
  selectedTime: string | null;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  onClose,
  onConfirm,
  selectedTime,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold text-green-700 text-center">
          CONFIRME SEU AGENDAMENTO
        </h2>

        <div className="mt-4">
          <h3 className="text-green-500 font-semibold">DADOS MÉDICOS</h3>
          <p>
            <span className="font-semibold">ESPECIALIDADE:</span> Endocrinologia
          </p>
          <p>
            <span className="font-semibold">MÉDICO:</span> Dr. Cabral
          </p>
          <p>
            <span className="font-semibold">LOCAL:</span> Hospital Municipal de
            Cuiabá
          </p>
          <p>
            <span className="font-semibold">DATA:</span> 08/11/2024
          </p>
          <p>
            <span className="font-semibold">HORÁRIO:</span> {selectedTime} H
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-green-500 font-semibold">DADOS DO PACIENTE</h3>
          <p>
            <span className="font-semibold">PACIENTE:</span> Matheo Bonucia
          </p>
          <p>
            <span className="font-semibold">CPF:</span> 123.456.909-09
          </p>
          <p>
            <span className="font-semibold">CONVENIADO:</span> Não
          </p>
          <p>
            <span className="font-semibold">CONVÊNIO:</span> -
          </p>

          <div className="mt-2 flex items-center">
            <label className="font-semibold mr-2">ACOMPANHANTE:</label>
            <select className="border border-gray-300 rounded-md p-1">
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-around">
          <button
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            onClick={onConfirm}
          >
            CONFIRMAR
          </button>
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition"
            onClick={onClose}
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
