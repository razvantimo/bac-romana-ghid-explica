
import { Book, Calendar, Check, FileText, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Content = () => {
  return (
    <section className="py-16 bg-light-blue/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-navy text-center mb-12">Cuprins</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-navy/10 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy p-2 rounded-full">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy">I. Rezolvări Bacalaureat (2019–2024)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Inclusiv subiectele I și II, cu explicații detaliate și abordări strategice.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal" />
                  <span>„Testament" (Tudor Arghezi)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal" />
                  <span>„O scrisoare pierdută" (Ion Luca Caragiale)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal" />
                  <span>„Moara cu noroc" (Ioan Slavici)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal" />
                  <span>„Ion" (Liviu Rebreanu)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-navy/10 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy">II. Rezolvări ale modelelor Oficiale ME (2021–2025)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Inclusiv subiectele I și II, cu rezolvări complete și explicații.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal" />
                  <span>Text narativ (Mihail Sadoveanu)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal" />
                  <span>Text dramatic postbelic (Iona de Marin Sorescu)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal" />
                  <span>Basme (Harap-Alb)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-teal" />
                  <span>Poezie („Luceafărul" de Mihai Eminescu)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <Card className="border-2 border-navy/10 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-navy p-2 rounded-full">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy">III. Tehnici pentru punctaj maxim</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Ghiduri practice pentru maximizarea punctajului la fiecare secțiune.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-light-blue/50 p-4 rounded-lg">
                  <p className="font-medium">5 ponturi pentru rezolvarea cerinței I.B la examenul de Bacalaureat</p>
                </div>
                <div className="bg-light-blue/50 p-4 rounded-lg">
                  <p className="font-medium">Subiectul III la BAC: Rețeta eseului perfect – Structuri clare pentru punctaj maxim!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Content;
