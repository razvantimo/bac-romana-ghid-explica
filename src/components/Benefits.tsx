
import { Check } from "lucide-react";
const Benefits = () => {
  return <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-navy text-center mb-4">Detaliile Ghidului PDF</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Tot ce trebuie să știi despre examenul de Bacalaureat la Limba Română, într-un singur ghid complet
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-8">
              <div className="flex gap-4 items-start">
                <div className="bg-teal rounded-full p-1 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Rezolvări detaliate</h3>
                  <p className="text-gray-600">
                    Fiecare subiect este abordat cu atenție, oferindu-vă explicații clare și concise, astfel încât să puteți înțelege și asimila informația cu ușurință.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex gap-4 items-start">
                <div className="bg-teal rounded-full p-1 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Creat de experți</h3>
                  <p className="text-gray-600">
                    Profesorii care au creat acest e-book sunt aceiași care au realizat cursul video de pregătire pentru BAC de pe i-scoala.ro, curs ce a ajutat peste 300 de elevi să obțină note mari la proba de limba română.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex gap-4 items-start">
                <div className="bg-teal rounded-full p-1 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Accesibilitate 24/7</h3>
                  <p className="text-gray-600">
                    Indiferent de programul tău, poți accesa acest e-book oricând și oriunde, oferindu-ți flexibilitatea de care ai nevoie pentru a te pregăti eficient.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex gap-4 items-start">
                <div className="bg-teal rounded-full p-1 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Actualizat și Relevant</h3>
                  <p className="text-gray-600">
                    Acest ghid reflectă cele mai recente tendințe și schimbări din examenul de BAC, asigurându-te că te pregătești cu informații actuale și pertinente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img alt="Învață în ritmul tău pentru Bacalaureat" className="rounded-lg shadow-xl" src="/lovable-uploads/843d0300-9eeb-4380-bde8-dd1674f7b8ce.jpg" />
            <div className="absolute -bottom-5 -right-5 bg-teal text-white py-2 px-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium">www.i-scoala.ro</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;
