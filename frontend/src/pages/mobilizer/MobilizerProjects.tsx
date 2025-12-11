import { useNavigate } from 'react-router-dom';
import MobilizerHeader from '@/components/layout/MobilizerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const MobilizerProjects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      name: 'Community Health Camp',
      description: 'Free health screening and medical assistance for rural communities',
      status: 'ongoing',
      progress: 65,
      startDate: 'Dec 15, 2024',
      endDate: 'Dec 20, 2024',
      location: 'Nairobi, Kenya',
      volunteers: 8,
      maxVolunteers: 10,
      tasks: { completed: 12, total: 18 },
      teamMembers: ['SO', 'JM', 'DE', 'EA'],
    },
    {
      id: 2,
      name: 'Youth Education Drive',
      description: 'After-school tutoring and mentorship program for underprivileged youth',
      status: 'upcoming',
      progress: 0,
      startDate: 'Dec 25, 2024',
      endDate: 'Jan 10, 2025',
      location: 'Lagos, Nigeria',
      volunteers: 12,
      maxVolunteers: 15,
      tasks: { completed: 0, total: 20 },
      teamMembers: ['FA', 'GN', 'AD'],
    },
    {
      id: 3,
      name: 'Environmental Clean-up',
      description: 'Beach and riverside cleaning initiative with recycling education',
      status: 'ongoing',
      progress: 40,
      startDate: 'Dec 18, 2024',
      endDate: 'Dec 19, 2024',
      location: 'Accra, Ghana',
      volunteers: 6,
      maxVolunteers: 8,
      tasks: { completed: 6, total: 15 },
      teamMembers: ['DO', 'EA'],
    },
    {
      id: 4,
      name: 'Women Empowerment Workshop',
      description: 'Skills training and entrepreneurship education for women',
      status: 'completed',
      progress: 100,
      startDate: 'Nov 20, 2024',
      endDate: 'Nov 25, 2024',
      location: 'Addis Ababa, Ethiopia',
      volunteers: 5,
      maxVolunteers: 5,
      tasks: { completed: 10, total: 10 },
      teamMembers: ['FA', 'GN', 'SO'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-mobilizer/10 text-mobilizer border-mobilizer/30';
      case 'upcoming': return 'bg-blue-500/10 text-blue-500 border-blue-500/30';
      case 'completed': return 'bg-success/10 text-success border-success/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filterProjects = (status: string) => {
    if (status === 'all') return projects;
    return projects.filter(p => p.status === status);
  };

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Card className="hover:border-mobilizer/50 transition-all hover-scale cursor-pointer" onClick={() => navigate(`/mobilizer/projects/${project.id}`)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg text-foreground">{project.name}</h3>
              <Badge variant="outline" className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{project.startDate} - {project.endDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{project.location}</span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{project.volunteers}/{project.maxVolunteers} volunteers</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{project.tasks.completed}/{project.tasks.total} tasks</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {project.teamMembers.slice(0, 4).map((member, index) => (
              <Avatar key={index} className="w-8 h-8 border-2 border-background">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-mobilizer text-mobilizer-foreground text-xs">
                  {member}
                </AvatarFallback>
              </Avatar>
            ))}
            {project.teamMembers.length > 4 && (
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground border-2 border-background">
                +{project.teamMembers.length - 4}
              </div>
            )}
          </div>
          <Button variant="ghost" size="sm" className="text-mobilizer hover:bg-mobilizer-accent" onClick={(e) => { e.stopPropagation(); navigate(`/mobilizer/projects/${project.id}`); }}>
            View Details <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <MobilizerHeader title="Projects" subtitle="Projects you're supporting" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-foreground">{projects.length}</p>
              <p className="text-sm text-muted-foreground">Total Projects</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-mobilizer">{projects.filter(p => p.status === 'ongoing').length}</p>
              <p className="text-sm text-muted-foreground">Ongoing</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-blue-500">{projects.filter(p => p.status === 'upcoming').length}</p>
              <p className="text-sm text-muted-foreground">Upcoming</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-success">{projects.filter(p => p.status === 'completed').length}</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Tabs */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {filterProjects('all').map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ongoing" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {filterProjects('ongoing').map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {filterProjects('upcoming').map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {filterProjects('completed').map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default MobilizerProjects;
