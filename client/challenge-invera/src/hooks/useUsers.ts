import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/users.response";
import type { RootState } from "../store/store";
import { getUsers } from "../actions/users.action";

export const useUsers = () => {
  const { page, limit, search } = useSelector(
    (state: RootState) => state.usersTable,
  );
  return useQuery<Array<User>>({
    queryKey: ["users", page, limit, search],
    queryFn: () => getUsers(page, limit, search),
    staleTime: 1000 * 60 * 5, // 5 min, indica cuanto tiempo considera fresca la request
  });
};
