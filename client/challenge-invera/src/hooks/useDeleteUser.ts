import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../actions/deleteUser.action";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
