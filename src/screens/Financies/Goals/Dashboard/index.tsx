import React, { useEffect, useState, useCallback } from 'react'

import { ActivityIndicator } from 'react-native'

import ProgressCircle from 'react-native-progress-circle'
import {
  Container,
  Body,
  PercentText,
  AmountText,
  NotFoundText,
} from './styles'

import { useStorage, GoalEntity } from '../../../../hooks/useStorage'

import { useTheme } from '../../../../hooks/useTheme'

import { useNavigation } from '@react-navigation/native'

import Header from '../../../../components/views/Header'
import Box from '../../../../components/views/Box'
import BoxText from '../../../../components/views/BoxText'
import FloatButton from '../../../../components/controllers/FloatButton'
import Separator from '../../../../components/views/Separator'

import { MonetaryFormatter } from '../../../../utils/monetary-formatter'

import { DistanceDateFormatter } from '../../../../utils/distance-date-formatter'

interface ScreenProps {
  route?: {
    params: {
      id: string
    }
  }
}

const GoalDashboard: React.FC<ScreenProps> = ({ route = null }) => {
  const { getOneGoal } = useStorage()
  const { navigate } = useNavigation()
  const { theme } = useTheme()

  const [data, setData] = useState<GoalEntity>({} as GoalEntity)

  useEffect(() => {
    if (!route) {
      return
    }

    const id = route.params.id

    if (!id) {
      return
    }

    getOneGoal(id).then((goal) => {
      console.log(goal)
      setData(goal || ({} as GoalEntity))
    })
  }, [getOneGoal, route])

  const handlePressNewTransaction = useCallback(() => {
    if (!route) {
      return
    }

    navigate('create-transaction', {
      id: route.params.id,
      feature: 'goals',
    })
  }, [navigate, route])

  return (
    <>
      <Container>
        <Header title="Minha meta" goBackButton />
        {data.title ? (
          <Body>
            <Box title="Informações">
              <ProgressCircle
                percent={(data.amount / data.goal) * 100}
                radius={90}
                borderWidth={10}
                color={theme.colors.primary}
                shadowColor={theme.colors.backgroundLight}
                bgColor={theme.colors.background}>
                <PercentText>
                  {`${((data.amount / data.goal) * 100).toFixed(1)}%`}
                </PercentText>

                <AmountText>{MonetaryFormatter(data.amount)}</AmountText>

                <AmountText>{`de ${MonetaryFormatter(data.goal)}`}</AmountText>
              </ProgressCircle>

              <Separator padTop={15} />

              <BoxText title="Título" content={data.title} />

              {data.description && (
                <BoxText title="Descrição" content={data.description} />
              )}

              {data.date && (
                <BoxText
                  title="Tempo Restante"
                  content={DistanceDateFormatter(data.date)}
                />
              )}
            </Box>
            <Box title="Transações">
              <NotFoundText>Nenhuma transação foi encontrada!</NotFoundText>
            </Box>
          </Body>
        ) : (
          <ActivityIndicator
            style={{ marginTop: 50 }}
            size="large"
            color={theme.colors.primary}
          />
        )}
      </Container>

      <FloatButton onPress={handlePressNewTransaction} />
    </>
  )
}

export default GoalDashboard
