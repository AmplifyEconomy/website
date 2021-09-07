import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    arconnect: false,
    address: '',
    name: '',
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
        setName(state, action) {
            state.name = action.payload ?? '';
        }
    },
})

export const {
    setArconnect,
    setAddress,
    setName,
} = marketplaceSlice.actions;