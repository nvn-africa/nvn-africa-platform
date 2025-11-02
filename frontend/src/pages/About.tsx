import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Target, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NVN Africa</h1>
            <p className="text-xl text-primary-foreground/90">
              Mobilizing Africa's Youth for Service, Leadership, and Change
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  NVN Africa is the digital volunteer and civic engagement ecosystem of the Non-Aligned Movement Youth 
                  Organization (NAMYO) Africa Regional Office. Our mission is to build Africa's largest and most verifiable 
                  network of young volunteers.
                </p>
              </CardContent>
            </Card>

            {/* Vision & Goals */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A digitally connected generation of African youth driving community transformation, aligned with 
                    Agenda 2063 and the UN Sustainable Development Goals (SDGs).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" />
                    Long-Term Goal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    By 2030, NVN Africa aims to mobilize <strong>15 million verifiable volunteers</strong> across 54 African 
                    countries and execute <strong>100,000 verified projects</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* About NAMYO */}
            <Card className="bg-secondary mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Globe className="w-6 h-6 text-accent" />
                  About NAMYO & Its Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The Non-Aligned Movement Youth Organization (NAMYO) is the global parent body of NVN Africa. 
                  It was established following the <strong>Shusha Accords</strong> on <strong>July 29, 2022</strong>, 
                  in Azerbaijan, and operates under the principles of the Non-Aligned Movement (NAM).
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-3">
                    For more information about NAMYO's global structure and programs:
                  </p>
                  <Button asChild variant="outline">
                    <a href="https://www.namyouth.org" target="_blank" rel="noopener noreferrer">
                      Visit NAMYO Official Website
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Core Values */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Unity</h3>
                    <p className="text-muted-foreground">
                      Bringing together diverse African youth for a common purpose.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Impact</h3>
                    <p className="text-muted-foreground">
                      Creating measurable change in communities across Africa.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Service</h3>
                    <p className="text-muted-foreground">
                      Commitment to volunteerism and community development.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-4 text-center">Our Leadership Team</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Meet the dedicated leaders guiding NVN Africa's mission to mobilize youth volunteers across the continent.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Regional Director */}
                <Card className="text-center hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Regional Director</h3>
                    <p className="text-accent font-medium mb-3">NAMYO Africa</p>
                    <p className="text-sm text-muted-foreground">
                      Oversees strategic direction and continental coordination of NVN Africa initiatives.
                    </p>
                  </CardContent>
                </Card>

                {/* Program Coordinator */}
                <Card className="text-center hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-12 h-12 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Program Coordinator</h3>
                    <p className="text-accent font-medium mb-3">Community Development</p>
                    <p className="text-sm text-muted-foreground">
                      Manages volunteer projects and ensures alignment with community needs and SDGs.
                    </p>
                  </CardContent>
                </Card>

                {/* Digital Platform Lead */}
                <Card className="text-center hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Globe className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Digital Platform Lead</h3>
                    <p className="text-accent font-medium mb-3">Technology & Innovation</p>
                    <p className="text-sm text-muted-foreground">
                      Leads development and management of the NVN digital volunteer platform.
                    </p>
                  </CardContent>
                </Card>

                {/* Partnerships Director */}
                <Card className="text-center hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-12 h-12 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Partnerships Director</h3>
                    <p className="text-accent font-medium mb-3">Strategic Relations</p>
                    <p className="text-sm text-muted-foreground">
                      Builds partnerships with governments, NGOs, and corporate CSR programs.
                    </p>
                  </CardContent>
                </Card>

                {/* Capacity Building Lead */}
                <Card className="text-center hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Capacity Building Lead</h3>
                    <p className="text-accent font-medium mb-3">Training & Development</p>
                    <p className="text-sm text-muted-foreground">
                      Oversees volunteer training programs, certifications, and skill development.
                    </p>
                  </CardContent>
                </Card>

                {/* Communications Officer */}
                <Card className="text-center hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Globe className="w-12 h-12 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-1">Communications Officer</h3>
                    <p className="text-accent font-medium mb-3">Media & Outreach</p>
                    <p className="text-sm text-muted-foreground">
                      Manages communications, public relations, and volunteer engagement campaigns.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* National Chapters Note */}
              <Card className="mt-12 bg-secondary">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-center">National Chapter Leadership</h3>
                  <p className="text-muted-foreground text-center">
                    Each country has dedicated National Chapter Coordinators and volunteer leaders who manage 
                    local operations and projects. As NVN Africa expands across the continent, national leadership 
                    teams will be announced for each country during the rollout phases.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-gradient-hero text-primary-foreground p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
              <p className="mb-6 text-primary-foreground/90">
                Be part of Africa's largest volunteer network and make a difference in your community.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
