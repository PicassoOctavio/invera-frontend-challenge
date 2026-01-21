import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../store/userTable/userTableSlice";
import { Checkbox } from "@radix-ui/react-checkbox";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { TableHeader, TableRow, TableHead } from "../ui/table";

interface Props {
  id: string;
}

export const UsersTableHeader = ({ id }: Props) => {
  const dispatch = useDispatch();
  const { sortBy, sortOrder } = useSelector(
    (state: RootState) => state.usersTable,
  );

  const handleSort = (column: string) => {
    if (sortBy === column) {
      // Si ya está ordenado por esta columna, cambiar el orden
      dispatch(
        setSort({
          sortBy: column,
          sortOrder: sortOrder === "asc" ? "desc" : "asc",
        }),
      );
    } else {
      // Si es una nueva columna, ordenar ascendente por defecto
      dispatch(setSort({ sortBy: column, sortOrder: "asc" }));
    }
  };

  return (
    <TableHeader>
      <TableRow className="hover:bg-transparent">
        <TableHead>
          <Checkbox id={id} />
        </TableHead>
        <TableHead>
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => handleSort("name")}
          >
            Name
            <ArrowUpDown
              className={`ml-2 h-4 w-4 ${sortOrder === "desc" ? "rotate-180 text-muted-foreground" : ""}`}
            />
          </Button>
        </TableHead>
        <TableHead>Phone</TableHead>
        <TableHead>
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => handleSort("location")}
          >
            Location
            <ArrowUpDown
              className={`ml-2 h-4 w-4 ${sortOrder === "desc" ? "rotate-180 text-muted-foreground" : ""}`}
            />
          </Button>
        </TableHead>
        <TableHead>
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => handleSort("company")}
          >
            Company
            <ArrowUpDown
              className={`ml-2 h-4 w-4 ${sortOrder === "desc" ? "rotate-180 text-muted-foreground" : ""}`}
            />
          </Button>
        </TableHead>
        <TableHead>
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => handleSort("status")}
          >
            Status
            <ArrowUpDown
              className={`ml-2 h-4 w-4 ${sortOrder === "desc" ? "rotate-180 text-muted-foreground" : ""}`}
            />
          </Button>
        </TableHead>
        <TableHead className="w-0">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};
