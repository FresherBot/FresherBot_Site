
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-burgundy-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-beige-100">404</h1>
        <p className="text-xl text-beige-200 mb-8">Oops! Page not found</p>
        <Button 
          className="bg-burgundy-500 hover:bg-burgundy-400 text-white"
          asChild
        >
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
