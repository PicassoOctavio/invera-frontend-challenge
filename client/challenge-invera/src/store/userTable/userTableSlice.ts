import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UsersTableState } from "../../types/userTableState";

const initialState: UsersTableState = {
  page: 1,
  limit: 6,
  search: "",
  sortBy: "",
  sortOrder: "asc",
  statusFilter: "",
};

export const usersTableSlice = createSlice({
  name: "usersTable",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      state.page = 1;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.page = 1;
    },
    setSort: (
      state,
      action: PayloadAction<{ sortBy: string; sortOrder: "asc" | "desc" }>,
    ) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.statusFilter = action.payload;
      state.page = 1;
    },
    resetFilters: (state) => {
      state.search = "";
      state.sortBy = "";
      state.sortOrder = "asc";
      state.statusFilter = "";
      state.page = 1;
    },
  },
});

export const {
  setPage,
  setLimit,
  setSearch,
  setSort,
  setStatusFilter,
  resetFilters,
} = usersTableSlice.actions;

export default usersTableSlice.reducer;
