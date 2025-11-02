import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Smartphone, TrendingUp, GraduationCap, Settings } from "lucide-react";

const Help = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl text-primary-foreground/90">
              Everything you need to know about using the NVN Africa platform
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <p className="text-lg text-muted-foreground">
                Find guides, tutorials, and resources to help you make the most of your volunteer experience with NVN Africa.
              </p>
            </div>

            {/* Help Categories */}
            <div className="space-y-6">
              {/* Platform Support */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-accent-foreground" />
                    </div>
                    Platform Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Learn how to navigate and use the NVN Africa digital platform effectively.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Registration Guide:</strong> Step-by-step instructions for creating your volunteer account and completing your profile
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Project Creation:</strong> How to propose, design, and launch community development projects
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Crowdfunding Setup:</strong> Guidelines for setting up and managing crowdfunding campaigns for your projects
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Mobile App Navigation:</strong> Tips for using the NVN mobile application features and tools
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Troubleshooting:</strong> Solutions to common technical issues and platform errors
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Growth Dashboard */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-accent-foreground" />
                    </div>
                    Growth Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Track your volunteer journey and measure your impact through our comprehensive dashboard.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Volunteer Hours Tracking:</strong> Log and verify your service hours for accurate record-keeping
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Project Participation:</strong> View your project history and contributions across different initiatives
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Impact Metrics:</strong> Understand how your volunteer work contributes to community development goals
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Recognition Levels:</strong> Monitor your progress through the volunteer recognition ladder
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Digital Certificates:</strong> Access and download your verified volunteer credentials
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Capacity Building */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-accent-foreground" />
                    </div>
                    Capacity Building
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Access educational resources and training programs to enhance your skills and knowledge.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Short Courses:</strong> Enroll in online courses covering leadership, project management, and civic engagement
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Certifications:</strong> Complete certification programs through the NVN Learning Hub
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Workshop Registration:</strong> Sign up for in-person and virtual training workshops
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Mentorship Matching:</strong> Connect with experienced mentors for personalized guidance
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Resource Library:</strong> Access training materials, guides, and educational content
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Administrative Dashboard */}
              <Card className="border-2 hover:shadow-medium transition-all">
                <CardHeader className="bg-secondary">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-accent-foreground" />
                    </div>
                    Administrative Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Resources for National Chapter coordinators and volunteer leaders managing regional operations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Chapter Management:</strong> Tools and guidelines for managing national volunteer chapters
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Project Approval Process:</strong> Understanding the review and approval workflow for new projects
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Volunteer Verification:</strong> Procedures for verifying and validating volunteer activities and hours
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Reporting Tools:</strong> Generate reports on chapter activities, volunteer engagement, and project outcomes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span className="text-muted-foreground">
                        <strong>Communication Resources:</strong> Templates and tools for chapter announcements and volunteer coordination
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <Card className="mt-12 bg-gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <HelpCircle className="w-6 h-6" />
                  Still Have Questions?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 mb-6">
                  Can't find what you're looking for? Our support team is here to help. Contact us for additional assistance 
                  with platform navigation, project management, or any other volunteer-related inquiries.
                </p>
                <div className="space-y-2 text-primary-foreground/90">
                  <p>📧 Email: support@nvnafrica.com</p>
                  <p>📍 Location: Kwame Nkrumah House, Abuja, Nigeria</p>
                  <p>🌐 Website: <a href="https://www.nvnafrica.com" className="underline">www.nvnafrica.com</a></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
