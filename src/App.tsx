import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Routes WITH Header and Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            {/* Add other main pages here */}
          </Route>

          {/* Routes WITHOUT Header and Footer (like login) */}
          <Route path="/auth" element={<Auth />} />

          {/* Catch-all Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
