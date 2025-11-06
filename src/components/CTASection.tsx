import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="spotlight-glow absolute top-0 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your <span className="gradient-text">Journey</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who are shaping their future with us. Start your application today.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate('/auth')}
            className="text-lg"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};
