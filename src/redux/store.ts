import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authReducer from "./slices/authSlice";
import userInterfaceReducer from "./slices/UserInterfaceSlice";
import settingsAndPreferencesReducer from "./slices/settingsAndPreferencesSlice";
import { baseApiSlice } from "@simplimods/redux/api/baseApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userInterface: userInterfaceReducer,
    settingsAndPreferences: settingsAndPreferencesReducer,
    [authApi.reducerPath]: authApi.reducer,
    // Connect the PostApi reducer to the store
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([baseApiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
