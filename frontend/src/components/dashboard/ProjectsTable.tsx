import { useNavigate } from 'react-router-dom';
import { MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';
import axios from 'axios';

const statusColors: Record<string, string> = {
  active: 'bg-success/10 text-success border-success/20',
  completed: 'bg-muted text-muted-foreground border-muted',
  pending: 'bg-warning/10 text-warning border-warning/20',
};

interface ProjectsTableProps {
  onViewProject?: (id: number) => void;
  onEditProject?: (id: number) => void;
}



export function ProjectsTable({ onViewProject, onEditProject }: ProjectsTableProps) {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]);
  const BACKEND_URL = 'https://nvn-africa-platform.onrender.com';


  useEffect(() => {
    const token = localStorage.getItem("inv-token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/project/view-projects`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // ✅ backend returns { data: [...] }
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [navigate]);

  return (
    <div className="rounded-xl bg-card card-shadow overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead>Project Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Duration</TableHead>
            <TableHead className="hidden lg:table-cell">Project Lead</TableHead>
            <TableHead className="hidden sm:table-cell">Volunteers</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((project) => (
            <TableRow
              key={project._id}
              className="cursor-pointer hover:bg-muted/30"
              onClick={() => navigate(`/projects/${project._id}`)}
            >
              {/* TITLE */}
              <TableCell className="font-medium">
                {project.title}
              </TableCell>

              {/* STATUS */}
              <TableCell>
                <Badge
                  variant="outline"
                  className={statusColors[project.status]}
                >
                  {project.status}
                </Badge>
              </TableCell>

              {/* DURATION */}
              <TableCell className="hidden md:table-cell text-muted-foreground">
                {project.start_date
                  ? new Date(project.start_date).toLocaleDateString()
                  : "—"}{" "}
                -{" "}
                {project.end_date
                  ? new Date(project.end_date).toLocaleDateString()
                  : "—"}
              </TableCell>

              {/* PROJECT LEAD */}
              <TableCell className="hidden lg:table-cell">
                {project.project_lead ? (
                  <div className="flex items-center gap-2">
                    <Avatar className="w-7 h-7">
                      <AvatarImage src={project.project_lead.avatar} />
                      <AvatarFallback>
                        {project.project_lead.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">
                      {project.project_lead.name}
                    </span>
                  </div>
                ) : (
                  <span className="text-muted-foreground">Unassigned</span>
                )}
              </TableCell>

              {/* VOLUNTEERS */}
              <TableCell className="hidden sm:table-cell">
                {project.volunteers?.length || 0} /{" "}
                {project.neededVolunteers || 0}
              </TableCell>

              {/* ACTIONS */}
              <TableCell
                className="text-right"
                onClick={(e) => e.stopPropagation()}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => onViewProject?.(project._id)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => onEditProject?.(project._id)}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </DropdownMenuItem>

                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

