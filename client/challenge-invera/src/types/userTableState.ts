export interface UsersTableState {
  page: number;
  limit: number;
  search: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
  statusFilter: string;
}
