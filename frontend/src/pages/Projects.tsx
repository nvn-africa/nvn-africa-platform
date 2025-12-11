import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Grid, List } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ProjectsTable } from '@/components/dashboard/ProjectsTable';
import { ProjectFormModal } from '@/components/modals/ProjectFormModal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    name: 'Youth Education Initiative',
    description: 'Providing educational resources and mentoring to youth in underserved communities.',
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    lead: { name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    volunteers: 24,
    progress: 65,
  },
  {
    id: 2,
    name: 'Community Health Outreach',
    description: 'Health awareness campaigns and free medical screenings in rural areas.',
    status: 'completed',
    startDate: '2023-09-01',
    endDate: '2024-02-28',
    lead: { name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    volunteers: 18,
    progress: 100,
  },
  {
    id: 3,
    name: 'Environmental Cleanup',
    description: 'Beach and community cleanup drives to promote environmental sustainability.',
    status: 'pending',
    startDate: '2024-03-01',
    endDate: '2024-05-15',
    lead: { name: 'Amara Okonkwo', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100' },
    volunteers: 32,
    progress: 0,
  },
  {
    id: 4,
    name: 'Tech Skills Workshop',
    description: 'Teaching digital literacy and coding skills to young adults.',
    status: 'active',
    startDate: '2024-02-01',
    endDate: '2024-08-31',
    lead: { name: 'David Mensah', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    volunteers: 15,
    progress: 40,
  },
];

const statusColors: Record<string, string> = {
  active: 'bg-success/10 text-success border-success/20',
  completed: 'bg-muted text-muted-foreground border-muted',
  pending: 'bg-warning/10 text-warning border-warning/20',
};

export default function Projects() {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState<typeof projects[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const navigate = useNavigate();

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewProject = (id: number) => {
    navigate(`/projects/${id}`);
  };

  const handleEditProject = (id: number) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      setEditingProject(project);
      setShowProjectModal(true);
    }
  };

  return (
    <DashboardLayout title="Projects">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex rounded-lg border border-border overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn('rounded-none', viewMode === 'grid' && 'bg-muted')}
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn('rounded-none', viewMode === 'table' && 'bg-muted')}
              onClick={() => setViewMode('table')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
          <Button
            onClick={() => {
              setEditingProject(null);
              setShowProjectModal(true);
            }}
            className="gradient-primary text-primary-foreground"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Project
          </Button>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-card card-shadow p-6 hover:card-shadow-hover transition-shadow cursor-pointer"
              onClick={() => handleViewProject(project.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className={statusColors[project.status]}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {project.volunteers} volunteers
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={project.lead.avatar} />
                    <AvatarFallback>{project.lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">{project.lead.name}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="text-xs text-muted-foreground">
                  {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ProjectsTable onViewProject={handleViewProject} onEditProject={handleEditProject} />
      )}

      <ProjectFormModal
        open={showProjectModal}
        onClose={() => {
          setShowProjectModal(false);
          setEditingProject(null);
        }}
        project={editingProject ? {
          id: editingProject.id,
          name: editingProject.name,
          description: editingProject.description,
          status: editingProject.status,
          startDate: editingProject.startDate,
          endDate: editingProject.endDate,
          leadId: '1',
        } : undefined}
      />
    </DashboardLayout>
  );
}
