import MobilizerHeader from '@/components/layout/MobilizerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown,
  Star,
  Clock,
  CheckCircle,
  Target,
  Award
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const MobilizerPerformance = () => {
  const volunteerPerformance = [
    { id: 1, name: 'David Osei', avatar: 'DO', score: 96, hours: 84, tasks: 42, trend: 'up', change: '+5%' },
    { id: 2, name: 'James Mwangi', avatar: 'JM', score: 95, hours: 72, tasks: 36, trend: 'up', change: '+3%' },
    { id: 3, name: 'Sarah Okonkwo', avatar: 'SO', score: 92, hours: 48, tasks: 24, trend: 'up', change: '+2%' },
    { id: 4, name: 'Emmanuel Asante', avatar: 'EA', score: 90, hours: 56, tasks: 28, trend: 'down', change: '-1%' },
    { id: 5, name: 'Daniel Eze', avatar: 'DE', score: 88, hours: 36, tasks: 18, trend: 'up', change: '+4%' },
  ];

  const monthlyData = [
    { month: 'Jul', hours: 180, tasks: 45 },
    { month: 'Aug', hours: 220, tasks: 55 },
    { month: 'Sep', hours: 195, tasks: 48 },
    { month: 'Oct', hours: 250, tasks: 62 },
    { month: 'Nov', hours: 280, tasks: 70 },
    { month: 'Dec', hours: 296, tasks: 75 },
  ];

  const teamStats = {
    totalHours: 296,
    targetHours: 350,
    tasksCompleted: 148,
    targetTasks: 180,
    avgPerformance: 92,
    projectsCompleted: 4,
  };

  return (
    <>
      <MobilizerHeader title="Performance Summary" subtitle="Track volunteer performance metrics" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-8 h-8 text-mobilizer" />
                <Badge className="bg-success/10 text-success">
                  <TrendingUp className="w-3 h-3 mr-1" /> +12%
                </Badge>
              </div>
              <p className="text-3xl font-bold text-foreground">{teamStats.totalHours}</p>
              <p className="text-sm text-muted-foreground">Hours This Month</p>
              <Progress value={(teamStats.totalHours / teamStats.targetHours) * 100} className="h-2 mt-2" />
              <p className="text-xs text-muted-foreground mt-1">Target: {teamStats.targetHours} hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
                <Badge className="bg-success/10 text-success">
                  <TrendingUp className="w-3 h-3 mr-1" /> +8%
                </Badge>
              </div>
              <p className="text-3xl font-bold text-foreground">{teamStats.tasksCompleted}</p>
              <p className="text-sm text-muted-foreground">Tasks Completed</p>
              <Progress value={(teamStats.tasksCompleted / teamStats.targetTasks) * 100} className="h-2 mt-2" />
              <p className="text-xs text-muted-foreground mt-1">Target: {teamStats.targetTasks} tasks</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-8 h-8 text-blue-500" />
                <Badge className="bg-mobilizer/10 text-mobilizer">
                  <Star className="w-3 h-3 mr-1" /> Excellent
                </Badge>
              </div>
              <p className="text-3xl font-bold text-foreground">{teamStats.avgPerformance}%</p>
              <p className="text-sm text-muted-foreground">Avg. Performance</p>
              <Progress value={teamStats.avgPerformance} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-warning" />
              </div>
              <p className="text-3xl font-bold text-foreground">{teamStats.projectsCompleted}</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
              <p className="text-xs text-mobilizer mt-2">This quarter</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Hours Trend Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hours Contributed (6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="hours" 
                      stroke="hsl(var(--mobilizer-primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--mobilizer-primary))' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Tasks Completed Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tasks Completed (6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar 
                      dataKey="tasks" 
                      fill="hsl(var(--mobilizer-primary))" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="w-5 h-5 text-warning" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {volunteerPerformance.map((volunteer, index) => (
                <div 
                  key={volunteer.id} 
                  className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mobilizer/10 text-mobilizer font-bold">
                      {index + 1}
                    </div>
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-mobilizer text-mobilizer-foreground">
                        {volunteer.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{volunteer.name}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{volunteer.hours} hours</span>
                        <span>{volunteer.tasks} tasks</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">{volunteer.score}%</p>
                      <div className={`flex items-center gap-1 text-sm ${
                        volunteer.trend === 'up' ? 'text-success' : 'text-destructive'
                      }`}>
                        {volunteer.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {volunteer.change}
                      </div>
                    </div>
                    {index < 3 && (
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-yellow-500' :
                        index === 1 ? 'bg-gray-400' : 'bg-amber-600'
                      }`}>
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MobilizerPerformance;
