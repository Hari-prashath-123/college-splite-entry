import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

export default function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle authentication here
      console.log("Auth attempt:", { email, password, name, isLogin });
    };

    return (
  <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-12">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        <div className="spotlight-glow absolute top-1/4 right-1/4" />
        <div className="spotlight-glow absolute bottom-1/4 left-1/4" />

        {/* Back button */}
        <Button
          variant="ghost"
          className="absolute top-8 left-8 z-20"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Layout: Left (Login), Right (Robot) */}
  <div className="flex w-full max-w-5xl min-h-[600px] items-center justify-center relative z-10">
          {/* Left: Auth Card */}
          <div className="flex-1 flex items-center justify-center">
            <Card className="w-full max-w-md p-8 border-border/50 bg-card/80 backdrop-blur shadow-xl">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">
                  {isLogin ? "Welcome Back" : "Join Us"}
                </h1>
                <p className="text-muted-foreground">
                  {isLogin 
                    ? "Sign in to access your account" 
                    : "Create an account to get started"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {isLogin ? "Login" : "Sign Up"}
                </Button>
              </form>
              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => setIsLogin((prev) => !prev)}
                >
                  {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </button>
              </div>
            </Card>
          </div>
          {/* Right: Robot Spline Scene */}
          <div className="flex-1 flex items-center justify-center min-h-[400px]">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
}
