import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {RootState} from '../../../Store';

const Gradation = styled(LinearGradient)`
  width: 100%;
  padding-top: 100%;
`;

const GradationWrap = styled.TouchableOpacity`
  width: 30%;
`;

type Props = {
  colors: string[];
};

const GradationCard: React.FC<Props> = (props) => {
  const {colors} = props;
  const dispatch = useDispatch();
  const onPress = useCallback(() => {
    console.log('select color is ', colors);
  }, [colors, dispatch]);

  return (
    <GradationWrap onPress={onPress}>
      <Gradation
        start={{x: 0, y: 0.75}}
        end={{x: 1, y: 0.25}}
        colors={colors}
      />
    </GradationWrap>
  );
};

export default GradationCard;
