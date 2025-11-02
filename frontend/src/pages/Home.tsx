import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Leaf, ArrowRight } from "lucide-react";
import nvnLogo from "@/assets/nvn-logo.png";
import nvnLogo1 from "../assets/nvn-logo.png"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block  mb-6 px-4 py-2">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <img src={nvnLogo1} alt="NVN Africa Logo" className="h-14 w-auto" />
            </Link>
            <div className="inline-block  mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-sm font-medium">NAMYO Volunteer Network- Africa</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Mobilizing Africa's Youth for Service, Leadership, and Change
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Join Africa's largest digital volunteer and civic engagement network and become a leader in your own right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link to="/contact">Join NVN Africa</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 hover:bg-white/20 border-white/30 text-white">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Building Africa's largest and most verifiable network of young volunteers committed to community transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-medium transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Development</h3>
                <p className="text-muted-foreground">
                  Empowering communities through volunteer-driven initiatives that create lasting impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Responsible Citizenship</h3>
                <p className="text-muted-foreground">
                  Fostering civic engagement and leadership among Africa's youth for sustainable development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-medium transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Climate Advocacy</h3>
                <p className="text-muted-foreground">
                  Leading environmental initiatives aligned with Africa's sustainability goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A digitally connected generation of African youth driving community transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3 text-accent">15 Million</h3>
                  <p className="text-muted-foreground">
                    Verifiable volunteers mobilized across 54 African countries by 2030
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3 text-accent">100,000</h3>
                  <p className="text-muted-foreground">
                    Verified community development projects executed by 2030
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Aligned with <strong>Agenda 2063</strong> and the <strong>UN Sustainable Development Goals (SDGs)</strong>
              </p>
              <Button asChild variant="default">
                <Link to="/about">
                  Learn More About Our Vision <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of young Africans who are transforming their communities through verified volunteer action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Join NVN Africa Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 hover:bg-white/20 border-white/30 text-white">
                <Link to="/opportunities">Explore Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
