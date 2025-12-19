import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Mail,
  UserX,
} from "lucide-react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ================= TYPES ================= */

interface Volunteer {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  skills: string[];
  isApproved: boolean;
  isBanned: boolean;
}

/* ================= COMPONENT ================= */

export default function Volunteers() {
  const navigate = useNavigate();

  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  /* ================= FETCH VOLUNTEERS ================= */

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const token = localStorage.getItem("inv-token");
        const res = await axios.get(
          "http://localhost:3000/api/user/all",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // only volunteers
        const onlyVolunteers = res.data.data.filter(
          (u: Volunteer) => u.role === "volunteer"
        );

        setVolunteers(onlyVolunteers);
      } catch (err) {
        console.error("Failed to fetch volunteers", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  /* ================= FILTERING ================= */

  const filteredVolunteers = volunteers.filter((v) => {
    const fullName = `${v.firstname} ${v.lastname}`.toLowerCase();

    const matchesSearch =
      fullName.includes(searchQuery.toLowerCase()) ||
      v.email.toLowerCase().includes(searchQuery.toLowerCase());

    const status =
      v.isBanned ? "inactive" : v.isApproved ? "active" : "inactive";

    const matchesStatus =
      statusFilter === "all" || status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <DashboardLayout title="Volunteers">
        <p>Loading volunteers...</p>
      </DashboardLayout>
    );
  }

  /* ================= STATS ================= */

  const activeCount = volunteers.filter(
    (v) => !v.isBanned && v.isApproved
  ).length;

  return (
    <DashboardLayout title="Volunteers">
      {/* ================= FILTERS ================= */}

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search volunteers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* ================= STATS ================= */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Stat title="Total Volunteers" value={volunteers.length} />
        <Stat title="Active" value={activeCount} />
        <Stat title="Inactive" value={volunteers.length - activeCount} />
        <Stat title="Avg Hours" value="—" />
      </div>

      {/* ================= TABLE ================= */}

      <div className="rounded-xl bg-card card-shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Volunteer</TableHead>
              <TableHead className="hidden md:table-cell">Location</TableHead>
              <TableHead className="hidden lg:table-cell">Skills</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredVolunteers.map((v) => {
              const status =
                v.isBanned ? "inactive" : v.isApproved ? "active" : "inactive";

              return (
                <TableRow
                  key={v._id}
                  className="cursor-pointer hover:bg-muted/30"
                  onClick={() => navigate(`/volunteers/${v._id}`)}
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {v.firstname?.[0]}
                          {v.lastname?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">
                          {v.firstname} {v.lastname}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {v.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="hidden md:table-cell">
                    {v.address}
                  </TableCell>

                  <TableCell className="hidden lg:table-cell">
                    <div className="flex gap-1 flex-wrap">
                      {v.skills.slice(0, 2).map((s) => (
                        <Badge key={s} variant="secondary">
                          {s}
                        </Badge>
                      ))}
                      {v.skills.length > 2 && (
                        <Badge variant="outline">
                          +{v.skills.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        status === "active"
                          ? "bg-success/10 text-success"
                          : "bg-muted text-muted-foreground"
                      }
                    >
                      {status}
                    </Badge>
                  </TableCell>

                  <TableCell
                    className="text-right"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <UserX className="w-4 h-4 mr-2" />
                          Deactivate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}

/* ================= SMALL STAT COMPONENT ================= */

function Stat({ title, value }: { title: string; value: any }) {
  return (
    <div className="rounded-xl bg-card card-shadow p-4">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
