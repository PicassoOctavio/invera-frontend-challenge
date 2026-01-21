// actions/createUser.action.ts
import type { User } from "../types/dbResponse/users.response";
import { inveraApi } from "@/api/invera.api";

export const createUser = async (userData: User): Promise<User> => {
  try {
    const { data } = await inveraApi.post<User>("/users", userData);
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
