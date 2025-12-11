import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MoreHorizontal, Eye, Mail, UserX } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const volunteers = [
  {
    id: 1,
    name: 'Fatima Diallo',
    email: 'fatima.diallo@email.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100',
    status: 'active' as const,
    joinDate: '2023-06-15',
    skills: ['Teaching', 'French', 'Community Outreach'],
    projects: ['Youth Education Initiative', 'Community Health Outreach'],
    hoursContributed: 156,
  },
  {
    id: 2,
    name: 'Kwame Asante',
    email: 'kwame.asante@email.com',
    phone: '+233 24 123 4567',
    location: 'Accra, Ghana',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
    status: 'active' as const,
    joinDate: '2023-08-22',
    skills: ['Logistics', 'Leadership', 'Event Planning'],
    projects: ['Environmental Cleanup'],
    hoursContributed: 89,
  },
  {
    id: 3,
    name: 'Aisha Mohammed',
    email: 'aisha.m@email.com',
    phone: '+254 712 345 678',
    location: 'Nairobi, Kenya',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100',
    status: 'inactive' as const,
    joinDate: '2023-03-10',
    skills: ['Programming', 'Mentoring', 'Data Analysis'],
    projects: ['Tech Skills Workshop'],
    hoursContributed: 234,
  },
  {
    id: 4,
    name: 'Emmanuel Obi',
    email: 'emmanuel.obi@email.com',
    phone: '+234 803 456 7890',
    location: 'Abuja, Nigeria',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    status: 'active' as const,
    joinDate: '2024-01-05',
    skills: ['Healthcare', 'First Aid', 'Counseling'],
    projects: ['Community Health Outreach'],
    hoursContributed: 45,
  },
  {
    id: 5,
    name: 'Grace Mwangi',
    email: 'grace.mwangi@email.com',
    phone: '+254 723 456 789',
    location: 'Mombasa, Kenya',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100',
    status: 'active' as const,
    joinDate: '2023-11-18',
    skills: ['Photography', 'Social Media', 'Marketing'],
    projects: ['Youth Education Initiative', 'Environmental Cleanup'],
    hoursContributed: 112,
  },
];

export default function Volunteers() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredVolunteers = volunteers.filter((v) => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || v.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout title="Volunteers">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search volunteers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="rounded-xl bg-card card-shadow p-4">
          <p className="text-sm text-muted-foreground">Total Volunteers</p>
          <p className="text-2xl font-bold text-foreground">{volunteers.length}</p>
        </div>
        <div className="rounded-xl bg-card card-shadow p-4">
          <p className="text-sm text-muted-foreground">Active</p>
          <p className="text-2xl font-bold text-success">{volunteers.filter(v => v.status === 'active').length}</p>
        </div>
        <div className="rounded-xl bg-card card-shadow p-4">
          <p className="text-sm text-muted-foreground">Total Hours</p>
          <p className="text-2xl font-bold text-primary">{volunteers.reduce((acc, v) => acc + v.hoursContributed, 0)}</p>
        </div>
        <div className="rounded-xl bg-card card-shadow p-4">
          <p className="text-sm text-muted-foreground">Avg Hours/Volunteer</p>
          <p className="text-2xl font-bold text-foreground">
            {Math.round(volunteers.reduce((acc, v) => acc + v.hoursContributed, 0) / volunteers.length)}
          </p>
        </div>
      </div>

      {/* Volunteers Table */}
      <div className="rounded-xl bg-card card-shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="font-semibold">Volunteer</TableHead>
              <TableHead className="font-semibold hidden md:table-cell">Location</TableHead>
              <TableHead className="font-semibold hidden lg:table-cell">Skills</TableHead>
              <TableHead className="font-semibold hidden sm:table-cell">Status</TableHead>
              <TableHead className="font-semibold hidden lg:table-cell">Hours</TableHead>
              <TableHead className="font-semibold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVolunteers.map((volunteer) => (
              <TableRow 
                key={volunteer.id} 
                className="hover:bg-muted/30 transition-colors cursor-pointer"
                onClick={() => navigate(`/volunteers/${volunteer.id}`)}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={volunteer.avatar} />
                      <AvatarFallback>{volunteer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{volunteer.name}</p>
                      <p className="text-sm text-muted-foreground">{volunteer.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {volunteer.location}
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <div className="flex gap-1 flex-wrap">
                    {volunteer.skills.slice(0, 2).map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {volunteer.skills.length > 2 && (
                      <Badge variant="secondary" className="text-xs">+{volunteer.skills.length - 2}</Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge
                    variant="outline"
                    className={volunteer.status === 'active'
                      ? 'bg-success/10 text-success border-success/20'
                      : 'bg-muted text-muted-foreground'
                    }
                  >
                    {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell font-medium">
                  {volunteer.hoursContributed}h
                </TableCell>
                <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => navigate(`/volunteers/${volunteer.id}`)}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <UserX className="w-4 h-4 mr-2" />
                        Deactivate
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}
