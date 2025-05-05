
import { Check } from "lucide-react";

const Author = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="/lovable-uploads/508ed4cd-1811-4d53-aa5a-e798c43c2099.png" 
                alt="Professor Gabriel Braic" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-navy mb-4">Informații despre profesor</h2>
            <p className="text-gray-700 mb-6">
              Gabriel Braic, autorul ebook-ului și profesor dedicat de limba și literatura română, predă la un liceu de top din județul Cluj-Napoca.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-teal rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold text-navy">Experiență remarcabilă.</span> De-a lungul carierei, a asistat mii de elevi în pregătirea lor pentru examenul maturității, ghidându-i cu profesionalism și dedicare.
                </p>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-teal rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold text-navy">Abordare practică și eficientă.</span> Cu o metodologie clară și exemple bine structurate, Gabriel Braic te va ajuta să înțelegi mai ușor cerințele examenului și să obții cele mai bune rezultate.
                </p>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-teal rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold text-navy">Partenerul succesului tău.</span> Prin acest ebook, profesorul Braic îți oferă toate instrumentele necesare pentru a naviga cu încredere printre subiectele de la Bacalaureat la Limba și Literatura Română.
                </p>
              </div>
            </div>
            
            <p className="mt-6 text-lg font-medium text-navy">
              Te invită să devii partenerul său în această călătorie către succesul tău la Bac!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
