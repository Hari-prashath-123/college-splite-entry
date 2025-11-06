import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Card className="w-full min-h-screen bg-background/95 relative overflow-hidden border-0 rounded-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col lg:flex-row h-full min-h-screen">
          {/* Left content */}
          <div className="flex-1 p-8 lg:p-16 relative z-10 flex flex-col justify-center">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-blue-600">
                K.Ramakrishnan College of Technology
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight mt-8 text-destructive">
                Autonomous
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-4">
                IDCS is a comprehensive academic and student services portal designed for K.Ramakrishnan College of Technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate('/auth')}
                  className="text-lg"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>

          {/* Right 3D Scene */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-screen">
            <div className="absolute inset-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-foreground/20 rounded-full" />
          </div>
        </div>
      </Card>
    </section>
  );
};
