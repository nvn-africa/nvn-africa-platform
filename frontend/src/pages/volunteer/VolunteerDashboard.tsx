import { useNavigate } from 'react-router-dom';
import VolunteerHeader from '@/components/layout/VolunteerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  FolderKanban,
  Clock,
  Calendar,
  ArrowRight,
  MapPin,
  Users,
  Star,
  Bell
} from 'lucide-react';

const VolunteerDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: FolderKanban, label: 'Projects Joined', value: '0', color: 'bg-primary' },
    { icon: Clock, label: 'Hours Volunteered', value: '0', color: 'bg-success' },
    { icon: Calendar, label: 'Upcoming Events', value: '0', color: 'bg-warning' },
    { icon: Star, label: 'Rating', value: '0', color: 'bg-blue-500' },
  ];

  const availableProjects = [
    {
      id: 1,
      name: 'Comming Soon',

    }
  ];

  const upcomingEvents = [
    { id: 1, name: 'Comming Soon' },

  ];

  // const notifications = [
  //   { id: 1, message: 'Your request for Health Camp was approved!', time: '2 hours ago', type: 'success' },
  //   { id: 2, message: 'New project available: Youth Education Drive', time: '5 hours ago', type: 'info' },
  //   { id: 3, message: 'Reminder: Training session tomorrow', time: '1 day ago', type: 'warning' },
  // ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Health': return 'bg-success/10 text-success';
      case 'Education': return 'bg-primary/10 text-primary';
      case 'Environment': return 'bg-green-500/10 text-green-600';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <VolunteerHeader title="Dashboard" subtitle="Welcome back, John!" />

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
          {/* Available Projects */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Available Projects</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary" onClick={() => navigate('/volunteer/projects')}>
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 border border-border rounded-xl hover:border-primary/50 cursor-pointer transition-all"
                  onClick={() => navigate(`/volunteer/projects/${project.id}`)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{project.name}</h4>
                      {/* <p className="text-sm text-muted-foreground">{project.description}</p> */}
                    </div>
                    {/* <Badge className={getCategoryColor(project.category)}>{project.category}</Badge> */}
                  </div>
                  {/* <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {project.volunteersNeeded} needed
                    </span>
                  </div> */}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Sidebar Cards */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-foreground">{event.name}</p>
                      {/* <p className="text-xs text-muted-foreground">{event.time}</p> */}
                    </div>
                    {/* <Badge variant="outline" className="text-primary border-primary">
                      {event.date}
                    </Badge> */}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Notifications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  Notifications
                </CardTitle>
              </CardHeader>
              {/* <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="border-l-2 border-primary pl-3 py-1">
                    <p className="text-sm text-foreground">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full text-primary border-primary hover:bg-accent"
                  onClick={() => navigate('/volunteer/notifications')}
                >
                  View All
                </Button>
              </CardContent> */}
            </Card>
          </div>
        </div>

        {/* Volunteer Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Volunteering Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Hours Goal (200 hrs)</span>
                  <span className="font-medium text-foreground">78%</span>
                </div>
                <Progress value={78} className="h-3" />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Projects Goal (10)</span>
                  <span className="font-medium text-foreground">80%</span>
                </div>
                <Progress value={80} className="h-3" />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Skills Earned</span>
                  <span className="font-medium text-foreground">5/8</span>
                </div>
                <Progress value={62.5} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default VolunteerDashboard;