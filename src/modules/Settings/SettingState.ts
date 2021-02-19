import { PurpleGradation } from '../../constants/'

class SettingState {
    /** 完了後すぐ削除とするか */
    deleteWithComplete: boolean = false;
    /** 完了タスクを非表示にする */
    hiddenCompletedTask: boolean = false;
    /** 背景色 */
    bgColor: string[] = PurpleGradation;
}

export default SettingState;