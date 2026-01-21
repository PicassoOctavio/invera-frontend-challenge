import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../ui/input";
import { setSearch } from "../../../store/userTable/userTableSlice";
import type { RootState } from "../../../store/store";

export const UsersTableFilters = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state.usersTable);
  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(localSearch));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [localSearch, dispatch]);

  return (
    <div className="flex items-center gap-4 w-full flex-wrap">
      <h1 className="text-2xl font-semibold mr-6">All Users</h1>

      <Input
        placeholder="Search for..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="max-w-sm"
      />
    </div>
  );
};
