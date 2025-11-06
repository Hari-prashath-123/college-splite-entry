import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import krctLogo from "@/assets/krct-logo.png";
import eLogo from "@/assets/e-logo.png";
import nbaLogo from "@/assets/nba-logo.png";
import tneaLogo from "@/assets/tnea-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        {/* Left Section: Logos */}
        <div className="flex items-center gap-3">
          <img
            src={krctLogo}
            alt="KRCT Logo"
            className="h-10 sm:h-12 w-auto"
          />
          <img
            src={eLogo}
            alt="E-Logo"
            className="h-10 sm:h-12 w-auto"
          />
          <img
            src={nbaLogo}
            alt="NBA Logo"
            className="h-10 sm:h-12 w-auto"
          />
          <img
            src={tneaLogo}
            alt="TNEA Code"
            className="h-10 sm:h-12 w-auto"
          />
        </div>
        {/* Center Section: College Name */}
        <div className="hidden md:block text-center">
          <div className="text-xl font-bold text-primary">
            K.Ramakrishnan College of Technology
          </div>
          <div className="text-sm font-semibold text-destructive">Autonomous</div>
        </div>
        {/* Right Section: Login Button */}
        <div>
          <Button asChild>
            <Link to="/auth">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
