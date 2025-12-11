import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobilizerHeader from '@/components/layout/MobilizerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Phone, Mail, Eye, MessageSquare, Filter } from 'lucide-react';

const MobilizerVolunteers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const volunteers = [
    { id: 1, name: 'Sarah Okonkwo', email: 'sarah.o@email.com', phone: '+234 801 234 5678', status: 'active', role: 'Field Volunteer', lastActivity: '2 hours ago', projects: 3, avatar: 'SO' },
    { id: 2, name: 'James Mwangi', email: 'james.m@email.com', phone: '+254 712 345 678', status: 'active', role: 'Team Lead', lastActivity: '5 hours ago', projects: 5, avatar: 'JM' },
    { id: 3, name: 'Fatima Ahmed', email: 'fatima.a@email.com', phone: '+251 911 234 567', status: 'pending', role: 'Support', lastActivity: '1 day ago', projects: 1, avatar: 'FA' },
    { id: 4, name: 'Daniel Eze', email: 'daniel.e@email.com', phone: '+234 802 345 6789', status: 'active', role: 'Field Volunteer', lastActivity: '3 hours ago', projects: 4, avatar: 'DE' },
    { id: 5, name: 'Grace Nyambura', email: 'grace.n@email.com', phone: '+254 722 456 789', status: 'inactive', role: 'Support', lastActivity: '1 week ago', projects: 2, avatar: 'GN' },
    { id: 6, name: 'Emmanuel Asante', email: 'emmanuel.a@email.com', phone: '+233 244 567 890', status: 'active', role: 'Field Volunteer', lastActivity: '1 hour ago', projects: 6, avatar: 'EA' },
    { id: 7, name: 'Amina Diallo', email: 'amina.d@email.com', phone: '+221 77 123 4567', status: 'pending', role: 'New Volunteer', lastActivity: '2 days ago', projects: 0, avatar: 'AD' },
    { id: 8, name: 'David Osei', email: 'david.o@email.com', phone: '+233 277 890 123', status: 'active', role: 'Team Lead', lastActivity: '30 min ago', projects: 8, avatar: 'DO' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success/10 text-success';
      case 'pending': return 'bg-warning/10 text-warning-foreground';
      case 'inactive': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filteredVolunteers = volunteers.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         v.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || v.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = [
    { label: 'Total Volunteers', value: volunteers.length },
    { label: 'Active', value: volunteers.filter(v => v.status === 'active').length },
    { label: 'Pending', value: volunteers.filter(v => v.status === 'pending').length },
    { label: 'Inactive', value: volunteers.filter(v => v.status === 'inactive').length },
  ];

  return (
    <>
      <MobilizerHeader title="Volunteers" subtitle="Manage your assigned volunteers" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search volunteers by name or email..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Volunteers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Volunteer Directory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Volunteer</TableHead>
                    <TableHead className="hidden md:table-cell">Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden sm:table-cell">Role</TableHead>
                    <TableHead className="hidden lg:table-cell">Projects</TableHead>
                    <TableHead className="hidden lg:table-cell">Last Activity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVolunteers.map((volunteer) => (
                    <TableRow key={volunteer.id} className="cursor-pointer hover:bg-muted/50" onClick={() => navigate(`/mobilizer/volunteers/${volunteer.id}`)}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback className="bg-mobilizer text-mobilizer-foreground text-sm">
                              {volunteer.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-foreground">{volunteer.name}</p>
                            <p className="text-xs text-muted-foreground md:hidden">{volunteer.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Mail className="w-3 h-3" /> {volunteer.email}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Phone className="w-3 h-3" /> {volunteer.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(volunteer.status)}>
                          {volunteer.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell text-muted-foreground">
                        {volunteer.role}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell text-muted-foreground">
                        {volunteer.projects} projects
                      </TableCell>
                      <TableCell className="hidden lg:table-cell text-muted-foreground">
                        {volunteer.lastActivity}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-mobilizer hover:bg-mobilizer-accent" onClick={() => navigate(`/mobilizer/volunteers/${volunteer.id}`)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-mobilizer hover:bg-mobilizer-accent" onClick={() => navigate('/mobilizer/messages')}>
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MobilizerVolunteers;
