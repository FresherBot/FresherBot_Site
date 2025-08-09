
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Candidate from "./pages/Candidate";
import Employer from "./pages/Employer";
import College from "./pages/College";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Candidate Pages
import CandidatePrograms from "./pages/candidate/Programs";
import CandidateInternships from "./pages/candidate/Internships";
import CandidateBlog from "./pages/candidate/Blog";

// Employer Pages
import EmployerHiringAssessments from "./pages/employer/HiringAssessments";
import EmployerHackathon from "./pages/employer/Hackathon";
import EmployerCampusHiring from "./pages/employer/CampusHiring";

// College Pages
import CollegeLMS from "./pages/college/LMS";
import CollegeCRT from "./pages/college/CRT";
import CollegeHRCC from "./pages/college/HRCC";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/why-fresherbot" element={<Index />} />
          
          {/* Candidate Routes */}
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/candidate/blog" element={<CandidateBlog />} />
          <Route path="/candidate/programs" element={<CandidatePrograms />} />
          <Route path="/candidate/internships" element={<CandidateInternships />} />
          
          {/* Employer Routes */}
          <Route path="/employer" element={<Employer />} />
          <Route path="/employer/hiring-assessments" element={<EmployerHiringAssessments />} />
          <Route path="/employer/hackathon" element={<EmployerHackathon />} />
          <Route path="/employer/campus-hiring" element={<EmployerCampusHiring />} />
          
          {/* College Routes */}
          <Route path="/college" element={<College />} />
          <Route path="/college/lms" element={<CollegeLMS />} />
          <Route path="/college/crt" element={<CollegeCRT />} />
          <Route path="/college/hrcc" element={<CollegeHRCC />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
