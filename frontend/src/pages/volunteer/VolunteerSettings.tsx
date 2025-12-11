import { useState } from 'react';
import VolunteerHeader from '@/components/layout/VolunteerHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { 
  Bell, 
  Lock, 
  Globe,
  Shield,
  Save
} from 'lucide-react';

const VolunteerSettings = () => {
  const { toast } = useToast();
  
  const [notifications, setNotifications] = useState({
    projectUpdates: true,
    approvalAlerts: true,
    newProjects: true,
    reminders: true,
    messages: true,
    newsletter: false,
  });

  const [privacy, setPrivacy] = useState({
    showProfile: true,
    showHours: true,
    showProjects: false,
  });

  const handleSaveNotifications = () => {
    toast({
      title: "Settings Saved",
      description: "Your notification preferences have been updated.",
    });
  };

  const handleSavePrivacy = () => {
    toast({
      title: "Settings Saved",
      description: "Your privacy settings have been updated.",
    });
  };

  const handlePasswordChange = () => {
    toast({
      title: "Password Updated",
      description: "Your password has been successfully changed.",
    });
  };

  return (
    <>
      <VolunteerHeader title="Settings" subtitle="Manage your account preferences" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Notification Preferences
            </CardTitle>
            <CardDescription>Choose what notifications you want to receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="projectUpdates">Project Updates</Label>
                <p className="text-sm text-muted-foreground">Get notified about project changes</p>
              </div>
              <Switch 
                id="projectUpdates"
                checked={notifications.projectUpdates}
                onCheckedChange={(checked) => setNotifications({...notifications, projectUpdates: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="approvalAlerts">Approval Alerts</Label>
                <p className="text-sm text-muted-foreground">Notifications for request approvals/rejections</p>
              </div>
              <Switch 
                id="approvalAlerts"
                checked={notifications.approvalAlerts}
                onCheckedChange={(checked) => setNotifications({...notifications, approvalAlerts: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="newProjects">New Projects</Label>
                <p className="text-sm text-muted-foreground">Alert when new projects are available</p>
              </div>
              <Switch 
                id="newProjects"
                checked={notifications.newProjects}
                onCheckedChange={(checked) => setNotifications({...notifications, newProjects: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="reminders">Reminders</Label>
                <p className="text-sm text-muted-foreground">Event and deadline reminders</p>
              </div>
              <Switch 
                id="reminders"
                checked={notifications.reminders}
                onCheckedChange={(checked) => setNotifications({...notifications, reminders: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="messages">Messages</Label>
                <p className="text-sm text-muted-foreground">Notifications for new messages</p>
              </div>
              <Switch 
                id="messages"
                checked={notifications.messages}
                onCheckedChange={(checked) => setNotifications({...notifications, messages: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="newsletter">Newsletter</Label>
                <p className="text-sm text-muted-foreground">Weekly newsletter and updates</p>
              </div>
              <Switch 
                id="newsletter"
                checked={notifications.newsletter}
                onCheckedChange={(checked) => setNotifications({...notifications, newsletter: checked})}
              />
            </div>
            <Button onClick={handleSaveNotifications} className="bg-primary mt-4">
              <Save className="w-4 h-4 mr-2" />
              Save Notification Settings
            </Button>
          </CardContent>
        </Card>

        {/* Privacy Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Privacy Settings
            </CardTitle>
            <CardDescription>Control your profile visibility</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="showProfile">Public Profile</Label>
                <p className="text-sm text-muted-foreground">Make your profile visible to other volunteers</p>
              </div>
              <Switch 
                id="showProfile"
                checked={privacy.showProfile}
                onCheckedChange={(checked) => setPrivacy({...privacy, showProfile: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="showHours">Show Volunteer Hours</Label>
                <p className="text-sm text-muted-foreground">Display your volunteering hours on profile</p>
              </div>
              <Switch 
                id="showHours"
                checked={privacy.showHours}
                onCheckedChange={(checked) => setPrivacy({...privacy, showHours: checked})}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="showProjects">Show Projects</Label>
                <p className="text-sm text-muted-foreground">Display your project history publicly</p>
              </div>
              <Switch 
                id="showProjects"
                checked={privacy.showProjects}
                onCheckedChange={(checked) => setPrivacy({...privacy, showProjects: checked})}
              />
            </div>
            <Button onClick={handleSavePrivacy} className="bg-primary mt-4">
              <Save className="w-4 h-4 mr-2" />
              Save Privacy Settings
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Security
            </CardTitle>
            <CardDescription>Manage your account security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" placeholder="Enter current password" />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" placeholder="Enter new password" />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
            </div>
            <Button onClick={handlePasswordChange} className="bg-primary">
              <Lock className="w-4 h-4 mr-2" />
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Language Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Language & Region
            </CardTitle>
            <CardDescription>Set your preferred language and timezone</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="language">Language</Label>
              <Input id="language" value="English" disabled />
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" value="Africa/Lagos (GMT+1)" disabled />
            </div>
            <p className="text-sm text-muted-foreground">More language options coming soon.</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default VolunteerSettings;