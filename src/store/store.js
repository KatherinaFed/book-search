import { configureStore } from "@reduxjs/toolkit";
import { bookServiceApi } from "../services/bookServiceAPI";

const store = configureStore({
  reducer: {
    [bookServiceApi.reducerPath]: bookServiceApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookServiceApi.middleware),
});

export default store;