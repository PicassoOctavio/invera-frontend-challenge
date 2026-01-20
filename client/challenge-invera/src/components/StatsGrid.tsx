import { Users, UserPlus, Heart, User } from "lucide-react";
import { StatsCard } from "./StatsCard";

export const StatsGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard title="Total Users" value={250} icon={<Users size={18} />} />
      <StatsCard title="New Users" value={15} icon={<UserPlus size={18} />} />
      <StatsCard title="Top Users" value={200} icon={<Heart size={18} />} />
      <StatsCard title="Other Users" value={35} icon={<User size={18} />} />
    </div>
  );
};
