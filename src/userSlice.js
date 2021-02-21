const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "SET_USER",
  initialState: {
    user: null,
    playlists: [],
    playing: false,
    item: null,
  },
  reducers: {},
  extraReducers: {
    setUser(state) {
      return {
        ...state,
        user: state.user,
      };
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUser } = actions;
export default reducer;
