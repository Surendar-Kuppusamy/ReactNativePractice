import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@root/src/store';

// Define a type for the slice state
interface GlobalState {
    value: number
}

// Define the initial state using that type
const initialState: GlobalState = {
    value: 10,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { incrementByAmount } = globalSlice.actions;

export default globalSlice.reducer;