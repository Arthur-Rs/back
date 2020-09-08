import React, { useState, useEffect } from 'react'

import withObservables from '@nozbe/with-observables'

import { ActivityIndicator } from 'react-native'

import { Container, Main } from './styles'

// => Hooks
import { useStorage, database } from '../../../hooks/useStorage'

// => Components
import RectGoal from '../../../components/views/RectGoal'
import Header from '../../../components/views/Header'
import { useTheme } from '../../../hooks/useTheme'
import GoalModel from '../../../storange/models/goal.model'

interface IObservables {
  goals: GoalModel[]
}

const Home: React.FC<IObservables> = ({ goals }) => {
  const { theme } = useTheme()

  return (
    <Container>
      <Header
        addButton
        goBackButton={false}
        titleSize="medium"
        title="Suas Finanças"
        route="select-type"
      />
      {goals ? (
        <Main>
          {goals &&
            goals.map((goal) => (
              <RectGoal
                key={goal.id}
                id={goal.id}
                title={goal.title}
                amount={goal.total}
                goal={goal.goal}
                dateLimit={goal.date || undefined}
              />
            ))}
        </Main>
      ) : (
        <ActivityIndicator
          style={{ marginTop: 50 }}
          size="large"
          color={theme.colors.primary}
        />
      )}
    </Container>
  )
}

const enhance = withObservables(['goals'], ({ goals }) => ({
  goals: database.collections.get('goals').query().observe(),
}))

export default enhance(Home)
