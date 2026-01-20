import { Users, UserPlus, Heart, User } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { useUsersStatics } from "@/hooks/useUsersStatics";

export const StatsGrid = () => {
  const { data } = useUsersStatics();

  console.log(data);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Users"
        value={data?.totalUsers}
        icon={<Users size={18} />}
      />
      <StatsCard
        title="New Users"
        value={data?.newUsers}
        icon={<UserPlus size={18} />}
      />
      <StatsCard
        title="Top Users"
        value={data?.topUsers}
        icon={<Heart size={18} />}
      />
      <StatsCard
        title="Other Users"
        value={data?.otherUsers}
        icon={<User size={18} />}
      />
    </div>
  );
};
