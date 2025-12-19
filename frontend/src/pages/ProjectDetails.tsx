import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  Edit,
  Calendar,
  MapPin,
} from "lucide-react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

/* -------------------------------- TYPES -------------------------------- */

type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
};

type Project = {
  _id: string;
  title: string;
  description: string;
  status: "upcoming" | "ongoing" | "completed";
  start_date: string;
  end_date: string;
  community: string;
  beneficiariesCount: number;
  volunteers: User[];
  project_lead: User | string; // populated OR id
};

/* ------------------------------ CONSTANTS ------------------------------ */

const statusColors: Record<string, string> = {
  upcoming: "bg-warning/10 text-warning border-warning/20",
  ongoing: "bg-success/10 text-success border-success/20",
  completed: "bg-muted text-muted-foreground border-muted",
};

/* ---------------------------- COMPONENT ---------------------------- */

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  /* ----------------------------- FETCH ----------------------------- */

  useEffect(() => {
    const token = localStorage.getItem("inv-token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/project/view-project/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProject(res.data.data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, navigate]);

  /* ---------------------------- STATES ---------------------------- */

  if (loading) {
    return (
      <DashboardLayout title="Project Details">
        <p>Loading project...</p>
      </DashboardLayout>
    );
  }

  if (!project) {
    return (
      <DashboardLayout title="Project Details">
        <p>Project not found</p>
      </DashboardLayout>
    );
  }

  /* ------------------------- DERIVED DATA ------------------------- */

  const daysRemaining = Math.max(
    0,
    Math.ceil(
      (new Date(project.end_date).getTime() - Date.now()) /
      (1000 * 60 * 60 * 24)
    )
  );

  const projectLead: User | null =
    typeof project.project_lead === "object"
      ? project.project_lead
      : null;

  /* ---------------------------- JSX ---------------------------- */

  return (
    <DashboardLayout title="Project Details">
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => navigate("/projects")}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ============================ MAIN ============================ */}
        <div className="lg:col-span-2 space-y-6">
          {/* PROJECT INFO */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <div className="flex justify-between mb-4">
              <div>
                <Badge
                  variant="outline"
                  className={statusColors[project.status]}
                >
                  {project.status.toUpperCase()}
                </Badge>
                <h1 className="text-2xl font-bold mt-2">
                  {project.title}
                </h1>
              </div>

              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>

            <p className="text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {new Date(project.start_date).toLocaleDateString()}
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-destructive" />
                {new Date(project.end_date).toLocaleDateString()}
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                {project.community}
              </div>

              <div>Days left: {daysRemaining}</div>
            </div>
          </div>

          {/* VOLUNTEERS */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <h3 className="text-lg font-semibold mb-4">
              Volunteers ({project.volunteers.length})
            </h3>

            <div className="space-y-3">
              {project.volunteers.map((v) => (
                <div
                  key={v._id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                >
                  <Avatar>
                    <AvatarFallback>
                      {v.firstname[0]}
                      {v.lastname[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-medium">
                      {v.firstname} {v.lastname}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {v.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================ SIDEBAR ============================ */}
        <div className="space-y-6">
          {/* PROJECT LEAD */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <h3 className="text-lg font-semibold mb-4">
              Project Lead
            </h3>

            {projectLead ? (
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    {projectLead.firstname[0]}
                    {projectLead.lastname[0]}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-medium">
                    {projectLead.firstname} {projectLead.lastname}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {projectLead.email}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Project lead not assigned
              </p>
            )}
          </div>

          {/* QUICK STATS */}
          <div className="rounded-xl bg-card card-shadow p-6">
            <h3 className="text-lg font-semibold mb-4">
              Quick Stats
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Volunteers</span>
                <span>{project.volunteers.length}</span>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span>Status</span>
                <span>{project.status}</span>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span>Beneficiaries</span>
                <span>{project.beneficiariesCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
