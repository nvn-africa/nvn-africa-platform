import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/10 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <div className="text-[180px] font-bold text-primary/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Search className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-foreground mb-3">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-2">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-sm text-muted-foreground/70 mb-8">
          Attempted path: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="w-full sm:w-auto gradient-primary"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Quick Links</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="link" onClick={() => navigate("/admin/auth")} className="text-primary">
              Admin Portal
            </Button>
            <Button variant="link" onClick={() => navigate("/mobilizer/auth")} className="text-mobilizer-primary">
              Mobilizer Portal
            </Button>
            <Button variant="link" onClick={() => navigate("/volunteer/auth")} className="text-volunteer-primary">
              Volunteer Portal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
