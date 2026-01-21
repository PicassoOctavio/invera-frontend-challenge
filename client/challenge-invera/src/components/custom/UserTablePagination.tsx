import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import type { RootState } from "../../store/store";
import { setPage } from "../../store/userTable/userTableSlice";

interface Props {
  total: number;
}

export const UsersTablePagination = ({ total }: Props) => {
  const dispatch = useDispatch();
  const { page, limit } = useSelector((state: RootState) => state.usersTable);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-end gap-2">
      <Button
        variant="outline"
        disabled={page === 1}
        onClick={() => dispatch(setPage(page - 1))}
      >
        Previous
      </Button>

      <span className="flex items-center px-2 text-sm">
        {page} / {totalPages}
      </span>

      <Button
        variant="outline"
        disabled={page === totalPages}
        onClick={() => dispatch(setPage(page + 1))}
      >
        Next
      </Button>
    </div>
  );
};
