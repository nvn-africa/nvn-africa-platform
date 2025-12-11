import { Outlet } from 'react-router-dom';
import MobilizerSidebar from './MobilizerSidebar';

const MobilizerLayout = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <MobilizerSidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MobilizerLayout;
