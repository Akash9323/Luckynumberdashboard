import { configureStore } from '@reduxjs/toolkit'
import NavigationReducer from '../reducer/NavigationReducer'
import NotificationReducer from '../reducer/NotificationReducer'
import userReducer from '../reducer/user.reducer'

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userReducer,
    notifications: NotificationReducer,
    navigations: NavigationReducer,
  },
})
