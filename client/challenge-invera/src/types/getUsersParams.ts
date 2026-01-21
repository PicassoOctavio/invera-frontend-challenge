export interface GetUsersParams {
  _page?: number;
  _limit?: number;
  q?: string;
  _sort?: string;
  _order?: "asc" | "desc";
  _status?: string;
}
