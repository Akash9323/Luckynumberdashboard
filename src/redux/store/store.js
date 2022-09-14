import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducer/user.reducer'

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userReducer,
  },
})
