import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  FolderKanban, 
  TrendingUp, 
  Globe, 
  Heart, 
  Award,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Send,
  Mail
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setContactForm({ name: '', email: '', inquiryType: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const features = [
    {
      icon: Users,
      title: 'Volunteer Management',
      description: 'Easily recruit, track, and manage volunteers across all your projects and initiatives.'
    },
    {
      icon: FolderKanban,
      title: 'Project Coordination',
      description: 'Plan, execute, and monitor community projects with real-time progress tracking.'
    },
    {
      icon: TrendingUp,
      title: 'Impact Analytics',
      description: 'Measure your impact with comprehensive dashboards and detailed performance reports.'
    }
  ];

  const stats = [
    { value: '5,000+', label: 'Active Volunteers' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Communities Reached' },
    { value: '100K+', label: 'Lives Impacted' }
  ];

  const impactAreas = [
    { icon: Heart, label: 'Healthcare' },
    { icon: Award, label: 'Education' },
    { icon: Globe, label: 'Environment' }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight text-foreground">NAMYO</h1>
                <p className="text-xs text-muted-foreground">Africa</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impact</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate('/volunteer/auth')} className="border-volunteer-primary text-volunteer-primary hover:bg-volunteer-primary hover:text-white">
                Volunteer Portal
              </Button>
              <Button variant="outline" onClick={() => navigate('/mobilizer/auth')} className="border-mobilizer-primary text-mobilizer-primary hover:bg-mobilizer-primary hover:text-white">
                Mobilizer Portal
              </Button>
              <Button onClick={() => navigate('/admin/auth')} className="gradient-primary">
                Admin Portal
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Empowering African Youth
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Building Tomorrow's{' '}
              <span className="text-primary">Africa</span>{' '}
              Through Youth{' '}
              <span className="text-primary">Mobilization</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              NAMYO Africa connects passionate volunteers with impactful community projects, 
              creating lasting change across the continent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="gradient-primary text-lg px-8 py-6 hover-scale"
                onClick={() => navigate('/admin/auth')}
              >
                Access Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="bg-card/50 backdrop-blur border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful Tools for{' '}
              <span className="text-primary">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage volunteers, coordinate projects, and measure your community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Creating Sustainable{' '}
                <span className="text-primary">Impact</span>{' '}
                Across Africa
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our volunteer-driven initiatives span across healthcare, education, and environmental 
                sustainability, empowering communities and transforming lives.
              </p>
              <div className="space-y-4">
                {[
                  'Comprehensive volunteer training programs',
                  'Real-time project tracking and reporting',
                  'Community-driven impact assessment',
                  'Sustainable development partnerships'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {impactAreas.map((area, index) => (
                <Card 
                  key={area.label} 
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <area.icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">{area.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About{' '}
            <span className="text-primary">NAMYO Africa</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            NAMYO Africa is a youth-led organization dedicated to mobilizing young people across 
            the continent to drive positive social change. Through our network of passionate volunteers, 
            we implement community projects that address critical challenges in healthcare, education, 
            and environmental sustainability.
          </p>
          <p className="text-lg text-muted-foreground">
            Our mission is to empower African youth to become agents of change in their communities, 
            building a brighter and more sustainable future for generations to come.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our programs or interested in partnering with us? 
                We'd love to hear from you. Fill out the form and our team will get back to you shortly.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-muted-foreground">info@namyoafrica.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">Across Africa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select 
                      value={contactForm.inquiryType} 
                      onValueChange={(value) => setContactForm({ ...contactForm, inquiryType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership Request</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry or partnership idea..."
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <Card className="gradient-primary overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center relative">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                  Ready to Make a Difference?
                </h2>
                <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                  Join our network of volunteers and project managers to create lasting impact in communities across Africa.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 hover-scale"
                  onClick={() => navigate('/volunteer/auth')}
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight text-foreground">NAMYO Africa</h1>
                <p className="text-xs text-muted-foreground">Empowering Youth, Transforming Communities</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NAMYO Africa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
