import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import React from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-green-700">CONTATO</h2>
          <button
            onClick={onClose}
            className="text-green-700 text-xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          {/* Phone */}
          <div className="flex items-center gap-x-2 bg-third text-white rounded-lg p-3">
            <PhoneIcon />
            <span>+55 (65) 3333-4444 </span>
          </div>
          {/* Email */}
          <div className="flex items-center gap-x-2 bg-third text-white rounded-lg p-3">
            <MailIcon />
            <span>duardooliveiras@gmail.com</span>
          </div>
          {/* Address */}
          <div className="flex items-center gap-x-2 bg-third text-white rounded-lg p-3">
            <MapPin />
            <span>Rua barão de melgaço</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
