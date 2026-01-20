import { inveraApi } from "@/api/invera.api";
import type { UsersStaticsI } from "@/types/usersStatics.response";

export const getUsersStatics = async () => {
  try {
    const { data } = await inveraApi.get<UsersStaticsI>("/statics");

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
