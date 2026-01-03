import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VolunteerHeader from '@/components/layout/VolunteerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Users
} from 'lucide-react';

const VolunteerMyProjects = () => {
  const navigate = useNavigate();

  const projects = [
    // {
    //   id: 1,
    //   name: 'Coming Soon',
    //   description: 'Free health screening and medical assistance',
    //   status: 'ongoing',
    //   progress: 65,
    //   location: 'Lagos, Nigeria',
    //   date: 'Dec 15-20, 2024',
    //   hoursLogged: 24,
    //   tasksCompleted: 8,
    //   totalTasks: 12,
    //   role: 'Field Volunteer'
    // },
    // {
    //   id: 2,
    //   name: 'Environmental Clean-up',
    //   description: 'Beach cleaning initiative',
    //   status: 'ongoing',
    //   progress: 40,
    //   location: 'Accra, Ghana',
    //   date: 'Dec 18, 2024',
    //   hoursLogged: 6,
    //   tasksCompleted: 3,
    //   totalTasks: 8,
    //   role: 'Team Member'
    // },
    // {
    //   id: 3,
    //   name: 'Youth Education Drive',
    //   description: 'After-school tutoring program',
    //   status: 'pending',
    //   progress: 0,
    //   location: 'Nairobi, Kenya',
    //   date: 'Dec 25, 2024',
    //   hoursLogged: 0,
    //   tasksCompleted: 0,
    //   totalTasks: 10,
    //   role: 'Tutor'
    // },
    // {
    //   id: 4,
    //   name: 'Women Empowerment Workshop',
    //   description: 'Skills training for women',
    //   status: 'completed',
    //   progress: 100,
    //   location: 'Addis Ababa, Ethiopia',
    //   date: 'Nov 20-25, 2024',
    //   hoursLogged: 36,
    //   tasksCompleted: 10,
    //   totalTasks: 10,
    //   role: 'Workshop Facilitator'
    // },
    // {
    //   id: 5,
    //   name: 'Food Distribution Drive',
    //   description: 'Distributing food to families',
    //   status: 'completed',
    //   progress: 100,
    //   location: 'Kampala, Uganda',
    //   date: 'Oct 15-16, 2024',
    //   hoursLogged: 16,
    //   tasksCompleted: 8,
    //   totalTasks: 8,
    //   role: 'Logistics Support'
    // },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-primary/10 text-primary';
      case 'pending': return 'bg-warning/10 text-warning-foreground';
      case 'completed': return 'bg-success/10 text-success';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filterProjects = (status: string) => {
    if (status === 'all') return projects;
    return projects.filter(p => p.status === status);
  };

  const stats = {
    ongoing: projects.filter(p => p.status === 'ongoing').length,
    pending: projects.filter(p => p.status === 'pending').length,
    completed: projects.filter(p => p.status === 'completed').length,
    totalHours: projects.reduce((sum, p) => sum + p.hoursLogged, 0)
  };

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <Card
      className="hover:border-primary/50 cursor-pointer transition-all"
      onClick={() => navigate(`/volunteer/projects/${project.id}`)}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground">{project.name}</h3>
              <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {project.date}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" /> {project.role}
          </span>
        </div>

        {project.status !== 'pending' && (
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium text-foreground">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" /> {project.hoursLogged} hours logged
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> {project.tasksCompleted}/{project.totalTasks} tasks
              </span>
            </div>
          </div>
        )}

        {project.status === 'pending' && (
          <div className="flex items-center gap-2 text-warning-foreground bg-warning/10 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">Awaiting approval from project lead</span>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <>
      <VolunteerHeader title="My Projects" subtitle="Track your volunteering journey" />

      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Ongoing</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-warning">0</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-success">0</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-foreground">0</p>
              <p className="text-sm text-muted-foreground">Total Hours</p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          {['all', 'ongoing', 'pending', 'completed'].map((status) => (
            <TabsContent key={status} value={status} className="mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {filterProjects(status).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              {filterProjects(status).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No {status} projects found.</p>
                  <Button
                    variant="outline"
                    className="mt-4 text-primary border-primary"
                    onClick={() => navigate('/volunteer/projects')}
                  >
                    Browse Available Projects
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default VolunteerMyProjects;