import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-primary-foreground/90">
              Your privacy and data security are our top priorities
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
                NVN Africa is committed to protecting the privacy and security of our volunteers' personal information. 
                This Privacy Policy outlines how we collect, use, store, and protect your data in accordance with 
                international data protection standards.
              </p>
            </div>

            {/* Security Measures */}
            <Card className="mb-8 border-2">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  Security Measures
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-accent" />
                      Multi-Factor Authentication (MFA)
                    </h4>
                    <p className="text-muted-foreground">
                      All user accounts are protected with multi-factor authentication, providing an additional layer of security 
                      beyond passwords. Users can enable authentication via SMS, email, or authenticator apps.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      SSL Encryption
                    </h4>
                    <p className="text-muted-foreground">
                      All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS 
                      encryption protocols. This ensures that your personal information remains secure during transmission.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-accent" />
                      Data Access Controls
                    </h4>
                    <p className="text-muted-foreground">
                      Access to personal data is strictly limited to authorized personnel who require it to perform their duties. 
                      All staff members undergo security training and sign confidentiality agreements.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">Regular Security Audits</h4>
                    <p className="text-muted-foreground">
                      Our systems undergo regular security audits and vulnerability assessments to identify and address potential 
                      security risks proactively.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="mb-8 border-2">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent-foreground" />
                  </div>
                  Legal Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  NVN Africa adheres to international data protection regulations and standards to ensure the highest level 
                  of privacy for our volunteers.
                </p>

                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">GDPR Compliance</h4>
                    <p className="text-muted-foreground">
                      Full adherence to the <strong>General Data Protection Regulation (GDPR)</strong>, ensuring that personal 
                      data of European volunteers is processed lawfully, fairly, and transparently. You have the right to access, 
                      rectify, erase, restrict processing, data portability, and object to processing of your personal data.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">AU Data Protection Standards</h4>
                    <p className="text-muted-foreground">
                      Compliance with the <strong>African Union Convention on Cyber Security and Personal Data Protection</strong> 
                      (Malabo Convention), respecting regional standards for data privacy and security across African nations.
                    </p>
                  </div>

                  <div className="bg-background p-4 rounded-lg border">
                    <h4 className="font-bold mb-2">National Data Protection Laws</h4>
                    <p className="text-muted-foreground">
                      Adherence to national data protection legislation in all countries where NVN Africa operates, including 
                      country-specific requirements for data handling and privacy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection & Use */}
            <Card className="mb-8 bg-secondary">
              <CardHeader>
                <CardTitle className="text-xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Personal identification information (name, email, phone number)</li>
                  <li>• Volunteer profile information (skills, interests, location)</li>
                  <li>• Project participation and volunteer hours data</li>
                  <li>• Payment information for crowdfunding (processed securely by payment partners)</li>
                  <li>• Technical data (IP address, browser type, device information)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-secondary">
              <CardHeader>
                <CardTitle className="text-xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• To create and manage your volunteer account</li>
                  <li>• To coordinate volunteer projects and activities</li>
                  <li>• To track and verify volunteer hours and impact</li>
                  <li>• To provide capacity building opportunities and resources</li>
                  <li>• To communicate important updates and opportunities</li>
                  <li>• To improve our platform and services</li>
                  <li>• To comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 mb-4">
                  As a volunteer with NVN Africa, you have the following rights regarding your personal data:
                </p>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>• <strong>Right to Access:</strong> Request a copy of your personal data</li>
                  <li>• <strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li>• <strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                  <li>• <strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                  <li>• <strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                  <li>• <strong>Right to Object:</strong> Object to certain types of data processing</li>
                  <li>• <strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                </ul>
                <p className="text-primary-foreground/90 mt-6">
                  To exercise any of these rights, please contact our Data Protection Officer at privacy@nvnafrica.com
                </p>
              </CardContent>
            </Card>

            {/* Updates */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p className="mt-2">
                We may update this Privacy Policy periodically. We will notify you of any significant changes 
                through our platform or via email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
