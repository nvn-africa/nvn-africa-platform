import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  UsersRound, 
  ClipboardList, 
  Bell,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/mobilizer' },
  { icon: Users, label: 'Volunteers', path: '/mobilizer/volunteers' },
  { icon: FolderKanban, label: 'Projects', path: '/mobilizer/projects' },
  { icon: UsersRound, label: 'My Team', path: '/mobilizer/team' },
  { icon: ClipboardList, label: 'Requests', path: '/mobilizer/requests' },
  { icon: MessageSquare, label: 'Messages', path: '/mobilizer/messages' },
  { icon: Calendar, label: 'Calendar', path: '/mobilizer/calendar' },
  { icon: TrendingUp, label: 'Performance', path: '/mobilizer/performance' },
  { icon: Bell, label: 'Updates', path: '/mobilizer/updates' },
];

const MobilizerSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-mobilizer-sidebar text-mobilizer-sidebar-foreground flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-mobilizer-secondary/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-mobilizer flex items-center justify-center">
            <span className="text-mobilizer-foreground font-bold text-lg">M</span>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight text-mobilizer-sidebar-foreground">Mobilizer</h1>
            <p className="text-xs text-mobilizer-sidebar-foreground/60">NAMYO Africa</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-mobilizer text-mobilizer-foreground" 
                  : "text-mobilizer-sidebar-foreground/70 hover:bg-mobilizer-secondary/20 hover:text-mobilizer-sidebar-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-mobilizer-secondary/20 space-y-1">
        <NavLink
          to="/mobilizer/settings"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
            location.pathname === '/mobilizer/settings'
              ? "bg-mobilizer text-mobilizer-foreground"
              : "text-mobilizer-sidebar-foreground/70 hover:bg-mobilizer-secondary/20 hover:text-mobilizer-sidebar-foreground"
          )}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-mobilizer-sidebar-foreground/70 hover:bg-mobilizer-secondary/20 hover:text-mobilizer-sidebar-foreground transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span>Exit Dashboard</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default MobilizerSidebar;
