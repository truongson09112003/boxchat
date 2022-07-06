import { createSlice } from '@reduxjs/toolkit';

const User = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addPost(state, action) {
            state.push(action.payload);
        },
    },
});
const { actions, reducer } = User;
export const { addPost } = actions;
export default reducer;
