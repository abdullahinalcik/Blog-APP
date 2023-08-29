import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/authSlice"
import blogReducer from "../features/blogSlice"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)


export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    blog: blogReducer,
  },
})

export const persistor = persistStore(store)

export default store