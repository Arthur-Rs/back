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

import { useStorage } from '../../../../hooks/useStorage'
import GoalModel from '../../../../storange/models/goal.model'

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
  const { db } = useStorage()
  const { navigate } = useNavigation()
  const { theme } = useTheme()

  const [data, setData] = useState<GoalModel>()

  useEffect(() => {
    if (!route) {
      return
    }

    const id = route.params.id

    if (!id) {
      return
    }

    db.collections
      .get<GoalModel>('goals')
      .find(id)
      .then((goal) => {
        goal.collections
          .get('transactions_goal')
          .query()
          .fetch()
          .then((tr) => {
            console.log(tr)
          })
        setData(goal)
      })
  }, [db.collections, route])

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
        {data ? (
          <Body>
            <Box title="Informações">
              <ProgressCircle
                percent={(data.total / data.goal) * 100}
                radius={90}
                borderWidth={10}
                color={theme.colors.primary}
                shadowColor={theme.colors.backgroundLight}
                bgColor={theme.colors.background}>
                <PercentText>
                  {`${((data.total / data.goal) * 100).toFixed(1)}%`}
                </PercentText>

                <AmountText>{MonetaryFormatter(data.total)}</AmountText>

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
