import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const News = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-primary-foreground/90">
              Stay informed about NVN Africa's continental rollout and latest developments
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Continental Rollout */}
            <Card className="mb-8 border-2">
              <CardHeader className="bg-secondary">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  NVN-Africa Continental Rollout
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  The NVN-Africa rollout will be implemented continent-wide in three strategic phases, ensuring 
                  sustainable growth and maximum impact across all African nations.
                </p>
              </CardContent>
            </Card>

            {/* Phase 1 */}
            <Card className="mb-6 hover:shadow-medium transition-all">
              <CardHeader className="bg-gradient-accent text-accent-foreground">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Calendar className="w-5 h-5" />
                  Phase 1: Pilot (6–9 months)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-start gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Launch Countries:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Nigeria</li>
                      <li>• Ghana</li>
                      <li>• Kenya</li>
                      <li>• South Africa</li>
                      <li>• Egypt</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-secondary p-4 rounded-lg mt-4">
                  <h4 className="font-bold mb-2">Objectives:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Establish national volunteer chapters</li>
                    <li>• Test and refine the NVN digital platform</li>
                    <li>• Launch initial community development projects</li>
                    <li>• Build partnerships with local organizations</li>
                    <li>• Train volunteer coordinators and chapter leaders</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="mb-6 hover:shadow-medium transition-all">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Calendar className="w-5 h-5" />
                  Phase 2: Expansion (12 months)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Regional Growth:</h4>
                  <p className="text-muted-foreground">
                    Scale operations to additional countries across all African regions based on pilot program learnings and successes.
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-lg mt-4">
                  <h4 className="font-bold mb-2">Key Activities:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Expand to 10-15 additional countries</li>
                    <li>• Strengthen regional coordination structures</li>
                    <li>• Increase project diversity and scale</li>
                    <li>• Develop regional partnerships and funding streams</li>
                    <li>• Launch capacity building programs</li>
                    <li>• Implement volunteer recognition systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="mb-6 hover:shadow-medium transition-all">
              <CardHeader className="bg-gradient-hero text-primary-foreground">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Calendar className="w-5 h-5" />
                  Phase 3: Continental Rollout (12+ months)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Full Continental Coverage:</h4>
                  <p className="text-muted-foreground">
                    Launch NVN in 20+ African countries, establishing a truly pan-African volunteer network.
                  </p>
                </div>
                <div className="bg-secondary p-4 rounded-lg mt-4">
                  <h4 className="font-bold mb-2">Strategic Goals:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Active presence in majority of African nations</li>
                    <li>• Robust inter-country collaboration mechanisms</li>
                    <li>• Continental-scale projects and campaigns</li>
                    <li>• Established funding and sustainability models</li>
                    <li>• Recognition as Africa's leading youth volunteer network</li>
                    <li>• Strong alignment with AU Agenda 2063 and UN SDGs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Impact Targets */}
            <Card className="mt-8 bg-accent text-accent-foreground">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">2030 Impact Targets</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">15M+</div>
                    <p className="text-accent-foreground/90">Verified volunteers across 54 African countries</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">100K+</div>
                    <p className="text-accent-foreground/90">Community development projects executed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stay Updated CTA */}
            <div className="mt-12 text-center p-8 bg-secondary rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-muted-foreground mb-6">
                Follow NVN Africa's journey as we build the continent's largest volunteer network. 
                Updates on new country launches, project milestones, and volunteer success stories coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
