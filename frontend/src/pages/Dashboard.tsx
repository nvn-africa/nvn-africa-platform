import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Users, FolderKanban, ClipboardCheck, CheckCircle, CalendarDays, TrendingUp } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { ProjectsTable } from '@/components/dashboard/ProjectsTable';
import { RequestsCard } from '@/components/dashboard/RequestsCard';
import { VolunteerSignupsChart, ProjectStatusChart, ApprovalRateChart } from '@/components/dashboard/Charts';
import { ProjectFormModal } from '@/components/modals/ProjectFormModal';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <StatCard
          title="Total Volunteers"
          value="1,234"
          icon={Users}
          variant="primary"
          trend={{ value: 12, isPositive: true }}
          link="/volunteers"
        />
        <StatCard
          title="Active Projects"
          value="8"
          icon={FolderKanban}
          variant="secondary"
          trend={{ value: 5, isPositive: true }}
          link="/projects"
        />
        <StatCard
          title="Pending Requests"
          value="23"
          icon={ClipboardCheck}
          variant="warning"
          link="/requests"
        />
        <StatCard
          title="Completed Projects"
          value="45"
          icon={CheckCircle}
          trend={{ value: 8, isPositive: true }}
          link="/projects"
        />
        <StatCard
          title="Performance"
          value="92%"
          icon={TrendingUp}
          trend={{ value: 8, isPositive: true }}
          link="/performance"
        />
      </div>

      {/* Projects Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Projects Overview</h2>
          <Button
            onClick={() => setShowProjectModal(true)}
            className="gradient-primary text-primary-foreground"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Project
          </Button>
        </div>
        <ProjectsTable />
      </div>

      {/* Charts and Requests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <VolunteerSignupsChart />
        </div>
        <RequestsCard />
      </div>

      {/* More Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectStatusChart />
        <ApprovalRateChart />
      </div>

      <ProjectFormModal open={showProjectModal} onClose={() => setShowProjectModal(false)} />
    </DashboardLayout>
  );
}
