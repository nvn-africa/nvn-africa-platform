import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VolunteerHeader from '@/components/layout/VolunteerHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Filter,
  Clock
} from 'lucide-react';

const VolunteerProjects = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const projects = [
    // { 
    //   id: 1, 
    //   name: 'Community Health Camp', 
    //   description: 'Free health screening and medical assistance for rural communities. Join us to make healthcare accessible.',
    //   location: 'Lagos, Nigeria',
    //   date: 'Dec 15-20, 2024',
    //   volunteersNeeded: 5,
    //   totalVolunteers: 10,
    //   category: 'Health',
    //   duration: '5 days',
    //   urgency: 'high'
    // },
    // { 
    //   id: 2, 
    //   name: 'Youth Education Drive', 
    //   description: 'After-school tutoring and mentorship program for underprivileged youth in local communities.',
    //   location: 'Nairobi, Kenya',
    //   date: 'Dec 25, 2024 - Jan 10, 2025',
    //   volunteersNeeded: 8,
    //   totalVolunteers: 15,
    //   category: 'Education',
    //   duration: '2 weeks',
    //   urgency: 'medium'
    // },
    // { 
    //   id: 3, 
    //   name: 'Environmental Clean-up', 
    //   description: 'Beach and riverside cleaning initiative with recycling education for local residents.',
    //   location: 'Accra, Ghana',
    //   date: 'Dec 18, 2024',
    //   volunteersNeeded: 12,
    //   totalVolunteers: 20,
    //   category: 'Environment',
    //   duration: '1 day',
    //   urgency: 'low'
    // },
    // { 
    //   id: 4, 
    //   name: 'Women Empowerment Workshop', 
    //   description: 'Skills training and entrepreneurship education for women in rural areas.',
    //   location: 'Addis Ababa, Ethiopia',
    //   date: 'Jan 5-10, 2025',
    //   volunteersNeeded: 6,
    //   totalVolunteers: 8,
    //   category: 'Community',
    //   duration: '5 days',
    //   urgency: 'medium'
    // },
    // { 
    //   id: 5, 
    //   name: 'Food Distribution Drive', 
    //   description: 'Distributing food packages to families in need during the holiday season.',
    //   location: 'Kampala, Uganda',
    //   date: 'Dec 23-24, 2024',
    //   volunteersNeeded: 15,
    //   totalVolunteers: 25,
    //   category: 'Humanitarian',
    //   duration: '2 days',
    //   urgency: 'high'
    // },
    // { 
    //   id: 6, 
    //   name: 'Tech Skills Bootcamp', 
    //   description: 'Teaching basic computer and digital literacy skills to youth.',
    //   location: 'Dar es Salaam, Tanzania',
    //   date: 'Jan 15-20, 2025',
    //   volunteersNeeded: 4,
    //   totalVolunteers: 6,
    //   category: 'Education',
    //   duration: '5 days',
    //   urgency: 'low'
    // },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Health': return 'bg-success/10 text-success';
      case 'Education': return 'bg-primary/10 text-primary';
      case 'Environment': return 'bg-green-500/10 text-green-600';
      case 'Community': return 'bg-purple-500/10 text-purple-600';
      case 'Humanitarian': return 'bg-destructive/10 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-destructive/10 text-destructive';
      case 'medium': return 'bg-warning/10 text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'Health', 'Education', 'Environment', 'Community', 'Humanitarian'];

  return (
    <>
      <VolunteerHeader title="Available Projects" subtitle="Find and join projects that match your interests" />

      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="hover:border-primary/50 cursor-pointer transition-all hover-scale"
              onClick={() => navigate(`/volunteer/projects/${project.id}`)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                  {project.urgency === 'high' && (
                    <Badge className={getUrgencyColor(project.urgency)}>Urgent</Badge>
                  )}
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {project.totalVolunteers - project.volunteersNeeded}/{project.totalVolunteers} joined
                    </span>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Join
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default VolunteerProjects;