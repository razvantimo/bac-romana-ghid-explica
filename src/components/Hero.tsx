
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="py-16 md:py-24 bg-navy bg-hero-pattern">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ghid cu rezolvarea subiectelor de la BAC la Română
            </h1>
            <p className="mt-4 text-lg text-light-blue/90">
              Cea mai bună metodă pentru fixarea noțiunilor specifice din programa Ministerului, pentru profilul umanist sau real.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full font-medium text-sm">
                Dai BAC-ul anul ăsta?
              </div>
            </div>
            <p className="mt-4 text-light-blue/80">
              Conține rezolvări detaliate, astfel încât să înțelegi cum să redactezi răspunsuri clare și corecte.
            </p>
            <div className="mt-8">
              <Button className="bg-teal hover:bg-teal/90 text-white text-lg py-6 px-8 rounded-lg shadow-lg" onClick={() => {
                window.open("https://pro.i-scoala.ro/product/ebook-romana/?_gl=1*o124y2*_gcl_au*NDQwMDkzODM0LjE3NDA0Njk4MDEuNTk2MTU3MzM3LjE3NDM0MDQ0MDcuMTc0MzQwNDQwNw..", "_blank");
              }}>
                Descarcă Ghidul Acum
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white border-4 border-teal p-4 rounded-lg shadow-lg rotate-3 animate-float">
              <img alt="Ghid Bacalaureat" className="w-64 h-auto rounded" src="/lovable-uploads/be78d3e4-57e3-4b25-87b9-a44056efb181.png" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-navy font-bold px-4 py-2 rounded-full shadow-lg transform -rotate-12">
              Ofertă Limitată!
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
