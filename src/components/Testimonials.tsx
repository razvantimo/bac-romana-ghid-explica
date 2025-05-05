
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Maria",
      age: "19 ani",
      text: "Acest eBook m-a ajutat enorm în pregătirea pentru BAC. Rezolvările detaliate m-au făcut să înțeleg mai bine cerințele și să îmi îmbunătățesc tehnica de redactare. Recomand cu încredere!"
    },
    {
      name: "Mihai D.",
      age: "19 ani",
      text: "Eram stresat de examenul la română, dar parcurgând subiectele rezolvate din eBook, am căpătat încredere. Am învățat cum să abordez diferite tipuri de subiecte și am obținut o notă peste așteptări."
    },
    {
      name: "Georgiana S.",
      age: "19 ani",
      text: "Datorită acestui eBook, am reușit să îmi identific punctele slabe și să le corectez înainte de BAC. Rezolvările m-au ghidat pas cu pas și m-au pregătit pentru orice tip de subiect."
    },
    {
      name: "Cătălina A.",
      age: "18 ani",
      text: "EBook-ul mi-a oferit o perspectivă clară asupra a ceea ce se cere la examen. Explicațiile sunt ușor de înțeles, iar exemplele m-au ajutat să îmi structurez mai bine răspunsurile."
    }
  ];

  return (
    <section className="py-16 bg-navy/5">
      <div className="container">
        <h2 className="text-3xl font-bold text-navy text-center mb-4">Ce au zis alți elevi</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Experiențele reale ale elevilor care au folosit acest ghid pentru pregătirea examenului de Bacalaureat
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md bg-white">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="bg-teal/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="font-medium text-teal">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.age}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
