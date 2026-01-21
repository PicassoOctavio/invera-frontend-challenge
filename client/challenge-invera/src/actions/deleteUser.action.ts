import { inveraApi } from "@/api/invera.api";

export const deleteUser = async (id: number): Promise<void> => {
  try {
    await inveraApi.delete(`/users/${id}`);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
