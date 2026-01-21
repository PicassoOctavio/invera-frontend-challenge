import type { UsersStaticsI } from "@/types/dbResponse/usersStatics.response";
import { getUsersStatics } from "@/actions/getUserStatics.action";
import { useQuery } from "@tanstack/react-query";

export const useUsersStatics = () => {
  return useQuery<UsersStaticsI>({
    queryKey: ["usersStatics"],
    queryFn: getUsersStatics,
  });
};
