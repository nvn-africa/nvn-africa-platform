import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Users, Calendar, MapPin, Clock } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const projectData = {
  id: 1,
  name: 'Youth Education Initiative',
  description: 'Providing educational resources and mentoring to youth in underserved communities. This initiative focuses on improving literacy rates, providing after-school tutoring, and offering career guidance to students aged 12-18.',
  status: 'active',
  startDate: '2024-01-15',
  endDate: '2024-06-30',
  location: 'Lagos, Nigeria',
  lead: {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    email: 'sarah.johnson@email.com',
  },
  mobilizers: [
    { name: 'Kwame Asante', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100' },
    { name: 'Aisha Mohammed', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100' },
  ],
  volunteers: [
    { name: 'Emmanuel Obi', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', role: 'Tutor' },
    { name: 'Grace Mwangi', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100', role: 'Mentor' },
    { name: 'Fatima Diallo', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100', role: 'Coordinator' },
  ],
  progress: 65,
  hoursContributed: 456,
  milestones: [
    { title: 'Program Launch', date: '2024-01-15', completed: true },
    { title: 'First Cohort Enrolled', date: '2024-02-01', completed: true },
    { title: 'Mid-term Assessment', date: '2024-04-15', completed: false },
    { title: 'Final Evaluation', date: '2024-06-30', completed: false },
  ],
};

const statusColors: Record<string, string> = {
  active: 'bg-success/10 text-success border-success/20',
  completed: 'bg-muted text-muted-foreground border-muted',
  pending: 'bg-warning/10 text-warning border-warning/20',
};

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Project Details">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => navigate('/projects')}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header Card */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge variant="outline" className={statusColors[projectData.status]}>
                  {projectData.status.charAt(0).toUpperCase() + projectData.status.slice(1)}
                </Badge>
                <h1 className="text-2xl font-bold text-foreground mt-2">{projectData.name}</h1>
              </div>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>

            <p className="text-muted-foreground mb-6">{projectData.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  {new Date(projectData.startDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-destructive" />
                <span className="text-muted-foreground">
                  {new Date(projectData.endDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-muted-foreground">{projectData.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-warning" />
                <span className="text-muted-foreground">{projectData.hoursContributed}h total</span>
              </div>
            </div>
          </div>

          {/* Progress Card */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Project Progress</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Overall Completion</span>
                <span className="font-semibold">{projectData.progress}%</span>
              </div>
              <Progress value={projectData.progress} className="h-3" />
            </div>

            <h4 className="font-medium text-foreground mb-3">Milestones</h4>
            <div className="space-y-3">
              {projectData.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${milestone.completed ? 'bg-success' : 'bg-border'}`} />
                  <div className="flex-1">
                    <p className={`font-medium ${milestone.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {milestone.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(milestone.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteers Card */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Volunteers</h3>
              <Badge variant="secondary">{projectData.volunteers.length} assigned</Badge>
            </div>
            <div className="space-y-3">
              {projectData.volunteers.map((volunteer, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={volunteer.avatar} />
                      <AvatarFallback>{volunteer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{volunteer.name}</p>
                      <p className="text-sm text-muted-foreground">{volunteer.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Lead */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Project Lead</h3>
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={projectData.lead.avatar} />
                <AvatarFallback>{projectData.lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{projectData.lead.name}</p>
                <p className="text-sm text-muted-foreground">{projectData.lead.email}</p>
              </div>
            </div>
          </div>

          {/* Mobilizers */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Mobilizers</h3>
            <div className="space-y-3">
              {projectData.mobilizers.map((mobilizer, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={mobilizer.avatar} />
                    <AvatarFallback>{mobilizer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <p className="font-medium text-foreground">{mobilizer.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Volunteers</span>
                <span className="font-semibold text-foreground">{projectData.volunteers.length}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Mobilizers</span>
                <span className="font-semibold text-foreground">{projectData.mobilizers.length}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total Hours</span>
                <span className="font-semibold text-foreground">{projectData.hoursContributed}h</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Days Remaining</span>
                <span className="font-semibold text-foreground">
                  {Math.max(0, Math.ceil((new Date(projectData.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
