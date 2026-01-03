import { useEffect, useState } from 'react';
import VolunteerHeader from '@/components/layout/VolunteerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Save,
  Clock,
  FolderKanban,
  Star,
  Award
} from 'lucide-react';

const VolunteerProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  // const [profile, setProfile] = useState({
  //   firstname?.: 'John',
  //   lastname?.: 'Doe',
  //   email: 'john.doe@email.com',
  //   phone: '+234 801 234 5678',
  //   location: 'Lagos, Nigeria',
  //   bio: 'Passionate volunteer dedicated to making a positive impact in my community. I specialize in health education and community outreach programs.',
  //   joinDate: 'March 2024',
  //   skills: [],
  //   interests: []
  // });

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://nvn-africa-platform.onrender.com/api/user/user-profile",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        setProfile(res.data.data);
      } catch (error) {
        console.error("Profile fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const stats = {
    hoursVolunteered: 0,
    projectsCompleted: 0,
    rating: 0,
    badges: 0
  };

  const achievements = [
    // { name: '100 Hours', description: 'Volunteered 100+ hours', earned: true },
    // { name: 'Team Player', description: 'Completed 5 team projects', earned: true },
    // { name: 'First Project', description: 'Completed first project', earned: true },
    // { name: 'Mentor', description: 'Helped train new volunteers', earned: true },
    // { name: 'Champion', description: 'Volunteered 200+ hours', earned: false },
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  if (loading) return <div className="p-6">Loading profile...</div>;
  if (!profile) return <div className="p-6">Profile not found</div>;

  return (
    <>
      <VolunteerHeader title="Profile" subtitle="Manage your volunteer profile" />

      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                    {profile.firstname?.[0]}{profile.lastname?.[0]}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-primary"
                >
                  <Camera className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {profile.firstame} {profile.lastname}
                    </h2>
                    <p className="text-muted-foreground">Volunteer since {profile.joinDate}</p>
                  </div>
                  <Button
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={isEditing ? "bg-primary" : "text-primary border-primary"}
                  >
                    {isEditing ? (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </>
                    ) : (
                      'Edit Profile'
                    )}
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xl font-bold text-foreground">{stats.hoursVolunteered}</p>
                    <p className="text-xs text-muted-foreground">Hours</p>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <FolderKanban className="w-5 h-5 text-success mx-auto mb-1" />
                    <p className="text-xl font-bold text-foreground">{stats.projectsCompleted}</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Star className="w-5 h-5 text-warning mx-auto mb-1" />
                    <p className="text-xl font-bold text-foreground">{stats.rating}</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <Award className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                    <p className="text-xl font-bold text-foreground">{stats.badges}</p>
                    <p className="text-xs text-muted-foreground">Badges</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstname?.">First Name</Label>
                  <Input
                    id="firstname?."
                    value={profile.firstname}
                    onChange={(e) => setProfile({ ...profile, firstname: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <Label htmlFor="lastname?.">Last Name</Label>
                  <Input
                    id="lastname?."
                    value={profile.lastname}
                    onChange={(e) => setProfile({ ...profile, lastname: e.target.value })}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    disabled={!isEditing}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    disabled={!isEditing}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    disabled={!isEditing}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills & Interests */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile?.skills?.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <Badge key={interest} variant="outline" className="border-primary text-primary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className={`flex items-center justify-between p-3 rounded-lg ${achievement.earned ? 'bg-primary/10' : 'bg-muted/30 opacity-50'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <Award className={`w-5 h-5 ${achievement.earned ? 'text-primary' : 'text-muted-foreground'}`} />
                      <div>
                        <p className={`font-medium ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {achievement.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                    {achievement.earned && (
                      <Badge className="bg-success text-success-foreground">Earned</Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerProfile;