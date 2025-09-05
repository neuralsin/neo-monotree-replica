import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookDemoModal } from "@/components/modals/BookDemoModal";
import { Language } from "@/lib/i18n";
import Index from "./pages/Index";
import Product from "./pages/Product";
import WhyUs from "./pages/WhyUs";
import Cases from "./pages/Cases";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar
              language={language}
              onLanguageChange={setLanguage}
              onBookDemo={() => setIsBookDemoOpen(true)}
            />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index language={language} onBookDemo={() => setIsBookDemoOpen(true)} />} />
                <Route path="/product" element={<Product language={language} />} />
                <Route path="/why-us" element={<WhyUs language={language} />} />
                <Route path="/cases" element={<Cases language={language} />} />
                <Route path="/about" element={<About language={language} />} />
                <Route path="/blog" element={<Blog language={language} />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer language={language} />
            
            <BookDemoModal
              isOpen={isBookDemoOpen}
              onClose={() => setIsBookDemoOpen(false)}
              language={language}
            />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
