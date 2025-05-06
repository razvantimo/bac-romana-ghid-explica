
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-white py-4 border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between">
        <a href="https://www.i-scoala.ro" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/34091540-6a94-4bdf-8d53-f00d2b899b47.png" 
            alt="i-scoala logo" 
            className="h-6 w-6"
          />
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
