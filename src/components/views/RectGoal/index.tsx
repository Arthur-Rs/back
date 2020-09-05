import React, { useCallback } from 'react'

import { TouchableOpacityProps, View } from 'react-native'

import ProgressCircle from 'react-native-progress-circle'

import { useNavigation } from '@react-navigation/native'

import { MonetaryFormatter } from '../../../utils/monetary-formatter'

import {
  Container,
  CircleContainer,
  Content,
  Title,
  Ammount,
  DateLimit,
  Goal,
  PercentText,
} from './styles'

import { useTheme } from '../../../hooks/useTheme'

import { DistanceDateFormatter } from '../../../utils/distance-date-formatter'

interface RectGoalProps extends TouchableOpacityProps {
  id: string
  title: string
  amount: number
  goal: number
  dateLimit?: Date
}

const RectGoal: React.FC<RectGoalProps> = ({
  id,
  title,
  amount,
  goal,
  dateLimit,
}) => {
  const { theme } = useTheme()
  const { navigate } = useNavigation()

  const handlePress = useCallback(() => {
    navigate('dashboard-goal', {
      id,
    })
  }, [navigate, id])

  return (
    <>
      <Container activeOpacity={1.2} onPress={handlePress}>
        <CircleContainer>
          <ProgressCircle
            percent={(amount / goal) * 100}
            radius={50}
            borderWidth={10}
            color={theme.colors.primary}
            shadowColor={theme.colors.backgroundLight}
            bgColor={theme.colors.background}>
            <PercentText>
              {`${((amount / goal) * 100).toFixed(1)}%`}
            </PercentText>
          </ProgressCircle>
        </CircleContainer>
        <Content>
          <Title>{title}</Title>
          <View>
            <Ammount>{MonetaryFormatter(amount)}</Ammount>
            <Goal>{`de ${MonetaryFormatter(goal)}`}</Goal>
          </View>
          {dateLimit && (
            <DateLimit>
              {() => {
                const date = new Date(dateLimit)
                return DistanceDateFormatter(date)
              }}
            </DateLimit>
          )}
        </Content>
      </Container>
    </>
  )
}

export default RectGoal
