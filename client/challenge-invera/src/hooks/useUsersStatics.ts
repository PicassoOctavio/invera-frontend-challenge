import { getUsersStatics } from "@/actions/userStatics.action";
import { useQuery } from "@tanstack/react-query";

export const useUsersStatics = () => {
  return useQuery({
    queryKey: ["usersStatics"],
    queryFn: getUsersStatics,
  });
};
