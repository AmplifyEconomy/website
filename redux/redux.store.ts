import {configureStore, ThunkAction} from '@reduxjs/toolkit'
import {Action} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import {marketplaceSlice} from './redux.marketplace';
import {appSlice} from './redux.app';

export function makeStore() {
    return configureStore({
        reducer: {
            marketplace: marketplaceSlice.reducer,
            app: appSlice.reducer,
        },
    });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);