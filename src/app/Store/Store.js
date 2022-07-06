import { configureStore } from '@reduxjs/toolkit';
import { User } from '@/app/appSlice';

const store = configureStore({
    reducer: {
        User: User,
    },
});

export default store;
