import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SettingState from './SettingState';

const initialState: SettingState = new SettingState();

const SettingSlice = createSlice({
    name: 'setting',
    initialState: initialState,
    reducers: {
        /** Setting設定アクション */
        setSetting: (state: SettingState, action: PayloadAction<SettingState>) => ({
            ...state,
            ...action.payload,
        }),
    }
});

export const SettingActions = SettingSlice.actions;
export const SettingReducer = SettingSlice.reducer;

export default SettingSlice;