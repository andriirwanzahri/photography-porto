import { createSlice } from "@reduxjs/toolkit";
import { loginWithGoogle } from "./authThunk";
import type { IUserProps } from "@/index";
interface AuthState {
    user: IUserProps | null;
    loading: boolean;
    error: string | null;
}
const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder .addCase(loginWithGoogle.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(loginWithGoogle.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(loginWithGoogle.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });     
    },
});
export default authSlice.reducer;
export const {logOut} = authSlice.actions;