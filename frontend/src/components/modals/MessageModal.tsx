import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Paperclip } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Recipient {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface MessageModalProps {
  recipient: Recipient | null;
  open: boolean;
  onClose: () => void;
}

export function MessageModal({ recipient, open, onClose }: MessageModalProps) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  if (!recipient) return null;

  const handleSend = async () => {
    if (!subject.trim() || !message.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in both subject and message fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsSending(true);
    // Simulate sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Message Sent',
      description: `Your message has been sent to ${recipient.name}.`,
    });
    
    setIsSending(false);
    setSubject('');
    setMessage('');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Send Message</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Recipient */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Avatar className="w-10 h-10">
              <AvatarImage src={recipient.avatar} />
              <AvatarFallback>
                {recipient.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-foreground">{recipient.name}</p>
              <p className="text-sm text-muted-foreground">{recipient.email}</p>
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Enter message subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="resize-none"
            />
          </div>
        </div>

        <DialogFooter className="flex gap-2 sm:gap-0">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="outline"
            className="hidden sm:flex"
          >
            <Paperclip className="w-4 h-4 mr-2" />
            Attach
          </Button>
          <Button 
            onClick={handleSend} 
            disabled={isSending}
            className="gradient-primary text-primary-foreground"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSending ? 'Sending...' : 'Send Message'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
