import { getUsersTypes } from "@/actions/getUserTypes.action";
import type { UserTypesI } from "@/types/dbResponse/userTypes.response";
import { useQuery } from "@tanstack/react-query";

export const useUsersTypes = () => {
  return useQuery<UserTypesI>({
    queryKey: ["usersTypes"],
    queryFn: getUsersTypes,
  });
};
