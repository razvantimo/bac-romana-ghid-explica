
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <div className="bg-light-blue/10 p-4 rounded-full mb-4">
          <Phone className="h-6 w-6 text-teal" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Sună-ne</h3>
        <p className="text-navy">+40 725 009 988</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <div className="bg-light-blue/10 p-4 rounded-full mb-4">
          <Mail className="h-6 w-6 text-teal" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Scrie-ne</h3>
        <p className="text-navy">contact@i-scoala.ro</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
        <div className="bg-light-blue/10 p-4 rounded-full mb-4">
          <MapPin className="h-6 w-6 text-teal" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Vizitează-ne</h3>
        <p className="text-navy">Iași, Bd. Regele Ferdinand 1</p>
      </div>
    </div>
  );
};

export default ContactInfo;
