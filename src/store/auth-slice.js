import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: '',
        password: '',
        isLoggedIn: false
    },
    reducers: {
        signInUser(state, action) {
            const userSavedEmail = 'test@test.com';
            const userSavedPassword = 'test123';
            if ((action.payload.email === userSavedEmail) && (action.payload.password === userSavedPassword)) {
                state.isLoggedIn = true;
            } else {
                state.isLoggedIn = false;
            }
        },
        logoutUser(state, action) {
            state.isLoggedIn = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;