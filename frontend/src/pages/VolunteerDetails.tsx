import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MessageModal } from '@/components/modals/MessageModal';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Clock,
  ArrowLeft,
  Edit,
  MessageSquare,
  Award,
  TrendingUp,
  Users,
} from 'lucide-react';

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
    bio: 'Passionate educator with over 5 years of experience in community development. Dedicated to empowering African youth through education and mentorship programs.',
    emergencyContact: 'John Diallo - +234 802 345 6789',
    availability: 'Weekends, 10am - 6pm',
    certifications: ['First Aid', 'Child Safety', 'Community Leadership'],
    languages: ['English', 'French', 'Yoruba'],
    recentActivity: [
      { date: '2024-01-10', action: 'Completed training session', project: 'Youth Education Initiative' },
      { date: '2024-01-08', action: 'Attended team meeting', project: 'Community Health Outreach' },
      { date: '2024-01-05', action: 'Submitted progress report', project: 'Youth Education Initiative' },
    ],
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
    bio: 'Logistics expert with a passion for environmental conservation. Leading cleanup initiatives across Ghana to create cleaner communities.',
    emergencyContact: 'Mary Asante - +233 24 234 5678',
    availability: 'Flexible',
    certifications: ['Project Management', 'Environmental Safety'],
    languages: ['English', 'Twi'],
    recentActivity: [
      { date: '2024-01-12', action: 'Organized cleanup event', project: 'Environmental Cleanup' },
      { date: '2024-01-09', action: 'Recruited 15 new volunteers', project: 'Environmental Cleanup' },
    ],
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
    bio: 'Software developer dedicated to bridging the digital divide. Teaching coding skills to underserved youth in East Africa.',
    emergencyContact: 'Hassan Mohammed - +254 712 456 789',
    availability: 'Currently unavailable',
    certifications: ['AWS Certified', 'Google IT Support'],
    languages: ['English', 'Swahili', 'Arabic'],
    recentActivity: [
      { date: '2023-12-15', action: 'Completed workshop series', project: 'Tech Skills Workshop' },
    ],
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
    bio: 'Healthcare professional committed to improving community health outcomes. Specializes in preventive care and health education.',
    emergencyContact: 'Grace Obi - +234 803 567 8901',
    availability: 'Weekdays after 5pm',
    certifications: ['Registered Nurse', 'CPR Certified', 'Mental Health First Aid'],
    languages: ['English', 'Igbo'],
    recentActivity: [
      { date: '2024-01-11', action: 'Conducted health screening', project: 'Community Health Outreach' },
      { date: '2024-01-07', action: 'Led first aid training', project: 'Community Health Outreach' },
    ],
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
    bio: 'Creative professional using visual storytelling to amplify the impact of community initiatives across Africa.',
    emergencyContact: 'Peter Mwangi - +254 723 567 890',
    availability: 'Weekends and holidays',
    certifications: ['Digital Marketing', 'Adobe Creative Suite'],
    languages: ['English', 'Swahili'],
    recentActivity: [
      { date: '2024-01-13', action: 'Created promotional content', project: 'Youth Education Initiative' },
      { date: '2024-01-10', action: 'Managed social media campaign', project: 'Environmental Cleanup' },
    ],
  },
];

export default function VolunteerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showMessageModal, setShowMessageModal] = useState(false);
  const volunteer = volunteers.find((v) => v.id === Number(id));

  if (!volunteer) {
    return (
      <DashboardLayout title="Volunteer Not Found">
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-muted-foreground mb-4">The volunteer you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/volunteers')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Volunteers
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  const hoursGoal = 200;
  const hoursProgress = Math.min((volunteer.hoursContributed / hoursGoal) * 100, 100);

  return (
    <DashboardLayout title="Volunteer Details">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate('/volunteers')}
        className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Volunteers
      </Button>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Overview */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <Card className="card-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={volunteer.avatar} />
                  <AvatarFallback className="text-2xl">
                    {volunteer.name.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold text-foreground">{volunteer.name}</h2>
                <Badge
                  variant="outline"
                  className={
                    volunteer.status === 'active'
                      ? 'bg-success/10 text-success border-success/20 mt-2'
                      : 'bg-muted text-muted-foreground mt-2'
                  }
                >
                  {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                </Badge>
                <p className="text-sm text-muted-foreground mt-4">{volunteer.bio}</p>

                <div className="flex gap-2 mt-6 w-full">
                  <Button variant="outline" className="flex-1">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button 
                    className="flex-1 gradient-primary text-primary-foreground"
                    onClick={() => setShowMessageModal(true)}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-base">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{volunteer.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{volunteer.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{volunteer.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">
                  Joined {new Date(volunteer.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Emergency Contact</p>
                <p className="text-sm font-medium">{volunteer.emergencyContact}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Availability</p>
                <p className="text-sm font-medium">{volunteer.availability}</p>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-base">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {volunteer.languages.map((language) => (
                  <Badge key={language} variant="secondary">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="card-shadow">
              <CardContent className="pt-6 text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold text-foreground">{volunteer.hoursContributed}</p>
                <p className="text-xs text-muted-foreground">Hours Contributed</p>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="pt-6 text-center">
                <Briefcase className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <p className="text-2xl font-bold text-foreground">{volunteer.projects.length}</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="pt-6 text-center">
                <Award className="w-6 h-6 mx-auto mb-2 text-warning" />
                <p className="text-2xl font-bold text-foreground">{volunteer.certifications.length}</p>
                <p className="text-xs text-muted-foreground">Certifications</p>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-success" />
                <p className="text-2xl font-bold text-foreground">{Math.round(hoursProgress)}%</p>
                <p className="text-xs text-muted-foreground">Goal Progress</p>
              </CardContent>
            </Card>
          </div>

          {/* Hours Progress */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Hours Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress toward {hoursGoal} hour goal</span>
                  <span className="font-medium">{volunteer.hoursContributed} / {hoursGoal} hours</span>
                </div>
                <Progress value={hoursProgress} className="h-3" />
              </div>
            </CardContent>
          </Card>

          {/* Skills & Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-base">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {volunteer.skills.map((skill) => (
                    <Badge key={skill} className="bg-primary/10 text-primary border-0">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-base">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {volunteer.certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="bg-warning/10 text-warning border-warning/20">
                      <Award className="w-3 h-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Assigned Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {volunteer.projects.map((project) => (
                  <div
                    key={project}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                    onClick={() => navigate('/projects')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="font-medium">{project}</span>
                    </div>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      Active
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-base">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {volunteer.recentActivity.map((activity, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {index < volunteer.recentActivity.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-1" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.project} • {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <MessageModal
        recipient={volunteer ? { id: volunteer.id, name: volunteer.name, email: volunteer.email, avatar: volunteer.avatar } : null}
        open={showMessageModal}
        onClose={() => setShowMessageModal(false)}
      />
    </DashboardLayout>
  );
}
