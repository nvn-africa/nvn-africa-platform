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
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { toast } from "sonner";
import axios from 'axios';

export default function Dashboard() {
  // IMPORTANT: destructure user from useAuth()
  const { user } = useAuth();
  const [showProjectModal, setShowProjectModal] = useState(false);
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    activeVolunteers: null as number | null,
    projectsCompleted: null as number | null,
    communitiesReached: null as number | null,
    livesImpacted: null as number | null,
    totalProjects: null as number | null,
  });

  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState<string | null>(null);

  const setStatsFromResponse = (payload: any) => {
    // adapt this mapping to match your API response
    const data = payload?.data || payload;
    setStats({
      activeVolunteers: Number(data.activeVolunteers ?? data.active_volunteers ?? 0),
      projectsCompleted: Number(data.projectsCompleted ?? data.projects_completed ?? 0),
      communitiesReached: Number(data.communitiesReached ?? data.communities_reached ?? 0),
      livesImpacted: Number(data.livesImpacted ?? data.lives_impacted ?? 0),
      totalProjects: Number(data.totalProjects ?? data.totalProjects ?? 0),
    });
  };

  const fetchStats = async () => {
    setStatsLoading(true);
    setStatsError(null);
    try {
      const resp = await axios.get("http://localhost:3000/api/project/stats", {
        timeout: 8000,
      }); // <-- adjust path if needed
      if (resp.data?.success && resp.data?.data) {
        setStatsFromResponse(resp.data.data);
      } else if (resp.data) {
        // maybe API returns data at root
        setStatsFromResponse(resp.data);
        console.warn("Stats response did not indicate success, but data was found:", resp.data);
      } else {
        throw new Error("Invalid stats response");
      }
    } catch (err: any) {
      console.error("Failed to load stats:", err);
      setStatsError(err?.response?.data?.message || err.message || "Failed to load stats");

      toast.error(`Error loading stats: ${err?.response?.data?.message || err.message || "Unknown error"}`);
    } finally {
      setStatsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DashboardLayout title="Dashboard">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <StatCard
          title="Total Volunteers"
          value={stats.activeVolunteers}
          icon={Users}
          variant="primary"
          trend={{ value: 12, isPositive: true }}
          link="/volunteers"
        />
        <StatCard
          title="Active Projects"
          value={stats.totalProjects}
          icon={FolderKanban}
          variant="secondary"
          trend={{ value: 5, isPositive: true }}
          link="/projects"
        />
        <StatCard
          title="Pending Requests"
          value={stats.totalProjects}
          icon={ClipboardCheck}
          variant="warning"
          link="/requests"
        />
        <StatCard
          title="Completed Projects"
          value={stats.projectsCompleted}
          icon={CheckCircle}
          trend={{ value: 8, isPositive: true }}
          link="/projects"
        />
        <StatCard
          title="Lives Impacted"
          value={stats.livesImpacted}
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
