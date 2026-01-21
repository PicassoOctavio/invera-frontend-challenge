import { getUsersTypes } from "@/actions/userTypes.action";
import type { UserTypesI } from "@/types/userTypes.response";
import { useQuery } from "@tanstack/react-query";

export const useUsersTypes = () => {
  return useQuery<UserTypesI>({
    queryKey: ["usersTypes"],
    queryFn: getUsersTypes,
  });
};
