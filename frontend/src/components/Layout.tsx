import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import nvnLogo from "@/assets/nvn-logo.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/opportunities", label: "Opportunities" },
    { to: "/news", label: "News" },
    { to: "/resources", label: "Resources" },
    { to: "/help", label: "Help Center" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-soft">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <img src={nvnLogo} alt="NVN Africa Logo" className="h-14 w-auto" />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-primary">NVN Africa</div>
                <div className="text-xs text-muted-foreground">NAMYO Volunteer Network</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="ml-4">
                <Link to="/contact">Join NVN</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-1 border-t border-border mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Join NVN
                </Link>
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-lg mb-4">About NVN Africa</h3>
              <p className="text-sm text-primary-foreground/80">
                Mobilizing Africa's youth for service, leadership, and change through digital volunteering.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-accent transition-colors">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/opportunities" className="hover:text-accent transition-colors">
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="hover:text-accent transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy" className="hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-accent transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-sm text-primary-foreground/80">
                Kwame Nkrumah House
                <br />
                Abuja, Nigeria
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <a href="https://www.nvnafrica.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    www.nvnafrica.com
                  </a>
                </p>
                <p>
                  Parent Org:{" "}
                  <a href="https://www.namyouth.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    www.namyouth.org
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} NVN Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
