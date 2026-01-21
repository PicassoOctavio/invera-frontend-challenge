import type { UsersStaticsI } from "@/types/usersStatics.response";
import { getUsersStatics } from "@/actions/userStatics.action";
import { useQuery } from "@tanstack/react-query";

export const useUsersStatics = () => {
  return useQuery<UsersStaticsI>({
    queryKey: ["usersStatics"],
    queryFn: getUsersStatics,
  });
};
