import { useParams, useNavigate } from 'react-router-dom';
import MobilizerHeader from '@/components/layout/MobilizerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar,
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  Target,
  FileText,
  MessageSquare
} from 'lucide-react';

const MobilizerProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data
  const project = {
    id: Number(id),
    name: 'Community Health Camp',
    description: 'A comprehensive community health initiative providing free health screenings, vaccinations, and health education to underserved communities in Lagos.',
    status: 'ongoing',
    progress: 65,
    location: 'Lagos Community Center, Victoria Island',
    startDate: 'Dec 15, 2024',
    endDate: 'Dec 20, 2024',
    totalHours: 240,
    hoursLogged: 156,
    objectives: [
      'Provide free health screenings to 500+ community members',
      'Distribute health education materials',
      'Conduct vaccination drives for children',
      'Offer nutritional counseling sessions'
    ],
    team: [
      { id: 1, name: 'Sarah Okonkwo', role: 'Field Lead', status: 'active', avatar: 'SO' },
      { id: 2, name: 'James Mwangi', role: 'Coordinator', status: 'active', avatar: 'JM' },
      { id: 3, name: 'Fatima Ahmed', role: 'Support', status: 'active', avatar: 'FA' },
      { id: 4, name: 'Daniel Eze', role: 'Field Volunteer', status: 'active', avatar: 'DE' },
      { id: 5, name: 'Grace Nyambura', role: 'Documentation', status: 'pending', avatar: 'GN' },
    ],
    tasks: [
      { id: 1, name: 'Set up health screening stations', status: 'completed', assignee: 'Sarah O.' },
      { id: 2, name: 'Coordinate volunteer schedules', status: 'completed', assignee: 'James M.' },
      { id: 3, name: 'Prepare educational materials', status: 'ongoing', assignee: 'Fatima A.' },
      { id: 4, name: 'Arrange transportation', status: 'ongoing', assignee: 'Daniel E.' },
      { id: 5, name: 'Document event activities', status: 'pending', assignee: 'Grace N.' },
    ],
    milestones: [
      { name: 'Planning Phase', date: 'Nov 20', status: 'completed' },
      { name: 'Team Assembly', date: 'Dec 1', status: 'completed' },
      { name: 'Resource Procurement', date: 'Dec 10', status: 'completed' },
      { name: 'Event Kickoff', date: 'Dec 15', status: 'ongoing' },
      { name: 'Final Report', date: 'Dec 25', status: 'pending' },
    ],
    stats: {
      volunteers: 8,
      tasksTotal: 15,
      tasksCompleted: 10,
      beneficiaries: 320
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-mobilizer/10 text-mobilizer';
      case 'completed': return 'bg-success/10 text-success';
      case 'pending': return 'bg-warning/10 text-warning-foreground';
      case 'active': return 'bg-success/10 text-success';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTaskIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'ongoing': return <Clock className="w-4 h-4 text-mobilizer" />;
      default: return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <>
      <MobilizerHeader title="Project Details" subtitle={project.name} />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/mobilizer/projects')}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-foreground">{project.name}</h2>
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.startDate} - {project.endDate}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {project.stats.volunteers} volunteers
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4" />
                    {project.stats.beneficiaries} beneficiaries
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="text-mobilizer border-mobilizer hover:bg-mobilizer-accent">
                  <FileText className="w-4 h-4 mr-2" />
                  View Report
                </Button>
                <Button className="bg-mobilizer hover:bg-mobilizer-secondary text-mobilizer-foreground">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Team Chat
                </Button>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="text-foreground font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-3" />
              <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                <span>{project.hoursLogged} hours logged</span>
                <span>{project.totalHours} hours target</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-mobilizer mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{project.stats.volunteers}</p>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{project.stats.tasksCompleted}/{project.stats.tasksTotal}</p>
              <p className="text-sm text-muted-foreground">Tasks Complete</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{project.hoursLogged}</p>
              <p className="text-sm text-muted-foreground">Hours Logged</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-warning mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{project.stats.beneficiaries}</p>
              <p className="text-sm text-muted-foreground">Beneficiaries</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Objectives */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Objectives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-mobilizer flex items-center justify-center text-mobilizer-foreground text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm text-foreground">{objective}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Team Members</CardTitle>
              <Button variant="ghost" size="sm" className="text-mobilizer">
                Manage Team
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.team.map((member) => (
                <div 
                  key={member.id} 
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => navigate(`/mobilizer/volunteers/${member.id}`)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-mobilizer text-mobilizer-foreground text-sm">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(member.status)}>{member.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Tasks */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Tasks</CardTitle>
              <Button variant="ghost" size="sm" className="text-mobilizer">
                Add Task
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    {getTaskIcon(task.status)}
                    <div>
                      <p className="text-sm font-medium text-foreground">{task.name}</p>
                      <p className="text-xs text-muted-foreground">Assigned to: {task.assignee}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Milestones */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {project.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4 pb-6 last:pb-0">
                    <div className="relative">
                      <div className={`w-4 h-4 rounded-full ${
                        milestone.status === 'completed' ? 'bg-success' : 
                        milestone.status === 'ongoing' ? 'bg-mobilizer' : 'bg-muted'
                      }`} />
                      {index < project.milestones.length - 1 && (
                        <div className="absolute top-4 left-1.5 w-0.5 h-full bg-border" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground">{milestone.name}</p>
                        <Badge variant="outline" className={getStatusColor(milestone.status)}>
                          {milestone.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{milestone.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MobilizerProjectDetails;