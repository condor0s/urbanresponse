import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Instructor from "./pages/Instructor";
import Mission from "./pages/Mission";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import SituationalAwareness from "./pages/SituationalAwareness";
import DecisionMaking from "./pages/DecisionMaking";
import Deescalation from "./pages/Deescalation";
import PhysicalResponse from "./pages/PhysicalResponse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/training/situational-awareness" element={<SituationalAwareness />} />
          <Route path="/training/decision-making" element={<DecisionMaking />} />
          <Route path="/training/de-escalation" element={<Deescalation />} />
          <Route path="/training/physical-response" element={<PhysicalResponse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
