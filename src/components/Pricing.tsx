
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <section id="cta" className="py-16 bg-navy text-white bg-hero-pattern">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ofertă specială: 29 lei</h2>
          <p className="text-lg text-light-blue/90 mb-6">Doar în următoarele:</p>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-20">
              <div className="text-3xl font-bold timer-countdown">{formatTime(timeLeft.hours)}</div>
              <div className="text-xs text-light-blue/70 mt-1">ore</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-20">
              <div className="text-3xl font-bold timer-countdown">{formatTime(timeLeft.minutes)}</div>
              <div className="text-xs text-light-blue/70 mt-1">minute</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-20">
              <div className="text-3xl font-bold timer-countdown">{formatTime(timeLeft.seconds)}</div>
              <div className="text-xs text-light-blue/70 mt-1">secunde</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-2xl p-8 mb-8">
            <div className="text-gray-800">
              <h3 className="text-2xl font-bold text-navy mb-4">Ce vei primi:</h3>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="bg-teal rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Ghid PDF complet cu rezolvări detaliate (2019-2024)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-teal rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Rezolvări ale modelelor oficiale ME (2021-2025)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-teal rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Tehnici pentru punctaj maxim la subiectele II și III</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-teal rounded-full p-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>Acces instant după plată</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-t border-b border-gray-200 mb-6">
                <div>
                  <span className="text-gray-500 line-through text-lg">49 lei</span>
                  <span className="ml-2 text-2xl font-bold text-navy">29 lei</span>
                </div>
                <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mt-2 sm:mt-0">
                  41% reducere
                </div>
              </div>
              
              <Button 
                className="w-full bg-teal hover:bg-teal/90 text-white py-6 text-lg font-medium"
                onClick={() => window.open("https://pro.i-scoala.ro/product/ebook-romana/?_gl=1*o124y2*_gcl_au*NDQwMDkzODM0LjE3NDA0Njk4MDEuNTk2MTU3MzM3LjE3NDM0MDQ0MDcuMTc0MzQwNDQwNw..", "_blank")}
              >
                Descarcă Ghidul Acum
              </Button>
              
              <div className="mt-4 flex justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="text-gray-500 text-sm">Plată securizată</span>
              </div>
            </div>
          </div>
          
          <p className="text-light-blue/80">
            Nu mai aştepta, pregătește-te pentru succes la BAC!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
