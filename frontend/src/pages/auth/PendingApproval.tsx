import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ArrowLeft, Mail } from "lucide-react";

interface PendingApprovalProps {
  userType: "admin" | "mobilizer" | "volunteer";
  email?: string;
}

const PendingApproval = ({ userType, email }: PendingApprovalProps) => {
  const navigate = useNavigate();

  const themeClasses = {
    admin: {
      bg: "from-primary/5 via-background to-accent/10",
      border: "border-primary/20",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    mobilizer: {
      bg: "from-mobilizer-primary/5 via-background to-mobilizer-accent/10",
      border: "border-mobilizer-primary/20",
      iconBg: "bg-mobilizer-primary/10",
      iconColor: "text-mobilizer-primary",
    },
    volunteer: {
      bg: "from-volunteer-primary/5 via-background to-volunteer-accent/20",
      border: "border-volunteer-primary/20",
      iconBg: "bg-volunteer-accent",
      iconColor: "text-volunteer-primary",
    },
  };

  const theme = themeClasses[userType];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} flex items-center justify-center p-4`}>
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card className={`${theme.border} shadow-xl`}>
          <CardHeader className="text-center pb-2">
            <div className={`mx-auto w-16 h-16 ${theme.iconBg} rounded-full flex items-center justify-center mb-4`}>
              <Clock className={`h-8 w-8 ${theme.iconColor}`} />
            </div>
            <CardTitle className="text-2xl font-bold">Pending Approval</CardTitle>
            <CardDescription>Your account is awaiting admin review</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Thank you for registering! Your account has been created successfully and is now pending approval from an administrator.
            </p>
            
            {email && (
              <div className="flex items-center justify-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{email}</span>
              </div>
            )}

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                You will receive a notification once your account has been approved. This usually takes 1-2 business days.
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="w-full"
              >
                Return to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PendingApproval;
