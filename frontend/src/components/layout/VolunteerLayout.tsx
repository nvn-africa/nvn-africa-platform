import { Outlet } from 'react-router-dom';
import VolunteerSidebar from './VolunteerSidebar';

const VolunteerLayout = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <VolunteerSidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default VolunteerLayout;