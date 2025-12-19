import { useNavigate } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';
import { useEffect, useState } from 'react';



export function RequestsCard() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("inv-token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/project/view-projects-requests",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setRequests(response.data.data);
      } catch (error) {
        console.error("Error fetching project requests:", error);
      }
    };

    fetchRequests();
  }, [navigate]);

  return (
    <div className="rounded-xl bg-card card-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          Pending Requests
        </h3>

        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {requests.length} new
        </Badge>
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request._id}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            {/* VOLUNTEER */}
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={request.volunteer?.avatar} />
                <AvatarFallback>
                  {request.volunteer?.name
                    ?.split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-medium text-foreground">
                  {request.volunteer?.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {request.project?.title}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-success hover:bg-success/10"
                onClick={() =>
                  console.log("Approve request", request._id)
                }
              >
                <Check className="w-4 h-4" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-destructive hover:bg-destructive/10"
                onClick={() =>
                  console.log("Reject request", request._id)
                }
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        className="w-full mt-4 text-primary hover:bg-primary/10"
        onClick={() => navigate("/requests")}
      >
        View all requests
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
