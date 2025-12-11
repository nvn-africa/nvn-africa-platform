import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TrendingUp, TrendingDown, Clock, Award, Users, Target } from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const monthlyHoursData = [
  { month: 'Jul', hours: 120, target: 150 },
  { month: 'Aug', hours: 180, target: 150 },
  { month: 'Sep', hours: 165, target: 150 },
  { month: 'Oct', hours: 210, target: 180 },
  { month: 'Nov', hours: 195, target: 180 },
  { month: 'Dec', hours: 240, target: 200 },
  { month: 'Jan', hours: 280, target: 220 },
];

const volunteerPerformance = [
  { month: 'Jul', active: 45, new: 12, churned: 5 },
  { month: 'Aug', active: 52, new: 15, churned: 8 },
  { month: 'Sep', active: 58, new: 18, churned: 12 },
  { month: 'Oct', active: 64, new: 22, churned: 16 },
  { month: 'Nov', active: 72, new: 25, churned: 17 },
  { month: 'Dec', active: 80, new: 28, churned: 20 },
  { month: 'Jan', active: 89, new: 32, churned: 23 },
];

const projectCompletionData = [
  { month: 'Jul', completed: 3, started: 5 },
  { month: 'Aug', completed: 4, started: 3 },
  { month: 'Sep', completed: 2, started: 6 },
  { month: 'Oct', completed: 5, started: 4 },
  { month: 'Nov', completed: 4, started: 5 },
  { month: 'Dec', completed: 6, started: 3 },
  { month: 'Jan', completed: 5, started: 7 },
];

const topVolunteers = [
  { id: 1, name: 'Fatima Diallo', avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100', hours: 156, projects: 4, trend: 12 },
  { id: 3, name: 'Aisha Mohammed', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100', hours: 234, projects: 3, trend: 8 },
  { id: 5, name: 'Grace Mwangi', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100', hours: 112, projects: 5, trend: 15 },
  { id: 2, name: 'Kwame Asante', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', hours: 89, projects: 2, trend: -3 },
  { id: 4, name: 'Emmanuel Obi', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', hours: 45, projects: 1, trend: 25 },
];

const kpiMetrics = [
  { label: 'Avg Hours/Volunteer', value: '127', change: 12, isPositive: true, icon: Clock },
  { label: 'Retention Rate', value: '85%', change: 5, isPositive: true, icon: Users },
  { label: 'Goal Achievement', value: '92%', change: 8, isPositive: true, icon: Target },
  { label: 'Certifications Earned', value: '34', change: 15, isPositive: true, icon: Award },
];

export default function Performance() {
  const [timeRange, setTimeRange] = useState('6months');
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Performance Tracking">
      {/* Time Range Filter */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">Track volunteer and project performance over time</p>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Time Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1month">Last Month</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="1year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpiMetrics.map((metric) => (
          <Card key={metric.label} className="card-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{metric.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {metric.isPositive ? (
                      <TrendingUp className="w-4 h-4 text-success" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive" />
                    )}
                    <span className={metric.isPositive ? 'text-success text-sm' : 'text-destructive text-sm'}>
                      {metric.isPositive ? '+' : ''}{metric.change}%
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-primary/10">
                  <metric.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Hours Contributed Over Time */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-base">Hours Contributed vs Target</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyHoursData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="hours"
                  name="Actual Hours"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary) / 0.2)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  name="Target"
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Volunteer Activity */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-base">Volunteer Activity Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={volunteerPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="active"
                  name="Active"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
                <Line
                  type="monotone"
                  dataKey="new"
                  name="New"
                  stroke="hsl(var(--success))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--success))' }}
                />
                <Line
                  type="monotone"
                  dataKey="churned"
                  name="Churned"
                  stroke="hsl(var(--destructive))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--destructive))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Project Completion */}
        <Card className="card-shadow lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Project Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={projectCompletionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="completed" name="Completed" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="started" name="Started" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-base">Top Performers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topVolunteers.slice(0, 5).map((volunteer, index) => (
              <div
                key={volunteer.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                onClick={() => navigate(`/volunteers/${volunteer.id}`)}
              >
                <span className="text-sm font-bold text-muted-foreground w-5">#{index + 1}</span>
                <Avatar className="w-8 h-8">
                  <AvatarImage src={volunteer.avatar} />
                  <AvatarFallback className="text-xs">
                    {volunteer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{volunteer.name}</p>
                  <p className="text-xs text-muted-foreground">{volunteer.hours}h • {volunteer.projects} projects</p>
                </div>
                <div className="flex items-center gap-1">
                  {volunteer.trend > 0 ? (
                    <TrendingUp className="w-3 h-3 text-success" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-destructive" />
                  )}
                  <span className={volunteer.trend > 0 ? 'text-xs text-success' : 'text-xs text-destructive'}>
                    {volunteer.trend > 0 ? '+' : ''}{volunteer.trend}%
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Goals Progress */}
      <Card className="card-shadow">
        <CardHeader>
          <CardTitle className="text-base">Organization Goals Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Annual Volunteer Hours', current: 12500, target: 15000, unit: 'hours' },
              { label: 'New Volunteers', current: 89, target: 100, unit: 'volunteers' },
              { label: 'Projects Completed', current: 29, target: 35, unit: 'projects' },
              { label: 'Community Reach', current: 4500, target: 5000, unit: 'people' },
            ].map((goal) => {
              const progress = Math.round((goal.current / goal.target) * 100);
              return (
                <div key={goal.label} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{goal.label}</span>
                    <Badge variant="outline" className={progress >= 80 ? 'bg-success/10 text-success border-success/20' : 'bg-warning/10 text-warning border-warning/20'}>
                      {progress}%
                    </Badge>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {goal.current.toLocaleString()} / {goal.target.toLocaleString()} {goal.unit}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
