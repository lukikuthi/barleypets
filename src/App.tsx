import { useState, useEffect, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import TeamDetail from "./pages/TeamDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [hasLoadedBefore, setHasLoadedBefore] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
    setHasLoadedBefore(true);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && !hasLoadedBefore) {
      setLoading(true);
    }
  }, [location.pathname, hasLoadedBefore]);

  const showLoading =
    loading && location.pathname === "/" && !hasLoadedBefore;

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div
        className={
          "transition-opacity duration-700 " +
          (showLoading ? "opacity-0" : "opacity-100")
        }
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/:slug" element={<ServiceDetail />} />
          <Route path="/equipe/:slug" element={<TeamDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <AppContent />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;