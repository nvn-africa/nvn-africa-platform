import { useState } from 'react';
import { Search, Filter, Check, X, Eye, Clock, CheckCircle, XCircle } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

const requests = [
  {
    id: 1,
    volunteer: {
      name: 'Fatima Diallo',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100',
      email: 'fatima@email.com',
      phone: '+234 801 234 5678',
      location: 'Lagos, Nigeria',
    },
    project: 'Youth Education Initiative',
    date: '2024-02-28',
    status: 'pending',
    skills: ['Teaching', 'French', 'Communication'],
    message: 'I am passionate about education and would love to contribute to this initiative. I have 5 years of experience teaching in community schools.',
  },
  {
    id: 2,
    volunteer: {
      name: 'Kwame Asante',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
      email: 'kwame@email.com',
      phone: '+233 24 123 4567',
      location: 'Accra, Ghana',
    },
    project: 'Environmental Cleanup',
    date: '2024-02-27',
    status: 'pending',
    skills: ['Logistics', 'Leadership', 'Event Planning'],
    message: 'As an environmental advocate, I want to be part of the solution. I can help coordinate teams and manage logistics for cleanup events.',
  },
  {
    id: 3,
    volunteer: {
      name: 'Aisha Mohammed',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100',
      email: 'aisha@email.com',
      phone: '+254 712 345 678',
      location: 'Nairobi, Kenya',
    },
    project: 'Tech Skills Workshop',
    date: '2024-02-26',
    status: 'approved',
    skills: ['Programming', 'Mentoring', 'Data Analysis'],
    message: 'I am a software developer and would like to share my knowledge with young adults looking to enter the tech industry.',
  },
  {
    id: 4,
    volunteer: {
      name: 'Emmanuel Obi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      email: 'emmanuel@email.com',
      phone: '+234 803 456 7890',
      location: 'Abuja, Nigeria',
    },
    project: 'Community Health Outreach',
    date: '2024-02-25',
    status: 'rejected',
    skills: ['Healthcare', 'First Aid'],
    message: 'I am a healthcare professional interested in volunteering for the health outreach program.',
  },
];

const statusColors: Record<string, string> = {
  pending: 'bg-warning/10 text-warning border-warning/20',
  approved: 'bg-success/10 text-success border-success/20',
  rejected: 'bg-destructive/10 text-destructive border-destructive/20',
};

const statusIcons: Record<string, React.ElementType> = {
  pending: Clock,
  approved: CheckCircle,
  rejected: XCircle,
};

export default function Requests() {
  const [searchQuery, setSearchQuery] = useState('');
  const [projectFilter, setProjectFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState<typeof requests[0] | null>(null);
  const [activeTab, setActiveTab] = useState('pending');

  const filteredRequests = requests.filter((r) => {
    const matchesSearch = r.volunteer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProject = projectFilter === 'all' || r.project === projectFilter;
    const matchesStatus = r.status === activeTab;
    return matchesSearch && matchesProject && matchesStatus;
  });

  const getStatusCount = (status: string) => requests.filter(r => r.status === status).length;

  return (
    <DashboardLayout title="Volunteer Requests">
      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl bg-warning/10 p-4 text-center">
          <Clock className="w-8 h-8 mx-auto mb-2 text-warning" />
          <p className="text-2xl font-bold text-foreground">{getStatusCount('pending')}</p>
          <p className="text-sm text-muted-foreground">Pending</p>
        </div>
        <div className="rounded-xl bg-success/10 p-4 text-center">
          <CheckCircle className="w-8 h-8 mx-auto mb-2 text-success" />
          <p className="text-2xl font-bold text-foreground">{getStatusCount('approved')}</p>
          <p className="text-sm text-muted-foreground">Approved</p>
        </div>
        <div className="rounded-xl bg-destructive/10 p-4 text-center">
          <XCircle className="w-8 h-8 mx-auto mb-2 text-destructive" />
          <p className="text-2xl font-bold text-foreground">{getStatusCount('rejected')}</p>
          <p className="text-sm text-muted-foreground">Rejected</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by volunteer name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={projectFilter} onValueChange={setProjectFilter}>
          <SelectTrigger className="w-full sm:w-56">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by project" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Projects</SelectItem>
            <SelectItem value="Youth Education Initiative">Youth Education Initiative</SelectItem>
            <SelectItem value="Environmental Cleanup">Environmental Cleanup</SelectItem>
            <SelectItem value="Tech Skills Workshop">Tech Skills Workshop</SelectItem>
            <SelectItem value="Community Health Outreach">Community Health Outreach</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="pending" className="gap-2">
            <Clock className="w-4 h-4" />
            Pending
            <Badge variant="secondary" className="ml-1">{getStatusCount('pending')}</Badge>
          </TabsTrigger>
          <TabsTrigger value="approved" className="gap-2">
            <CheckCircle className="w-4 h-4" />
            Approved
          </TabsTrigger>
          <TabsTrigger value="rejected" className="gap-2">
            <XCircle className="w-4 h-4" />
            Rejected
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="space-y-4">
            {filteredRequests.length === 0 ? (
              <div className="rounded-xl bg-card card-shadow p-12 text-center">
                <p className="text-muted-foreground">No {activeTab} requests found</p>
              </div>
            ) : (
              filteredRequests.map((request) => {
                const StatusIcon = statusIcons[request.status];
                return (
                  <div
                    key={request.id}
                    className="rounded-xl bg-card card-shadow p-6 hover:card-shadow-hover transition-shadow"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={request.volunteer.avatar} />
                          <AvatarFallback>
                            {request.volunteer.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">{request.volunteer.name}</h3>
                            <Badge variant="outline" className={statusColors[request.status]}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{request.volunteer.email}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-primary font-medium">{request.project}</span>
                            <span className="text-muted-foreground">
                              {new Date(request.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex gap-1 mt-2 flex-wrap">
                            {request.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="bg-muted text-muted-foreground text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 lg:flex-shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedRequest(request)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        {request.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              className="bg-success hover:bg-success/90 text-success-foreground"
                            >
                              <Check className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                            >
                              <X className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Request Details Modal */}
      <Dialog open={!!selectedRequest} onOpenChange={() => setSelectedRequest(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Request Details</DialogTitle>
          </DialogHeader>

          {selectedRequest && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedRequest.volunteer.avatar} />
                  <AvatarFallback>
                    {selectedRequest.volunteer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{selectedRequest.volunteer.name}</h3>
                  <p className="text-muted-foreground">{selectedRequest.volunteer.location}</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Project</p>
                  <p className="font-medium text-primary">{selectedRequest.project}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Request Date</p>
                  <p className="font-medium">{new Date(selectedRequest.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{selectedRequest.volunteer.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{selectedRequest.volunteer.phone}</p>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-muted-foreground mb-2">Skills</p>
                <div className="flex gap-2 flex-wrap">
                  {selectedRequest.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Message</p>
                <p className="text-foreground bg-muted/50 p-4 rounded-lg">{selectedRequest.message}</p>
              </div>

              {selectedRequest.status === 'pending' && (
                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
                    onClick={() => setSelectedRequest(null)}
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1"
                    onClick={() => setSelectedRequest(null)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
