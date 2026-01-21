import { useId } from "react";
import { PencilIcon, Trash2Icon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useUsers } from "@/hooks/useUsers";
//import { useDeleteUser } from "@/hooks/useDeleteUser";
import { UserStatus } from "./UserStatus";
import { UsersTablePagination } from "./UserTablePagination";
import { UsersTableFilters } from "./UserTableFilters";

export const UsersTable = () => {
  const id = useId();
  const { data, isLoading } = useUsers();
  //const { mutate: deleteUser } = useDeleteUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full space-y-4 rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <UsersTableFilters />
        <span className="text-sm text-muted-foreground">
          1 - {data?.length} of 50
        </span>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>
              <Checkbox id={id} />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-0" />
          </TableRow>
        </TableHeader>

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
                  //onClick={() => deleteUser(user.id)}
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
