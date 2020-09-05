import React, { useState, useEffect } from 'react'

import { ActivityIndicator } from 'react-native'

import { Container, Main } from './styles'

// => Hooks
import { useStorage, GoalEntity } from '../../../hooks/useStorage'

// => Components
import RectGoal from '../../../components/views/RectGoal'
import Header from '../../../components/views/Header'
import { useTheme } from '../../../hooks/useTheme'

const Home: React.FC = () => {
  const { goalCacheData } = useStorage()
  const { theme } = useTheme()
  const [data, setData] = useState<GoalEntity[]>([])

  useEffect(() => {
    setData(goalCacheData)
  }, [goalCacheData])

  return (
    <Container>
      <Header
        addButton
        goBackButton={false}
        titleSize="medium"
        title="Suas Finanças"
        route="select-type"
      />
      {data ? (
        <Main>
          {data &&
            data.map(({ id, amount, goal, title, date }) => (
              <RectGoal
                key={id}
                id={id}
                title={title}
                amount={amount}
                goal={goal}
                dateLimit={date || undefined}
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

export default Home
