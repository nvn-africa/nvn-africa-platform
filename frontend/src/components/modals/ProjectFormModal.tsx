import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";
import axios from "axios";

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  role: string;
}

interface ProjectFormModalProps {
  open: boolean;
  onClose: () => void;
}

export function ProjectFormModal({ open, onClose }: ProjectFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    community: "",
    start_date: "",
    end_date: "",
    requirements: "",
    project_lead: "",
    volunteers: [] as string[],
  });

  /* ================= FETCH USERS ================= */

  useEffect(() => {
    if (!open) return;

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("inv-token");
        const res = await axios.get(
          "http://localhost:3000/api/user/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch users");
      }
    };

    fetchUsers();
  }, [open]);

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("inv-token");

      await axios.post(
        "http://localhost:3000/api/project/create-project",
        {
          title: formData.title,
          description: formData.description,
          location: formData.community,
          start_date: formData.start_date,
          end_date: formData.end_date,
          requirements: formData.requirements
            .split(",")
            .map((r) => r.trim()),
          project_lead: formData.project_lead || undefined,
          volunteers: formData.volunteers,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onClose();
    } catch (err: any) {
      console.error(err?.response?.data || err.message);
      alert("Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  /* ================= VOLUNTEER TOGGLE ================= */

  const toggleVolunteer = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      volunteers: prev.volunteers.includes(id)
        ? prev.volunteers.filter((v) => v !== id)
        : [...prev.volunteers, id],
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 overflow-y-auto max-h-[75vh] pr-2"
        >
          <div>
            <Label>Project Title</Label>
            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label>Description</Label>
            <Textarea
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>

          <div>
            <Label>Community / Location</Label>
            <Input
              value={formData.community}
              onChange={(e) =>
                setFormData({ ...formData, community: e.target.value })
              }
              required
            />
          </div>

          {/* ================= DATES ================= */}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Start Date</Label>
              <div className="relative">
                <Input
                  type="date"
                  value={formData.start_date}
                  onChange={(e) =>
                    setFormData({ ...formData, start_date: e.target.value })
                  }
                  required
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <Label>End Date</Label>
              <div className="relative">
                <Input
                  type="date"
                  value={formData.end_date}
                  onChange={(e) =>
                    setFormData({ ...formData, end_date: e.target.value })
                  }
                  required
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* ================= PROJECT LEAD ================= */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Project Lead (Optional)</Label>
              <Select
                value={formData.project_lead}
                onValueChange={(value) =>
                  setFormData({ ...formData, project_lead: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project lead" />
                </SelectTrigger>
                <SelectContent>
                  {users.map((user) => (
                    <SelectItem key={user._id} value={user._id}>
                      {user.firstname} {user.lastname} ({user.role})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* ================= VOLUNTEERS ================= */}

            <div>
              <Label>Volunteers</Label>
              <div className="border rounded-md p-2 max-h-40 overflow-y-auto space-y-1">
                {users.map((user) => (
                  <label
                    key={user._id}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.volunteers.includes(user._id)}
                      onChange={() => toggleVolunteer(user._id)}
                    />
                    {user.firstname} {user.lastname}
                  </label>
                ))}
              </div>
            </div>

          </div>






          {/* ================= REQUIREMENTS ================= */}

          <div>
            <Label>Requirements</Label>
            <Textarea
              placeholder="E.g. Medical license, First aid, Logistics"
              value={formData.requirements}
              onChange={(e) =>
                setFormData({ ...formData, requirements: e.target.value })
              }
              required
            />
          </div>

          {/* ================= ACTIONS ================= */}

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Project"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
