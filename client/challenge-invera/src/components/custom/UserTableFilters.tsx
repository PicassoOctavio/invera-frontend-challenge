// components/custom/UsersTable/UserTableFilters.tsx
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  setSearch,
  setStatusFilter,
  resetFilters,
} from "@/store/userTable/userTableSlice";
import type { RootState } from "@/store/store";

export const UsersTableFilters = () => {
  const dispatch = useDispatch();
  const { search, statusFilter } = useSelector(
    (state: RootState) => state.usersTable,
  );

  return (
    <div className="flex items-center gap-4 w-full flex-wrap">
      <h1 className="text-2xl font-semibold mr-6">All Users</h1>

      <Input
        placeholder="Search for..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="max-w-sm"
      />

      {/* <Select
        value={statusFilter}
        onValueChange={(value) => dispatch(setStatusFilter(value))}
      >
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Status</SelectItem>
          <SelectItem value="Online">Online</SelectItem>
          <SelectItem value="Offline">Offline</SelectItem>
        </SelectContent>
      </Select>

      {(search || statusFilter) && (
        <Button
          variant="ghost"
          onClick={() => dispatch(resetFilters())}
          className="text-muted-foreground"
        >
          Clear filters
        </Button>
      )} */}
    </div>
  );
};
