import { useId } from "react";
import { useSelector } from "react-redux";
import { PencilIcon, Trash2Icon } from "lucide-react";

import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { useUsers } from "../../hooks/useUsers";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { UserStatus } from "./UserStatus";
import { UsersTablePagination } from "./UserTablePagination";
import { UsersTableFilters } from "./UserTableFilters";

import type { RootState } from "../../store/store";

import type { User } from "@/types/dbResponse/users.response";
import { UsersTableHeader } from "./UsersTableHeader";

export const UsersTable = () => {
  const id = useId();
  const { data, isLoading, isError } = useUsers();
  const { limit } = useSelector((state: RootState) => state.usersTable);
  const { mutate: deleteUser } = useDeleteUser();

  const handleDelete = (user: User) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      deleteUser(user.id);
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-64">Loading...</div>
    );

  if (isError)
    return (
      <div className="flex items-center justify-center h-64 text-red-500">
        Error loading users
      </div>
    );

  return (
    <div className="w-full space-y-4 rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <UsersTableFilters />
        <span className="text-sm text-muted-foreground w-40">
          1 - {limit} of {data?.length || 0}
        </span>
      </div>

      <Table>
        <UsersTableHeader id={id} />

        <TableBody>
          {data?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Checkbox />
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-medium">{user.name}</div>
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>{user.company}</TableCell>
              <TableCell>
                <UserStatus status={user.status} />
              </TableCell>

              <TableCell className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <PencilIcon className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(user)}
                >
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <UsersTablePagination total={50} />
    </div>
  );
};
