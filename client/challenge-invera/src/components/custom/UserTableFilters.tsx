import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { setSearch } from "@/store/userTable/userTableSlice";

export const UsersTableFilters = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center mx-6 my-4">
      <h3 className="mr-4">All Users</h3>
      <Input
        placeholder="Search for..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="max-w-sm"
      />
    </div>
  );
};
