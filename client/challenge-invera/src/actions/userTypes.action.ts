import { inveraApi } from "@/api/invera.api";
import type { UserTypesI } from "@/types/userTypes.response";

export const getUsersTypes = async (): Promise<UserTypesI> => {
  try {
    const { data } = await inveraApi.get<UserTypesI>("/userTypes");

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
