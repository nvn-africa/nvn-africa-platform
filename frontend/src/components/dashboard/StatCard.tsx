import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'primary' | 'secondary' | 'warning';
  link?: string;
}

export function StatCard({ title, value, icon: Icon, trend, variant = 'default', link }: StatCardProps) {
  const navigate = useNavigate();
  
  const variants = {
    default: 'bg-card',
    primary: 'bg-primary/10',
    secondary: 'bg-secondary/10',
    warning: 'bg-warning/10',
  };

  const iconVariants = {
    default: 'bg-muted text-muted-foreground',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    warning: 'bg-warning text-warning-foreground',
  };

  return (
    <div 
      className={cn(
        'rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all',
        variants[variant],
        link && 'cursor-pointer hover:scale-[1.02]'
      )}
      onClick={() => link && navigate(link)}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {trend && (
            <p className={cn(
              'text-sm font-medium',
              trend.isPositive ? 'text-success' : 'text-destructive'
            )}>
              {trend.isPositive ? '+' : ''}{trend.value}% from last month
            </p>
          )}
        </div>
        <div className={cn('p-3 rounded-xl', iconVariants[variant])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
