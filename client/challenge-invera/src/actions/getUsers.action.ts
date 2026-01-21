import { inveraApi } from "../api/invera.api";
import type { User } from "../types/dbResponse/users.response";
import type { GetUsersParams } from "../types/getUsersParams";

export const getUsers = async (
  page: number = 1,
  limit: number = 6,
  search: string = "",
  sortBy: string = "",
  sortOrder: "asc" | "desc" = "asc",
  statusFilter: string = "",
): Promise<Array<User>> => {
  try {
    const params: GetUsersParams = {
      _page: page,
      _limit: limit,
    };

    if (search) {
      params.q = search;
    }

    if (sortBy) {
      params._sort = sortBy;
      params._order = sortOrder;
    }

    if (statusFilter) {
      params._status = statusFilter;
    }

    const { data } = await inveraApi.get<Array<User>>("/users", {
      params,
    });

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
