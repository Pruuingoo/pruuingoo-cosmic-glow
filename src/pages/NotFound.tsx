import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center glass-container p-8">
        <h1 className="mb-4 text-4xl font-bold text-neon-purple">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-neon-blue underline hover:text-neon-purple transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
