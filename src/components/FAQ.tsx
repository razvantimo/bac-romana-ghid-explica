
import React from "react";

const FAQ = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Întrebări frecvente</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Ce este i-scoala?</h3>
          <p className="text-gray-700">www.i-scoala.ro este un serviciu e-learning care oferă utilizatorilor săi posibilitatea de a intra în posesia cursurilor afișate. Achiziția cursurilor se face pe baza comenzilor primite prin site.</p>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Înregistrarea ca utilizator</h3>
          <p className="text-gray-700">Pentru a beneficia de toate serviciile platformei, vă recomandăm să vă creați un cont. Procesul este simplu și rapid.</p>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Metode de plată</h3>
          <p className="text-gray-700">Acceptăm plăți online prin card bancar și transfer bancar. Toate plățile sunt procesate în condiții de maximă securitate.</p>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Cum utilizăm informațiile personale?</h3>
          <p className="text-gray-700">Informațiile personale sunt folosite doar pentru procesarea comenzilor și îmbunătățirea experienței utilizatorilor. Pentru mai multe detalii, consultați <a href="/privacy" className="text-teal hover:underline">Politica de confidențialitate</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
