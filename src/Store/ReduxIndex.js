import { createSlice,configureStore } from '@reduxjs/toolkit'
import PermissionSlice from './PermissionSlice'

const AuthSlice=createSlice({
    name:'auth',
    initialState:{IsLoggedIn:false},
    reducers:{
        Login(state,action){
            state.IsLoggedIn=true
        },
        Logout(state,action){
            state.IsLoggedIn=false
        }
    }
})

const store=configureStore({
    reducer:{Auth:AuthSlice.reducer,Permission:PermissionSlice.reducer},
})

export const AuthAction=AuthSlice.actions;
export default store;