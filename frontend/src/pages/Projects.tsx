import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, Filter, Grid, List } from "lucide-react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProjectsTable } from "@/components/dashboard/ProjectsTable";
import { ProjectFormModal } from "@/components/modals/ProjectFormModal";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import { Project } from "@/types/project";
import axios from "axios";

export default function Projects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  // const [statusFilter, setStatusFilter] = useState<
  //   "all" | Project["status"]
  // >("all");

  const [showProjectModal, setShowProjectModal] = useState(false);
  // const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("inv-token");

    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/project/view-projects",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProjects(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // const filteredProjects = useMemo(() => {
  //   return projects.filter((p) => {
  //     const matchesSearch = p.title
  //       .toLowerCase()
  //       .includes(searchQuery.toLowerCase());
  //     const matchesStatus =
  //       statusFilter === "all" || p.status === statusFilter;
  //     return matchesSearch && matchesStatus;
  //   });
  // }, [projects, searchQuery, statusFilter]);

  return (
    <DashboardLayout title="Projects">
      {/* Header */}
      {/* <div className="flex gap-3 mb-6">
        <Input
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-32">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={() => setViewMode(viewMode === "grid" ? "table" : "grid")}>
          {viewMode === "grid" ? <List /> : <Grid />}
        </Button>

        <Button onClick={() => setShowProjectModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Create
        </Button>
      </div> */}

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

      <ProjectFormModal open={showProjectModal} onClose={() => setShowProjectModal(false)} />
    </DashboardLayout>
  );
}
