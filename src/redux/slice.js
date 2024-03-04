const { createSlice } = require("@reduxjs/toolkit");
let initialState = {
  adminAuth: false,
};

const slice = createSlice({
  name: "firstslice",
  initialState,
  reducers: {
    updateAdminAuth: (state, action) => {
      state.adminAuth = true;
    },
  },
});

export const { updateUserName } = slice.actions;
export default slice.reducer;
