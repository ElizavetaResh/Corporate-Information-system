import { createSlice } from "@reduxjs/toolkit";

export const notificationMessageSlice = createSlice({
    name: "notificationMessage",
    initialState: {
      notification: {},
      show: false
    },
    reducers:{
      createMessage: (state, action) => {
        state.notification = {
          message: action.payload.message,
          type: action.payload.type
        };
        state.show = true;
      },
      hideMessage: (state) => {
        state.show = false;
      }
    }
});

export const { createMessage, hideMessage } = notificationMessageSlice.actions;

export default notificationMessageSlice.reducer;