import { useState } from 'react';
import MobilizerHeader from '@/components/layout/MobilizerHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Search, 
  Send, 
  Paperclip,
  MoreVertical,
  Phone,
  Video
} from 'lucide-react';

const MobilizerMessages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Sarah Okonkwo',
      avatar: 'SO',
      lastMessage: 'I\'ll be there at 8am tomorrow',
      time: '2 min ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'James Mwangi',
      avatar: 'JM',
      lastMessage: 'The report is ready for review',
      time: '1 hour ago',
      unread: 0,
      online: true,
    },
    {
      id: 3,
      name: 'Team Health Camp',
      avatar: 'HC',
      lastMessage: 'Daniel: Meeting confirmed for Friday',
      time: '3 hours ago',
      unread: 5,
      online: false,
      isGroup: true,
    },
    {
      id: 4,
      name: 'Fatima Ahmed',
      avatar: 'FA',
      lastMessage: 'Thank you for the opportunity!',
      time: 'Yesterday',
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: 'Emmanuel Asante',
      avatar: 'EA',
      lastMessage: 'Can we reschedule?',
      time: 'Yesterday',
      unread: 1,
      online: true,
    },
  ];

  const messages = [
    { id: 1, sender: 'Sarah Okonkwo', content: 'Hi! I wanted to confirm my attendance for the health camp tomorrow.', time: '10:30 AM', isMe: false },
    { id: 2, sender: 'Me', content: 'Great! We need you at the community center by 8 AM. Can you make it?', time: '10:32 AM', isMe: true },
    { id: 3, sender: 'Sarah Okonkwo', content: 'Yes, that works perfectly for me!', time: '10:33 AM', isMe: false },
    { id: 4, sender: 'Me', content: 'Perfect. Please bring your volunteer ID and wear comfortable shoes. We\'ll be on our feet most of the day.', time: '10:35 AM', isMe: true },
    { id: 5, sender: 'Sarah Okonkwo', content: 'Got it! Should I bring anything else?', time: '10:36 AM', isMe: false },
    { id: 6, sender: 'Me', content: 'Just water and sunscreen. We\'ll provide everything else including lunch.', time: '10:38 AM', isMe: true },
    { id: 7, sender: 'Sarah Okonkwo', content: 'I\'ll be there at 8am tomorrow', time: '10:40 AM', isMe: false },
  ];

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message
      setMessage('');
    }
  };

  return (
    <>
      <MobilizerHeader title="Messages" subtitle="Team communication" />
      
      <div className="flex-1 overflow-hidden p-6">
        <Card className="h-full">
          <div className="flex h-[calc(100vh-200px)]">
            {/* Conversations List */}
            <div className="w-80 border-r border-border flex flex-col">
              <div className="p-4 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search conversations..." className="pl-10" />
                </div>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-2">
                  {conversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedChat(conv.id)}
                      className={`w-full p-3 rounded-lg flex items-center gap-3 transition-colors ${
                        selectedChat === conv.id 
                          ? 'bg-mobilizer-accent' 
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-mobilizer text-mobilizer-foreground">
                            {conv.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {conv.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-foreground truncate">{conv.name}</p>
                          <span className="text-xs text-muted-foreground">{conv.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      </div>
                      {conv.unread > 0 && (
                        <Badge className="bg-mobilizer text-mobilizer-foreground h-5 w-5 p-0 flex items-center justify-center text-xs">
                          {conv.unread}
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-mobilizer text-mobilizer-foreground">
                      {selectedConversation?.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{selectedConversation?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation?.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-mobilizer">
                    <Phone className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-mobilizer">
                    <Video className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] p-3 rounded-2xl ${
                          msg.isMe
                            ? 'bg-mobilizer text-mobilizer-foreground rounded-br-md'
                            : 'bg-muted text-foreground rounded-bl-md'
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                        <p className={`text-xs mt-1 ${msg.isMe ? 'text-mobilizer-foreground/70' : 'text-muted-foreground'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    className="bg-mobilizer hover:bg-mobilizer-secondary text-mobilizer-foreground"
                    onClick={handleSendMessage}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default MobilizerMessages;
