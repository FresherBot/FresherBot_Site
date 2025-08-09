
import React, { useEffect } from "react";
import { Loader2 } from "lucide-react";

const Blog = () => {
  useEffect(() => {
    // Redirect to Google after a short delay
    const timer = setTimeout(() => {
      window.location.href = "https://www.google.com";
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Show a loading spinner while redirecting
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="text-center bg-white p-10 rounded-xl shadow-md">
        <Loader2 className="h-16 w-16 animate-spin text-fresherbot-blue mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-3">Redirecting to our blog</h1>
        <p className="text-gray-600 text-lg">Please wait a moment...</p>
      </div>
    </div>
  );
};

export default Blog;
