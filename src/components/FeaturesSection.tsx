import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => (
  <section className="py-16 bg-muted/50 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">About IDCS Portal</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 text-muted-foreground space-y-4">
          <h4 className="text-xl font-semibold text-foreground mb-2 mt-4">Key Features</h4>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Student Portal:</strong> Access dashboard, attendance records...</li>
            <li><strong>Staff Portal:</strong> Manage class schedules...</li>
            <li><strong>HOD/AHOD Portal:</strong> Review and approve applications...</li>
            <li><strong>ATS System:</strong> Advanced resume analysis...</li>
            <li><strong>PathPilot:</strong> Career guidance...</li>
            <li><strong>Resume Builder:</strong> Professional resume creation...</li>
            <li><strong>Feed360:</strong> Comprehensive feedback system...</li>
          </ul>
          <h4 className="text-xl font-semibold text-foreground mb-2 mt-4">Technologies Used</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Built with Django framework...</li>
            <li>Modern responsive design...</li>
            <li>Secure authentication...</li>
            <li>Real-time notifications...</li>
          </ul>
          <h4 className="text-xl font-semibold text-foreground mb-2 mt-4">Get Started</h4>
          <p
            dangerouslySetInnerHTML={{
              __html:
                "Click the <strong>Login</strong> button above to access your personalized dashboard. For assistance, please contact the IDCS support team at <code class='bg-muted p-1 rounded-sm text-destructive-foreground'>idcs@krct.ac.in</code>"
            }}
          />
        </CardContent>
      </Card>
    </div>
  </section>
);

export default FeaturesSection;
