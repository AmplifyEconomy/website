import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
    search: {
        input: '',
        consensus: {
            approval: true,
            quorum: false,
        },
        network: {
            full: true,
            app: true,
            custom: false,
        },
        token: {
            amp: true,
            ar: false,
            pst: false,
            custom: false,
        },
    },
    create: {
        name: '',
        url: '',
        description: '',
        consensus: 'approval',
        network: 'full',
        networkAppName: '',
        networkId: '',
        token: 'amp',
        pool: 0,
        epoch: 0,
        distribution: 0,
        nodes: 10,
    },
    join: {
        url: '',
        address: '',
    },
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearchInput(state, action) {
            state.search.input = action.payload ?? '';
        },
        setSearchToggle(state, action) {
            state.search[action.payload.section][action.payload.key] = action.payload.value;
        },
        setCreateInput(state, action) {
            state.create[action.payload.key] = action.payload.value;
        },
        setJoinUrl(state, action) {
            state.join.url = action.payload ?? '';
        },
        setJoinAddress(state, action) {
            state.join.address = action.payload ?? '';
        },
    },
})

export const {
    setSearchInput,
    setSearchToggle,
    setCreateInput,
    setJoinUrl,
    setJoinAddress,
} = appSlice.actions;