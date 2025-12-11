import { useParams, useNavigate } from 'react-router-dom';
import VolunteerHeader from '@/components/layout/VolunteerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Mail,
  Phone,
  Target,
  AlertCircle
} from 'lucide-react';

const VolunteerProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock project data
  const project = {
    id: Number(id),
    name: 'Community Health Camp',
    description: 'A comprehensive community health initiative providing free health screenings, vaccinations, and health education to underserved communities in Lagos. This project aims to improve healthcare access and awareness in rural areas.',
    category: 'Health',
    status: 'recruiting',
    location: 'Lagos Community Center, Victoria Island, Lagos',
    startDate: 'December 15, 2024',
    endDate: 'December 20, 2024',
    duration: '5 days',
    volunteersNeeded: 5,
    totalVolunteers: 10,
    currentVolunteers: 5,
    requirements: [
      'Must be 18 years or older',
      'Basic first aid knowledge (preferred)',
      'Good communication skills',
      'Ability to work in a team',
      'Available for the full duration'
    ],
    responsibilities: [
      'Assist in setting up health screening stations',
      'Guide patients through the screening process',
      'Help distribute health education materials',
      'Support medical staff as needed',
      'Document activities and patient feedback'
    ],
    skills: ['Communication', 'Teamwork', 'Healthcare Support', 'Organization'],
    projectLead: {
      name: 'Dr. Sarah Okonkwo',
      role: 'Project Coordinator',
      email: 'sarah.o@namyo.org',
      phone: '+234 801 234 5678',
      avatar: 'SO'
    },
    schedule: [
      { day: 'Day 1', activities: 'Setup and training session' },
      { day: 'Day 2-4', activities: 'Health screenings and consultations' },
      { day: 'Day 5', activities: 'Wrap-up and community feedback' },
    ]
  };

  const handleJoinRequest = () => {
    toast({
      title: "Request Submitted!",
      description: "Your request to join this project has been sent. You'll be notified once it's reviewed.",
    });
  };

  return (
    <>
      <VolunteerHeader title="Project Details" subtitle={project.name} />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/volunteer/projects')}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold text-foreground">{project.name}</h2>
                  <Badge className="bg-primary/10 text-primary">{project.category}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{project.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{project.currentVolunteers}/{project.totalVolunteers} volunteers</span>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={handleJoinRequest}
              >
                Request to Join
              </Button>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">Volunteer Slots</span>
                <span className="text-foreground font-medium">{project.volunteersNeeded} spots remaining</span>
              </div>
              <Progress value={(project.currentVolunteers / project.totalVolunteers) * 100} className="h-3" />
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      <span className="text-sm text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Your Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm text-foreground">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Project Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.schedule.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        {index < project.schedule.length - 1 && (
                          <div className="absolute top-3 left-1 w-0.5 h-8 bg-border" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.day}</p>
                        <p className="text-sm text-muted-foreground">{item.activities}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Lead */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Project Lead</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {project.projectLead.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{project.projectLead.name}</p>
                    <p className="text-sm text-muted-foreground">{project.projectLead.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>{project.projectLead.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{project.projectLead.phone}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 text-primary border-primary hover:bg-accent">
                  Contact Lead
                </Button>
              </CardContent>
            </Card>

            {/* Skills You'll Gain */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills You'll Gain</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-accent text-accent-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Start Date</span>
                  <span className="font-medium text-foreground">{project.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">End Date</span>
                  <span className="font-medium text-foreground">{project.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium text-foreground">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Spots Left</span>
                  <span className="font-medium text-primary">{project.volunteersNeeded}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerProjectDetails;