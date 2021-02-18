import React, {useCallback, useEffect} from 'react';
import {Button, TextInput, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {useForm, Controller} from 'react-hook-form';
import {BlurView} from '@react-native-community/blur';
import {ErrorColor, InactiveColor} from '../../../constants';
import {RootState} from '../../../Store';
import {Task, TaskActions} from '../index';
import TaskForm from '../objects/TaskForm';
import {CommonButton, CommonTextInput} from '../../Commons';
import {reflectEditToList, saveTaskList} from '../TaskUtil';

const BlurContent = styled(BlurView)`
  width: 90%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 6%;

  border-width: 0.5px;
  border-radius: 10px;
  border-color: #fff;
  border-bottom-width: 0px;
`;

const Label = styled.Text`
  width: 100%;
  font-size: 18px;
  color: ${InactiveColor};
`;

const ErrorText = styled.Text`
  color: ${ErrorColor};
`;

type Props = {};

const TaskModal: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const list: Task[] = useSelector((state: RootState) => state?.task?.list);
  const dispModal: boolean = useSelector(
    (state: RootState) => state?.task?.dispModal,
  );
  const detail: Task | null = useSelector(
    (state: RootState) => state?.task?.detail,
  );
  const isNewTask: boolean = useSelector(
    (state: RootState) => state?.task?.isNewTask,
  );
  const dispatch = useDispatch();
  const closeModal = useCallback(() => dispatch(TaskActions.closeModal()), []);
  const {control, handleSubmit, errors, setValue} = useForm<TaskForm>();

  // submit時処理
  const onSubmit = (data: TaskForm) => {
    // 編集した値をdetailに反映
    const editedData: Task = {
      ...(detail as Task),
      name: data.name,
      comment: data.comment,
    };

    // 編集した内容を全体のリストに反映させる
    const mergedList = reflectEditToList(list, editedData, isNewTask);
    // リストを保存する
    saveTaskList(mergedList);
    // リストをStoreに反映させる
    dispatch(TaskActions.setList(mergedList));
    // モーダルを閉じる
    dispatch(TaskActions.closeModal());
  };

  useEffect(() => {
    if (detail) {
      setValue('name', detail?.name);
      setValue('comment', detail?.comment);
    }
  }, [detail]);

  return (
    <Modal
      isVisible={dispModal}
      hasBackdrop={false}
      style={{alignItems: 'center'}}>
      <BlurContent blurAmount={8} blurType="light">
        <View style={{width: '100%', alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={closeModal}>
            <Icon name="close" style={{color: '#EC8AA0', fontSize: 24}} />
          </TouchableOpacity>
        </View>
        <Label>タイトル(必須)</Label>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <CommonTextInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="name"
          defaultValue=""
          rules={{
            required: true,
            maxLength: 10,
          }}
        />
        {errors.name && errors.name.type === 'required' && (
          <ErrorText>タイトルは必須です。</ErrorText>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <ErrorText>タイトルは10文字以内で入力してください。</ErrorText>
        )}
        <Label>コメント</Label>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <CommonTextInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              multiline={true}
            />
          )}
          name="comment"
          defaultValue=""
        />
        <CommonButton
          text="OK"
          onPress={handleSubmit(onSubmit)}
          primary={true}
        />
      </BlurContent>
    </Modal>
  );
};

export default TaskModal;
