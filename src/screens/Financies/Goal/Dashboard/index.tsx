import React, {
  useEffect,
  useState,
} from 'react';

import {
  ActivityIndicator,
} from 'react-native';

import ProgressCircle from 'react-native-progress-circle';
import {
  Container,
  Body,
  PercentText,
  AmountText,
} from './styles';

import {
  useStorage,
  GoalEntity,
} from '../../../../hooks/useStorage';

import {
  useTheme,
} from '../../../../hooks/useTheme';

// => Components
import Header from '../../../../components/views/Header';
import Box from '../../../../components/views/Box';
import BoxText from '../../../../components/views/BoxText';
import FloatButton from '../../../../components/controllers/FloatButton';

import {
  MonetaryFormatter,
} from '../../../../utils/monetary-formatter';

import {
  DistanceDateFormatter,
} from '../../../../utils/distance-date-formatter';

interface ScreenProps{
  route?: {
    params: {
      id: string
    }
  }
}

const Dashboard: React.FC<ScreenProps> = ({ route }) => {
  const { getOneGoal } = useStorage();
  const { theme } = useTheme();

  const [data, setData] = useState<GoalEntity>({} as GoalEntity);

  useEffect(() => {
    const id = route?.params.id;

    if (!id) {
      return;
    }

    getOneGoal(id).then((goal) => {
      setData(goal || {} as GoalEntity);
    });
  }, [getOneGoal, route?.params]);

  return (
    <>

      <Container>

        <Header
          title="Minha meta"
          goBackButton
        />
        {data.title ? (
          <Body>
            <Box title="Informações">

              <ProgressCircle
                percent={((data.amount / data.goal) * 100)}
                radius={90}
                borderWidth={10}
                color={theme.colors.primary}
                shadowColor={theme.colors.backgroundLight}
                bgColor={theme.colors.background}
              >
                <PercentText>
                  {`${((data.amount / data.goal) * 100).toFixed(1)}%`}
                </PercentText>
                <AmountText>
                  {MonetaryFormatter(data.amount)}
                </AmountText>
                <AmountText>
                  {`de ${MonetaryFormatter(data.goal)}`}
                </AmountText>
              </ProgressCircle>
              <BoxText title="Título" content={data.title} />
              { data.description && (
                <BoxText title="Descrição" content={data.description} />
              )}
              { data.date && (
                <BoxText
                  title="Tempo Restante"
                  content={DistanceDateFormatter(data.date)}
                />
              )}
            </Box>
            <Box title="Transações" />
          </Body>
        )
          : (
            <ActivityIndicator
              style={{ marginTop: 50 }}
              size="large"
              color={theme.colors.primary}
            />
          )}
      </Container>
      <FloatButton />
    </>
  );
};

export default Dashboard;
