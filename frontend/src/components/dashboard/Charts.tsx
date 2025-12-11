import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const volunteerSignups = [
  { month: 'Jan', signups: 45 },
  { month: 'Feb', signups: 52 },
  { month: 'Mar', signups: 61 },
  { month: 'Apr', signups: 48 },
  { month: 'May', signups: 73 },
  { month: 'Jun', signups: 89 },
];

const projectStatus = [
  { name: 'Completed', value: 12, color: 'hsl(var(--success))' },
  { name: 'Active', value: 8, color: 'hsl(var(--primary))' },
  { name: 'Pending', value: 5, color: 'hsl(var(--warning))' },
];

const approvalRate = [
  { month: 'Jan', approved: 85, rejected: 15 },
  { month: 'Feb', approved: 78, rejected: 22 },
  { month: 'Mar', approved: 92, rejected: 8 },
  { month: 'Apr', approved: 88, rejected: 12 },
  { month: 'May', approved: 95, rejected: 5 },
  { month: 'Jun', approved: 91, rejected: 9 },
];

export function VolunteerSignupsChart() {
  const navigate = useNavigate();
  
  return (
    <div className="rounded-xl bg-card card-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Volunteer Sign-ups</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-primary hover:text-primary"
          onClick={() => navigate('/volunteers')}
        >
          View all
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={volunteerSignups}>
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
          <Bar dataKey="signups" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ProjectStatusChart() {
  const navigate = useNavigate();
  
  return (
    <div className="rounded-xl bg-card card-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Project Status</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-primary hover:text-primary"
          onClick={() => navigate('/projects')}
        >
          View all
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={projectStatus}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {projectStatus.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => <span className="text-foreground">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ApprovalRateChart() {
  const navigate = useNavigate();
  
  return (
    <div className="rounded-xl bg-card card-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Request Approval Rate</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-primary hover:text-primary"
          onClick={() => navigate('/requests')}
        >
          View all
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={approvalRate}>
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
          <Legend formatter={(value) => <span className="text-foreground capitalize">{value}</span>} />
          <Line
            type="monotone"
            dataKey="approved"
            stroke="hsl(var(--success))"
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--success))' }}
          />
          <Line
            type="monotone"
            dataKey="rejected"
            stroke="hsl(var(--destructive))"
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--destructive))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
