import {PurpleGradation} from '../../constants/';

type SettingState = {
    /** 背景色 */
    bgColor: string[];
}

export const initialState: SettingState = {
    bgColor: PurpleGradation,
}

export default SettingState;
