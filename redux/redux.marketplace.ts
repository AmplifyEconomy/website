import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    arconnect: false,
    address: '',
}

export const marketplaceSlice = createSlice({
    name: 'marketplace',
    initialState,
    reducers: {
        setArconnect(state, action) {
            state.arconnect = action.payload ?? false;
        },
        setAddress(state, action) {
            state.address = action.payload ?? '';
        },
    },
})

export const {
    setArconnect,
    setAddress,
} = marketplaceSlice.actions;