import { createSlice } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    uid: '',
  },
  reducers: {
    setUser: (state, action) => {
      const { uid } = action.payload;
      state.uid = uid;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = exampleSlice.actions;

export default exampleSlice.reducer;
