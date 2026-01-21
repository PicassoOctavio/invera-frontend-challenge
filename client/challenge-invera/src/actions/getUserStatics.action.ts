import type { UsersStaticsI } from "@/types/dbResponse/usersStatics.response";
import { inveraApi } from "@/api/invera.api";

export const getUsersStatics = async (): Promise<UsersStaticsI> => {
  try {
    const { data } = await inveraApi.get<UsersStaticsI>("/statics");

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
