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

const projects = [
  {
    id: 1,
    name: 'Youth Education Initiative',
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    lead: { name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    volunteers: 24,
  },
  {
    id: 2,
    name: 'Community Health Outreach',
    status: 'completed',
    startDate: '2023-09-01',
    endDate: '2024-02-28',
    lead: { name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    volunteers: 18,
  },
  {
    id: 3,
    name: 'Environmental Cleanup',
    status: 'pending',
    startDate: '2024-03-01',
    endDate: '2024-05-15',
    lead: { name: 'Amara Okonkwo', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100' },
    volunteers: 32,
  },
  {
    id: 4,
    name: 'Tech Skills Workshop',
    status: 'active',
    startDate: '2024-02-01',
    endDate: '2024-08-31',
    lead: { name: 'David Mensah', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    volunteers: 15,
  },
];

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
  
  return (
    <div className="rounded-xl bg-card card-shadow overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="font-semibold">Project Name</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold hidden md:table-cell">Duration</TableHead>
            <TableHead className="font-semibold hidden lg:table-cell">Project Lead</TableHead>
            <TableHead className="font-semibold hidden sm:table-cell">Volunteers</TableHead>
            <TableHead className="font-semibold text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow 
              key={project.id} 
              className="hover:bg-muted/30 transition-colors cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell>
                <Badge variant="outline" className={statusColors[project.status]}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">
                {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                <div className="flex items-center gap-2">
                  <Avatar className="w-7 h-7">
                    <AvatarImage src={project.lead.avatar} />
                    <AvatarFallback>{project.lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{project.lead.name}</span>
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">{project.volunteers}</TableCell>
              <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onViewProject?.(project.id)}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEditProject?.(project.id)}>
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
