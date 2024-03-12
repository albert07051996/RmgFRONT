import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '../slices/appSlice';
import { styleSlice } from '../slices/styleSlice';


const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    styleStory: styleSlice.reducer,

  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
