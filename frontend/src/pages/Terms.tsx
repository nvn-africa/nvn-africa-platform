import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Vote, DollarSign } from "lucide-react";

const Terms = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-primary-foreground/90">
              Guidelines and responsibilities for NVN Africa volunteers
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-lg text-muted-foreground">
                By registering and participating in NVN Africa, you agree to comply with these Terms of Service. 
                Please read them carefully before using our platform or engaging in volunteer activities.
              </p>
            </div>

            {/* Eligibility */}
            <Card className="mb-8 border-2">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Age Requirement</h4>
                    <p className="text-muted-foreground">
                      NVN Africa is open to <strong>youth aged 16–35 years old</strong>. Volunteers under 18 may require 
                      parental or guardian consent to participate in certain activities, as determined by national chapter 
                      policies and local laws.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Account Registration</h4>
                    <p className="text-muted-foreground">
                      You must provide accurate and complete information during registration. You are responsible for 
                      maintaining the confidentiality of your account credentials and for all activities under your account.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Geographic Scope</h4>
                    <p className="text-muted-foreground">
                      While NVN Africa operates across the continent, availability of certain features and programs may 
                      vary by country based on the rollout phases and local partnerships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Governance */}
            <Card className="mb-8 border-2">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent-foreground" />
                  </div>
                  Project Governance
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  All volunteer initiatives submitted through the NVN platform are subject to review and approval to ensure 
                  alignment with our mission and values.
                </p>

                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Project Submission</h4>
                    <p className="text-muted-foreground">
                      Volunteers may propose projects through the NVN platform. All project proposals must clearly outline 
                      objectives, target communities, expected impact, resource requirements, and timelines.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Review and Approval Process</h4>
                    <p className="text-muted-foreground">
                      Submitted projects are reviewed by designated moderators at national chapter and regional levels. 
                      Projects must align with NVN's core pillars (Community Development, Responsible Citizenship, Climate Advocacy) 
                      and comply with local laws and regulations.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Project Standards</h4>
                    <p className="text-muted-foreground">
                      All approved projects must be conducted ethically, legally, and in accordance with NVN Africa's code of 
                      conduct. Projects that promote discrimination, violence, illegal activities, or partisan political agendas 
                      will not be approved.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Project Reporting</h4>
                    <p className="text-muted-foreground">
                      Project leaders must maintain accurate records of activities, volunteer hours, fund utilization, and 
                      outcomes. Regular progress reports and final project summaries are required through the platform.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Democratic Participation */}
            <Card className="mb-8 border-2">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Vote className="w-6 h-6 text-accent-foreground" />
                  </div>
                  Democratic Participation
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  NVN Africa promotes democratic engagement and transparent decision-making through our digital platform.
                </p>

                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">In-App Voting System</h4>
                    <p className="text-muted-foreground">
                      Volunteers may participate in platform polls, surveys, and voting on specific initiatives. All voting 
                      uses secure token systems to ensure one person, one vote, and prevent manipulation.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Fair Participation</h4>
                    <p className="text-muted-foreground">
                      Attempts to manipulate voting systems, create duplicate accounts, or engage in coordinated inauthentic 
                      behavior are strictly prohibited and may result in account suspension or termination.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Feedback and Governance</h4>
                    <p className="text-muted-foreground">
                      Volunteers are encouraged to provide constructive feedback on platform features, policies, and programs. 
                      NVN Africa values community input in shaping the direction of the network.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Accountability */}
            <Card className="mb-8 border-2">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-accent-foreground" />
                  </div>
                  Financial Accountability
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Transparency and accountability in financial matters are fundamental to maintaining trust in the NVN network.
                </p>

                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Transparent Financial Ledgers</h4>
                    <p className="text-muted-foreground">
                      All crowdfunding campaigns and project funding must maintain transparent financial records. Donors and 
                      volunteers can view how funds are allocated and spent through the platform.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Fund Utilization</h4>
                    <p className="text-muted-foreground">
                      Funds raised through the platform must be used exclusively for the stated project purposes. Misuse of 
                      funds, fraudulent fundraising, or financial misrepresentation will result in immediate account termination 
                      and potential legal action.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Payment Processing</h4>
                    <p className="text-muted-foreground">
                      All payments are processed through secure third-party payment providers (Flutterwave, Paystack). 
                      NVN Africa does not store sensitive payment information. You agree to comply with the terms of service 
                      of our payment partners.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Financial Reporting</h4>
                    <p className="text-muted-foreground">
                      Project leaders must submit financial reports documenting all income and expenses. Failure to provide 
                      accurate financial documentation may result in restrictions on future fundraising activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conduct & Responsibilities */}
            <Card className="mb-8 bg-secondary">
              <CardHeader>
                <CardTitle className="text-xl">Code of Conduct</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  As a member of NVN Africa, you agree to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Treat all volunteers, staff, and community members with respect and dignity</li>
                  <li>• Conduct yourself ethically and legally in all volunteer activities</li>
                  <li>• Respect the confidentiality of sensitive information</li>
                  <li>• Not engage in harassment, discrimination, or harmful behavior</li>
                  <li>• Accurately represent your qualifications, skills, and volunteer hours</li>
                  <li>• Comply with all applicable laws and regulations in your country</li>
                  <li>• Report any violations of these terms or inappropriate behavior</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="mb-8 bg-secondary">
              <CardHeader>
                <CardTitle className="text-xl">Account Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  NVN Africa reserves the right to suspend or terminate accounts that violate these Terms of Service, 
                  engage in fraudulent activity, or otherwise compromise the integrity of the platform. You may also close 
                  your account at any time by contacting support.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-xl">Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  While NVN Africa strives to provide a safe and effective platform for volunteerism, we cannot guarantee 
                  specific outcomes from volunteer projects. Volunteers participate at their own risk and should exercise 
                  appropriate judgment and caution. NVN Africa is not liable for injuries, damages, or losses incurred 
                  during volunteer activities.
                </p>
              </CardContent>
            </Card>

            {/* Updates */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p className="mt-2">
                NVN Africa reserves the right to modify these Terms of Service. Users will be notified of significant 
                changes and continued use of the platform constitutes acceptance of updated terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
