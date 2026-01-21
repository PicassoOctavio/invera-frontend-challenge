import type { User } from "@/types/users.response";
import { inveraApi } from "@/api/invera.api";

export const getUsers = async (
  page: number,
  limit: number = 6,
  search: string,
): Promise<Array<User>> => {
  try {
    const { data } = await inveraApi.get<Array<User>>("/users", {
      params: { page, limit, search },
    });

    return data;
  } catch (error) {
    return error;
  }
};
