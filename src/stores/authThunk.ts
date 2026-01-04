import { signInWithGoogle } from "@/services/AuthService";
import {createUserProfile} from "@/services/userService";
import type{ IUserProps } from "@/index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginWithGoogle = createAsyncThunk<IUserProps>(
    "auth/loginWithGoogle",
    async (_, { rejectWithValue }) => {
        try {
            const user = await signInWithGoogle();
            if (user) {
                await createUserProfile(user, {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                });
                return user as IUserProps;
            } else {
                return rejectWithValue("No user data returned from Google sign-in");
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);