import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-display font-bold gradient-text">404</h1>
        <h2 className="text-2xl font-bold text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/">
          <div className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden glass water-droplets hover-lift hover-glow bg-primary/10 text-foreground border-primary/20 hover:bg-primary/20 hover:text-primary-glow h-11 px-8">
            Return to Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
