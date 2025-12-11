import MobilizerHeader from '@/components/layout/MobilizerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  FolderKanban, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  MessageSquare,
  Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobilizerDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: 'Assigned Volunteers', value: '24', change: '+3 this week', color: 'bg-mobilizer' },
    { icon: FolderKanban, label: 'Active Projects', value: '5', change: '2 upcoming', color: 'bg-blue-500' },
    { icon: Clock, label: 'Pending Confirmations', value: '8', change: 'Needs attention', color: 'bg-warning' },
    { icon: CheckCircle, label: 'Tasks Completed', value: '12', change: 'This week', color: 'bg-success' },
  ];

  const weeklyTasks = [
    { id: 1, task: 'Confirm volunteer attendance for Health Camp', due: 'Today', priority: 'high' },
    { id: 2, task: 'Review new volunteer applications', due: 'Tomorrow', priority: 'medium' },
    { id: 3, task: 'Submit project progress report', due: 'Wed', priority: 'medium' },
    { id: 4, task: 'Coordinate transport for Clean-up Drive', due: 'Thu', priority: 'low' },
    { id: 5, task: 'Team meeting prep', due: 'Fri', priority: 'low' },
  ];

  const projects = [
    { id: 1, name: 'Community Health Camp', status: 'ongoing', progress: 65, volunteers: 8, date: 'Dec 15-20' },
    { id: 2, name: 'Youth Education Drive', status: 'upcoming', progress: 0, volunteers: 12, date: 'Dec 25' },
    { id: 3, name: 'Environmental Clean-up', status: 'ongoing', progress: 40, volunteers: 6, date: 'Dec 18' },
  ];

  const recentVolunteers = [
    { id: 1, name: 'Sarah Okonkwo', role: 'Field Volunteer', status: 'active', lastActive: '2 hours ago', avatar: 'SO' },
    { id: 2, name: 'James Mwangi', role: 'Team Lead', status: 'active', lastActive: '5 hours ago', avatar: 'JM' },
    { id: 3, name: 'Fatima Ahmed', role: 'Support', status: 'pending', lastActive: '1 day ago', avatar: 'FA' },
    { id: 4, name: 'Daniel Eze', role: 'Field Volunteer', status: 'active', lastActive: '3 hours ago', avatar: 'DE' },
  ];

  const announcements = [
    { id: 1, title: 'New Safety Guidelines Released', time: '2 hours ago', type: 'important' },
    { id: 2, title: 'Monthly Report Deadline Extended', time: '5 hours ago', type: 'info' },
    { id: 3, title: 'Training Session Next Week', time: '1 day ago', type: 'info' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive';
      case 'medium': return 'bg-warning/10 text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-mobilizer/10 text-mobilizer';
      case 'upcoming': return 'bg-blue-500/10 text-blue-500';
      case 'completed': return 'bg-success/10 text-success';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <MobilizerHeader title="Dashboard" subtitle="Welcome back, John!" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Tasks for the Week */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Tasks for the Week</CardTitle>
              <Button variant="ghost" size="sm" className="text-mobilizer">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {weeklyTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 rounded border-border accent-mobilizer" />
                    <span className="text-sm text-foreground">{task.task}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{task.due}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="w-5 h-5 text-mobilizer" />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map((item) => (
                <div key={item.id} className="border-l-2 border-mobilizer pl-3 py-1">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full text-mobilizer border-mobilizer hover:bg-mobilizer-accent">
                View All Updates
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Project Overview */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Project Overview</CardTitle>
              <Button variant="ghost" size="sm" className="text-mobilizer" onClick={() => navigate('/mobilizer/projects')}>
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="p-4 border border-border rounded-lg hover:border-mobilizer/50 cursor-pointer transition-colors"
                  onClick={() => navigate(`/mobilizer/projects/${project.id}`)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-foreground">{project.name}</h4>
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" /> {project.volunteers} volunteers
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {project.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Volunteers */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">My Volunteers</CardTitle>
              <Button variant="ghost" size="sm" className="text-mobilizer" onClick={() => navigate('/mobilizer/volunteers')}>
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentVolunteers.map((volunteer) => (
                <div 
                  key={volunteer.id} 
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => navigate(`/mobilizer/volunteers/${volunteer.id}`)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-mobilizer text-mobilizer-foreground text-sm">
                        {volunteer.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">{volunteer.name}</p>
                      <p className="text-xs text-muted-foreground">{volunteer.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className={volunteer.status === 'active' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning-foreground'}>
                      {volunteer.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{volunteer.lastActive}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Team Messages Preview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-mobilizer" />
              Team Messages
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-mobilizer" onClick={() => navigate('/mobilizer/messages')}>
              Open Messages <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-8 text-center">
              <div>
                <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                <p className="text-muted-foreground">No new messages</p>
                <Button variant="outline" className="mt-3 text-mobilizer border-mobilizer hover:bg-mobilizer-accent" onClick={() => navigate('/mobilizer/messages')}>
                  Start a Conversation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MobilizerDashboard;
