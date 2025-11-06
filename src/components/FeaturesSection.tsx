import { Card } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "World-Class Education",
    description: "Access to top-tier faculty and cutting-edge curriculum designed to prepare you for the future.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Join a diverse community of students from around the world, fostering collaboration and growth.",
  },
  {
    icon: BookOpen,
    title: "Rich Resources",
    description: "State-of-the-art facilities, extensive library, and digital resources at your fingertips.",
  },
  {
    icon: Award,
    title: "Career Success",
    description: "Comprehensive career support and placement services to help you achieve your goals.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Our College</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience excellence in education with unparalleled opportunities for growth and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
