import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { setSearch } from "@/store/userTable/userTableSlice";

export const UsersTableFilters = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center mx-6 my-4 flex-start w-full">
      <h1 className="text-2xl font-semibold mr-6">All Users</h1>
      <Input
        placeholder="Search for..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="max-w-sm"
      />
    </div>
  );
};
