
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white py-4 border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between">
        <a href="https://www.i-scoala.ro" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-teal" />
          <span className={`text-navy font-semibold text-xl ${!isMobile ? 'mt-0.5' : ''}`}>i-scoala.ro</span>
        </a>
        <Button 
          className="bg-teal text-white hover:bg-teal/90"
          onClick={() => {
            const element = document.getElementById('cta');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Descarcă Ghidul
        </Button>
      </div>
    </header>
  );
};

export default Header;
