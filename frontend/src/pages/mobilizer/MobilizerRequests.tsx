import { useState } from 'react';
import MobilizerHeader from '@/components/layout/MobilizerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Check, 
  X, 
  Clock, 
  User,
  FolderKanban,
  Calendar,
  MessageSquare
} from 'lucide-react';

const MobilizerRequests = () => {
  const { toast } = useToast();

  const [requests, setRequests] = useState([
    {
      id: 1,
      volunteer: { name: 'Amina Diallo', avatar: 'AD', email: 'amina.d@email.com' },
      project: 'Community Health Camp',
      requestDate: 'Dec 8, 2024',
      status: 'pending',
      message: 'I have experience in community health programs and would love to contribute to this project.',
    },
    {
      id: 2,
      volunteer: { name: 'Grace Nyambura', avatar: 'GN', email: 'grace.n@email.com' },
      project: 'Youth Education Drive',
      requestDate: 'Dec 7, 2024',
      status: 'pending',
      message: 'As a teacher, I believe I can make a significant impact on the education program.',
    },
    {
      id: 3,
      volunteer: { name: 'Michael Okafor', avatar: 'MO', email: 'michael.o@email.com' },
      project: 'Environmental Clean-up',
      requestDate: 'Dec 6, 2024',
      status: 'pending',
      message: 'I am passionate about environmental conservation and want to help.',
    },
    {
      id: 4,
      volunteer: { name: 'Fatima Ahmed', avatar: 'FA', email: 'fatima.a@email.com' },
      project: 'Community Health Camp',
      requestDate: 'Dec 5, 2024',
      status: 'approved',
      message: 'Ready to support the health camp in any capacity needed.',
    },
    {
      id: 5,
      volunteer: { name: 'Peter Kimani', avatar: 'PK', email: 'peter.k@email.com' },
      project: 'Youth Education Drive',
      requestDate: 'Dec 4, 2024',
      status: 'rejected',
      message: 'Interested in joining the education program.',
    },
  ]);

  const handleApprove = (id: number) => {
    setRequests(requests.map(r => 
      r.id === id ? { ...r, status: 'approved' } : r
    ));
    toast({
      title: "Request Approved",
      description: "The volunteer has been approved for the project.",
    });
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(r => 
      r.id === id ? { ...r, status: 'rejected' } : r
    ));
    toast({
      title: "Request Rejected",
      description: "The volunteer request has been rejected.",
      variant: "destructive",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-warning/10 text-warning-foreground border-warning/30';
      case 'approved': return 'bg-success/10 text-success border-success/30';
      case 'rejected': return 'bg-destructive/10 text-destructive border-destructive/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filterRequests = (status: string) => {
    if (status === 'all') return requests;
    return requests.filter(r => r.status === status);
  };

  const stats = {
    pending: requests.filter(r => r.status === 'pending').length,
    approved: requests.filter(r => r.status === 'approved').length,
    rejected: requests.filter(r => r.status === 'rejected').length,
  };

  const RequestCard = ({ request }: { request: typeof requests[0] }) => (
    <Card className="hover:border-mobilizer/50 transition-all">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-mobilizer text-mobilizer-foreground">
                {request.volunteer.avatar}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-foreground">{request.volunteer.name}</h4>
              <p className="text-sm text-muted-foreground">{request.volunteer.email}</p>
            </div>
          </div>
          <Badge variant="outline" className={getStatusColor(request.status)}>
            {request.status}
          </Badge>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <FolderKanban className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground">{request.project}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Requested on {request.requestDate}</span>
          </div>
        </div>

        <div className="p-3 bg-muted/30 rounded-lg mb-4">
          <div className="flex items-start gap-2">
            <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5" />
            <p className="text-sm text-muted-foreground italic">"{request.message}"</p>
          </div>
        </div>

        {request.status === 'pending' && (
          <div className="flex gap-2">
            <Button 
              className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
              onClick={() => handleApprove(request.id)}
            >
              <Check className="w-4 h-4 mr-1" /> Approve
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-destructive text-destructive hover:bg-destructive/10"
              onClick={() => handleReject(request.id)}
            >
              <X className="w-4 h-4 mr-1" /> Reject
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <>
      <MobilizerHeader title="Requests" subtitle="Approve or reject volunteer participation" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-warning mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.pending}</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Check className="w-6 h-6 text-success mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.approved}</p>
              <p className="text-sm text-muted-foreground">Approved</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <X className="w-6 h-6 text-destructive mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">{stats.rejected}</p>
              <p className="text-sm text-muted-foreground">Rejected</p>
            </CardContent>
          </Card>
        </div>

        {/* Requests Tabs */}
        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">
              Pending ({stats.pending})
            </TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>

          {['pending', 'approved', 'rejected', 'all'].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {filterRequests(tab).map(request => (
                  <RequestCard key={request.id} request={request} />
                ))}
              </div>
              {filterRequests(tab).length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Clock className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-muted-foreground">No {tab} requests</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default MobilizerRequests;
