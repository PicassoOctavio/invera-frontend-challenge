import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/dbResponse/users.response";
import type { RootState } from "../store/store";
import { getUsers } from "../actions/getUsers.action";

export const useUsers = () => {
  const { page, limit, search, sortBy, sortOrder, statusFilter } = useSelector(
    (state: RootState) => state.usersTable,
  );

  return useQuery<Array<User>>({
    queryKey: ["users", page, limit, search, sortBy, sortOrder, statusFilter],
    queryFn: () =>
      getUsers(page, limit, search, sortBy, sortOrder, statusFilter),
    staleTime: 1000 * 60 * 5,
  });
};
