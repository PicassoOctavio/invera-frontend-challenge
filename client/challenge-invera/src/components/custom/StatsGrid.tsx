import { Users, UserPlus, Heart, User } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { useUsersStatics } from "@/hooks/useUsersStatics";
import { Skeleton } from "../ui/skeleton";

export const StatsGrid = () => {
  const { data } = useUsersStatics();

  return (
    <>
      {data ? (
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
      ) : (
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-62.5" />
            <Skeleton className="h-4 w-50" />
          </div>
        </div>
      )}
    </>
  );
};
