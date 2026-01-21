import type { User } from "../types/dbResponse/users.response";
import { inveraApi } from "../api/invera.api";

interface UpdateUserData {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  company?: string;
  status?: "Online" | "Offline";
}

export const updateUser = async ({
  id,
  ...userData
}: UpdateUserData): Promise<User> => {
  try {
    const { data } = await inveraApi.put<User>(`/users/${id}`, userData);
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
