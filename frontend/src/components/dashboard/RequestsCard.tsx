import { useNavigate } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const requests = [
  {
    id: 1,
    volunteer: {
      name: 'Fatima Diallo',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100',
      email: 'fatima@email.com',
    },
    project: 'Youth Education Initiative',
    date: '2024-02-28',
    skills: ['Teaching', 'French'],
  },
  {
    id: 2,
    volunteer: {
      name: 'Kwame Asante',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
      email: 'kwame@email.com',
    },
    project: 'Environmental Cleanup',
    date: '2024-02-27',
    skills: ['Logistics', 'Leadership'],
  },
  {
    id: 3,
    volunteer: {
      name: 'Aisha Mohammed',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100',
      email: 'aisha@email.com',
    },
    project: 'Tech Skills Workshop',
    date: '2024-02-26',
    skills: ['Programming', 'Mentoring'],
  },
];

export function RequestsCard() {
  const navigate = useNavigate();
  
  return (
    <div className="rounded-xl bg-card card-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Pending Requests</h3>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {requests.length} new
        </Badge>
      </div>
      
      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={request.volunteer.avatar} />
                <AvatarFallback>
                  {request.volunteer.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{request.volunteer.name}</p>
                <p className="text-sm text-muted-foreground">{request.project}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-success hover:bg-success/10 hover:text-success"
              >
                <Check className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        variant="ghost" 
        className="w-full mt-4 text-primary hover:text-primary hover:bg-primary/10"
        onClick={() => navigate('/requests')}
      >
        View all requests
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
