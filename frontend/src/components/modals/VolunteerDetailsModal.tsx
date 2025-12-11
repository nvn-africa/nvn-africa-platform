import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Calendar, Briefcase } from 'lucide-react';

interface Volunteer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  status: 'active' | 'inactive';
  joinDate: string;
  skills: string[];
  projects: string[];
  hoursContributed: number;
}

interface VolunteerDetailsModalProps {
  volunteer: Volunteer | null;
  open: boolean;
  onClose: () => void;
}

export function VolunteerDetailsModal({ volunteer, open, onClose }: VolunteerDetailsModalProps) {
  if (!volunteer) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Volunteer Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={volunteer.avatar} />
              <AvatarFallback className="text-2xl">
                {volunteer.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{volunteer.name}</h3>
              <Badge
                variant="outline"
                className={volunteer.status === 'active'
                  ? 'bg-success/10 text-success border-success/20'
                  : 'bg-muted text-muted-foreground'
                }
              >
                {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
              </Badge>
            </div>
          </div>

          <Separator />

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>{volunteer.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{volunteer.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{volunteer.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>Joined {new Date(volunteer.joinDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Skills */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {volunteer.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-muted/50 p-4 text-center">
              <Briefcase className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-foreground">{volunteer.projects.length}</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4 text-center">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold text-foreground">{volunteer.hoursContributed}</p>
              <p className="text-sm text-muted-foreground">Hours</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Close
            </Button>
            <Button className="flex-1 gradient-primary text-primary-foreground">
              Send Message
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
