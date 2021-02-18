import { Task } from ".";

/**
 * 新しいタスクを生成
 * @param all 既存タスク全件
 */
export const generateNewTask = (all : Task[]): Task | null => {
    let hasDuplicate: boolean = true;
    let result: Task | null= null;

    // IDの重複しないタスクを生成する
    while(hasDuplicate) {
        // ランダムなIDを生成
        const randomId: number = generateRandomNumber(100000);
        // 既存タスクの全件中に生成したIDを持つデータがあるかチェック
        const duplicate: Task | undefined = all.find((t) => t.id === randomId);
        // 重複がなければOK
        if(!duplicate) {
            hasDuplicate = false;
            result = {
                id: randomId,
                name: '新しいタスク',
                comment: '',
                checked: false,
            }
        }
    }

    return result;
}

/**
 * 0から任意の値における乱数を生成
 * @param range 範囲
 */
const generateRandomNumber = (range: number): number => {
    return Math.floor(Math.random() * range);
}