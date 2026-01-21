import { createSlice } from "@reduxjs/toolkit";

export const usersTableSlice = createSlice({
  name: "userTable",
  initialState: {
    page: 1,
    limit: 10,
    search: "",
  },
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
      state.page = 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPage, setSearch } = usersTableSlice.actions;
