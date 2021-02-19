import { PurpleGradation } from '../../constants/'

type SettingState = {
    /** 完了後すぐ削除とするか */
    deleteWithComplete: boolean;
    /** 完了タスクを非表示にする */
    hiddenCompletedTask: boolean;
    /** 背景色 */
    bgColor: string[];
}

export const initialState: SettingState = {
    deleteWithComplete: false,
    hiddenCompletedTask: false,
    bgColor: PurpleGradation,
}

export default SettingState;