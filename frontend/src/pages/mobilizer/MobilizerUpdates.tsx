import { useState } from 'react';
import MobilizerHeader from '@/components/layout/MobilizerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  Info, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Trash2,
  Check
} from 'lucide-react';

const MobilizerUpdates = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Safety Guidelines Released',
      description: 'Please review the updated safety protocols for all field activities.',
      time: '2 hours ago',
      type: 'important',
      read: false,
    },
    {
      id: 2,
      title: 'Volunteer Application Received',
      description: 'Amina Diallo has requested to join Community Health Camp.',
      time: '3 hours ago',
      type: 'info',
      read: false,
    },
    {
      id: 3,
      title: 'Project Report Due',
      description: 'Monthly progress report for Environmental Clean-up is due in 2 days.',
      time: '5 hours ago',
      type: 'warning',
      read: false,
    },
    {
      id: 4,
      title: 'Task Completed',
      description: 'Sarah Okonkwo completed the volunteer registration task.',
      time: '1 day ago',
      type: 'success',
      read: true,
    },
    {
      id: 5,
      title: 'Team Meeting Scheduled',
      description: 'Weekly team meeting scheduled for Friday at 9 AM.',
      time: '1 day ago',
      type: 'info',
      read: true,
    },
    {
      id: 6,
      title: 'Budget Approval',
      description: 'Your budget request for Youth Education Drive has been approved.',
      time: '2 days ago',
      type: 'success',
      read: true,
    },
  ]);

  const teamMessages = [
    {
      id: 1,
      sender: 'Admin Office',
      message: 'All mobilizers please submit your December reports by the 20th.',
      time: '1 hour ago',
    },
    {
      id: 2,
      sender: 'Project Coordinator',
      message: 'Great job on the Health Camp! The community feedback has been excellent.',
      time: '4 hours ago',
    },
    {
      id: 3,
      sender: 'HR Department',
      message: 'New volunteer orientation session scheduled for next Monday.',
      time: '1 day ago',
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'important': return <AlertTriangle className="w-5 h-5 text-destructive" />;
      case 'warning': return <Clock className="w-5 h-5 text-warning" />;
      case 'success': return <CheckCircle className="w-5 h-5 text-success" />;
      default: return <Info className="w-5 h-5 text-mobilizer" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'important': return 'bg-destructive/10 text-destructive';
      case 'warning': return 'bg-warning/10 text-warning-foreground';
      case 'success': return 'bg-success/10 text-success';
      default: return 'bg-mobilizer/10 text-mobilizer';
    }
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <MobilizerHeader title="Updates" subtitle="Announcements and notifications" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <Tabs defaultValue="notifications" className="space-y-4">
          <TabsList>
            <TabsTrigger value="notifications" className="relative">
              Notifications
              {unreadCount > 0 && (
                <Badge className="ml-2 bg-mobilizer text-mobilizer-foreground h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="team">Team Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {unreadCount} unread notifications
              </p>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" className="text-mobilizer" onClick={markAllAsRead}>
                  <Check className="w-4 h-4 mr-1" /> Mark all as read
                </Button>
              )}
            </div>

            <div className="space-y-3">
              {notifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`transition-all ${!notification.read ? 'border-l-4 border-l-mobilizer bg-mobilizer-accent/30' : ''}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5">
                        {getTypeIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground">{notification.title}</h4>
                          <Badge className={getTypeBadgeColor(notification.type)}>
                            {notification.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {!notification.read && (
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-mobilizer hover:bg-mobilizer-accent"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-mobilizer" />
                  Organization Announcements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-destructive/10 text-destructive">Important</Badge>
                    <span className="text-xs text-muted-foreground">Dec 8, 2024</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">New Safety Guidelines Released</h4>
                  <p className="text-sm text-muted-foreground">
                    All mobilizers and volunteers must review and acknowledge the updated safety protocols 
                    before participating in any field activities. The new guidelines include updated 
                    emergency procedures and health screening requirements.
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-mobilizer/10 text-mobilizer">Update</Badge>
                    <span className="text-xs text-muted-foreground">Dec 5, 2024</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Monthly Report Deadline Extended</h4>
                  <p className="text-sm text-muted-foreground">
                    The deadline for December monthly reports has been extended to December 25th. 
                    Please ensure all project updates and volunteer hours are accurately recorded.
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-success/10 text-success">Event</Badge>
                    <span className="text-xs text-muted-foreground">Dec 3, 2024</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Training Session Next Week</h4>
                  <p className="text-sm text-muted-foreground">
                    Mandatory training session for all mobilizers scheduled for December 12th. 
                    Topics include volunteer management best practices and new reporting tools.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Messages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamMessages.map((msg) => (
                  <div key={msg.id} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{msg.sender}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{msg.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default MobilizerUpdates;
