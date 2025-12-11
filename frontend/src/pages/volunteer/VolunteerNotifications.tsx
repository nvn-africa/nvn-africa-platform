import { useState } from 'react';
import VolunteerHeader from '@/components/layout/VolunteerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  CheckCircle, 
  XCircle, 
  FolderKanban,
  Calendar,
  MessageSquare,
  Trash2,
  Check
} from 'lucide-react';

const VolunteerNotifications = () => {
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      title: 'Request Approved!', 
      message: 'Your request to join "Community Health Camp" has been approved. Welcome to the team!',
      time: '2 hours ago',
      type: 'approval',
      read: false
    },
    { 
      id: 2, 
      title: 'New Project Available', 
      message: 'A new project "Youth Education Drive" is now accepting volunteers. Check it out!',
      time: '5 hours ago',
      type: 'project',
      read: false
    },
    { 
      id: 3, 
      title: 'Reminder: Training Session', 
      message: 'Don\'t forget! Health Camp training session is scheduled for tomorrow at 10:00 AM.',
      time: '1 day ago',
      type: 'reminder',
      read: false
    },
    { 
      id: 4, 
      title: 'Request Rejected', 
      message: 'Unfortunately, your request to join "Food Distribution Drive" was not approved due to limited spots.',
      time: '2 days ago',
      type: 'rejection',
      read: true
    },
    { 
      id: 5, 
      title: 'Project Update', 
      message: 'Environmental Clean-up project has been rescheduled to December 18th.',
      time: '3 days ago',
      type: 'update',
      read: true
    },
    { 
      id: 6, 
      title: 'Message from Project Lead', 
      message: 'Dr. Sarah sent you a message regarding the Health Camp project.',
      time: '4 days ago',
      type: 'message',
      read: true
    },
    { 
      id: 7, 
      title: 'Congratulations!', 
      message: 'You\'ve completed 150 hours of volunteering! Keep up the great work.',
      time: '1 week ago',
      type: 'achievement',
      read: true
    },
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'approval': return <CheckCircle className="w-5 h-5 text-success" />;
      case 'rejection': return <XCircle className="w-5 h-5 text-destructive" />;
      case 'project': return <FolderKanban className="w-5 h-5 text-primary" />;
      case 'reminder': return <Calendar className="w-5 h-5 text-warning" />;
      case 'message': return <MessageSquare className="w-5 h-5 text-blue-500" />;
      case 'update': return <Bell className="w-5 h-5 text-muted-foreground" />;
      case 'achievement': return <CheckCircle className="w-5 h-5 text-primary" />;
      default: return <Bell className="w-5 h-5 text-muted-foreground" />;
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
  const filterNotifications = (filter: string) => {
    switch (filter) {
      case 'unread': return notifications.filter(n => !n.read);
      case 'approvals': return notifications.filter(n => n.type === 'approval' || n.type === 'rejection');
      case 'projects': return notifications.filter(n => n.type === 'project' || n.type === 'update');
      default: return notifications;
    }
  };

  return (
    <>
      <VolunteerHeader title="Notifications" subtitle={`${unreadCount} unread notifications`} />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">{notifications.length} total notifications</span>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead} className="text-primary border-primary">
              <Check className="w-4 h-4 mr-2" />
              Mark all as read
            </Button>
          )}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-lg">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">
              Unread {unreadCount > 0 && <Badge className="ml-1 bg-primary text-primary-foreground h-5 w-5 p-0 text-xs">{unreadCount}</Badge>}
            </TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {['all', 'unread', 'approvals', 'projects'].map((filter) => (
            <TabsContent key={filter} value={filter} className="mt-6">
              <div className="space-y-3">
                {filterNotifications(filter).map((notification) => (
                  <Card 
                    key={notification.id} 
                    className={`transition-all ${!notification.read ? 'border-l-4 border-l-primary bg-accent/30' : ''}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {notification.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                              <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {!notification.read && (
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="w-4 h-4 text-primary" />
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
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {filterNotifications(filter).length === 0 && (
                  <div className="text-center py-12">
                    <Bell className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-muted-foreground">No notifications found.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default VolunteerNotifications;