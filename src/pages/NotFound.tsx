
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-light-blue/30">
      <header className="bg-white py-4 border-b border-gray-100 shadow-sm">
        <div className="container flex items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-teal" />
            <span className="text-navy font-semibold text-xl">i-scoala.ro</span>
          </div>
        </div>
      </header>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Pagina nu a fost găsită</p>
          <Button asChild className="bg-teal hover:bg-teal/90">
            <a href="/">Înapoi la pagina principală</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
