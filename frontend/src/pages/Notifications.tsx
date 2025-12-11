import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  CheckCircle, 
  Clock, 
  UserPlus, 
  Calendar, 
  AlertCircle,
  Mail,
  Trash2,
  CheckCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: number;
  type: 'request' | 'project' | 'volunteer' | 'system' | 'message';
  title: string;
  description: string;
  time: string;
  read: boolean;
  link?: string;
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: 'request',
    title: 'New volunteer request',
    description: 'Amara Okonkwo has requested to join the Community Health Outreach project.',
    time: '5 minutes ago',
    read: false,
    link: '/requests'
  },
  {
    id: 2,
    type: 'project',
    title: 'Project deadline approaching',
    description: 'Youth Education Initiative project deadline is in 3 days.',
    time: '1 hour ago',
    read: false,
    link: '/projects/1'
  },
  {
    id: 3,
    type: 'volunteer',
    title: 'Volunteer milestone achieved',
    description: 'Kwame Asante has contributed 100+ hours to projects.',
    time: '2 hours ago',
    read: false,
    link: '/volunteers/1'
  },
  {
    id: 4,
    type: 'system',
    title: 'System maintenance scheduled',
    description: 'The platform will undergo maintenance on Saturday from 2-4 AM.',
    time: '5 hours ago',
    read: true
  },
  {
    id: 5,
    type: 'message',
    title: 'New message received',
    description: 'You have a new message from Fatima Diallo regarding the Clean Water Initiative.',
    time: '1 day ago',
    read: true,
    link: '/volunteers/2'
  },
  {
    id: 6,
    type: 'request',
    title: 'Request approved',
    description: 'Your request to add new team members has been approved.',
    time: '2 days ago',
    read: true
  },
  {
    id: 7,
    type: 'project',
    title: 'Project completed',
    description: 'Agricultural Training Program has been marked as completed.',
    time: '3 days ago',
    read: true,
    link: '/projects/3'
  },
  {
    id: 8,
    type: 'volunteer',
    title: 'New volunteer joined',
    description: 'Chinua Achebe has joined the platform as a new volunteer.',
    time: '1 week ago',
    read: true,
    link: '/volunteers/5'
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'request':
      return <UserPlus className="w-5 h-5 text-primary" />;
    case 'project':
      return <Calendar className="w-5 h-5 text-green-500" />;
    case 'volunteer':
      return <CheckCircle className="w-5 h-5 text-blue-500" />;
    case 'system':
      return <AlertCircle className="w-5 h-5 text-amber-500" />;
    case 'message':
      return <Mail className="w-5 h-5 text-purple-500" />;
    default:
      return <Bell className="w-5 h-5 text-muted-foreground" />;
  }
};

export default function Notifications() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;
  const allNotifications = notifications;
  const unreadNotifications = notifications.filter(n => !n.read);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleNotificationClick = (notification: Notification) => {
    markAsRead(notification.id);
    if (notification.link) {
      navigate(notification.link);
    }
  };

  const NotificationItem = ({ notification }: { notification: Notification }) => (
    <div
      className={`flex items-start gap-4 p-4 border-b border-border last:border-0 hover:bg-muted/50 transition-colors cursor-pointer ${
        !notification.read ? 'bg-primary/5' : ''
      }`}
      onClick={() => handleNotificationClick(notification)}
    >
      <div className="flex-shrink-0 mt-1">
        {getNotificationIcon(notification.type)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
              {notification.title}
            </p>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {notification.description}
            </p>
          </div>
          {!notification.read && (
            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
              New
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{notification.time}</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {!notification.read && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              markAsRead(notification.id);
            }}
          >
            <CheckCheck className="w-4 h-4" />
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-destructive"
          onClick={(e) => {
            e.stopPropagation();
            deleteNotification(notification.id);
          }}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <DashboardLayout title="Notifications">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
            <p className="text-muted-foreground">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              <CheckCheck className="w-4 h-4 mr-2" />
              Mark all as read
            </Button>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{notifications.length}</p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{unreadCount}</p>
                  <p className="text-xs text-muted-foreground">Unread</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <UserPlus className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {notifications.filter(n => n.type === 'request').length}
                  </p>
                  <p className="text-xs text-muted-foreground">Requests</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {notifications.filter(n => n.type === 'message').length}
                  </p>
                  <p className="text-xs text-muted-foreground">Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card>
          <CardHeader className="pb-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">
                  All ({allNotifications.length})
                </TabsTrigger>
                <TabsTrigger value="unread">
                  Unread ({unreadNotifications.length})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                {allNotifications.length > 0 ? (
                  <div className="divide-y divide-border">
                    {allNotifications.map(notification => (
                      <NotificationItem key={notification.id} notification={notification} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No notifications yet</p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="unread" className="mt-4">
                {unreadNotifications.length > 0 ? (
                  <div className="divide-y divide-border">
                    {unreadNotifications.map(notification => (
                      <NotificationItem key={notification.id} notification={notification} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <p className="text-muted-foreground">All caught up! No unread notifications.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </DashboardLayout>
  );
}
