import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createUserWithEmailAndPassword } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "firebase-config";

interface UserState {
    user: User | null;
    loading: boolean;
    error?: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
};

export const registerUserAsync = createAsyncThunk(
    "user/register",
    async (credentials: { email: string; password: string }) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
            console.log(response);
            console.log(auth.currentUser);
            return response.user;
        } catch (error) {
            throw new Error("Failed to register user");
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUserAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUserAsync.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.user = action.payload;
            })
            .addCase(registerUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;
