
import { BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-navy/90 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <BookOpen className="h-6 w-6 text-teal" />
            <span className={`font-semibold text-xl ${!isMobile ? 'mt-0.5' : ''}`}>i-scoala.ro</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="/terms" className="text-light-blue/80 hover:text-teal transition-colors">
              Termeni și condiții
            </a>
            <a href="#" className="text-light-blue/80 hover:text-teal transition-colors">
              Politica de confidențialitate
            </a>
            <a href="mailto:contact@i-scoala.ro" className="text-light-blue/80 hover:text-teal transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-light-blue/60 text-sm">
            &copy; {new Date().getFullYear()} i-scoala.ro. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
