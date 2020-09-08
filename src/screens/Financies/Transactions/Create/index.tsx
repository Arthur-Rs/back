import React, { useCallback, useRef } from 'react'

import { ScrollView, Vibration, TextInput } from 'react-native'

import * as yup from 'yup'

import { FormHandles } from '@unform/core'

import { Container, Form } from './styles'

import { getValidationErrors } from '../../../../utils/get-validation-erros'

import { useStorage } from '../../../../hooks/useStorage'
import TranManagementModel from '../../../../storange/models/transaction-management.model'
import TranGoalModel from '../../../../storange/models/transaction-goal.model'

import Button from '../../../../components/controllers/Button'
import Input from '../../../../components/forms/Input'
import Header from '../../../../components/views/Header'

interface DataSubmit {
  title: string
  type?: 'income' | 'outcome'
  amount?: number
}

interface ScreenProps {
  route?: {
    params: {
      id: string
      feature: 'goals' | 'management'
    }
  }
}

const CreateGoal: React.FC<ScreenProps> = ({ route }) => {
  const { db } = useStorage()

  const titleRef = useRef<TextInput>(null)
  const typeRef = useRef<TextInput>(null)
  const amountRef = useRef<TextInput>(null)

  const formRef = useRef<FormHandles>(null)

  const handleToCreateNewGoal = useCallback(
    async (data: DataSubmit) => {
      try {
        const schema = yup.object().shape({
          title: yup.string().required('É necessário preencher o nome'),

          type: yup.string().notRequired(),

          amount: yup.number().notRequired(),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const feature = route?.params.feature as 'goals' | 'managements'
        const id = route?.params.id as string

        if (feature === 'goals') {
          const Transaction = db.collections.get<TranGoalModel>(
            'transactions_goal',
          )

          await db.action(async () => {
            await Transaction.create((tran) => {
              tran.title = data.title
              tran.type = data.type as 'income' | 'outcome'
              tran.goal.id = id
            })
          })
        } else {
          const Transaction = db.collections.get<TranManagementModel>(
            'transactions_management',
          )

          await db.action(async () => {
            await Transaction.create((tran) => {
              tran.title = data.title
              tran.type = data.type as 'income' | 'outcome'
              tran.management.id = id
            })
          })
        }
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          Vibration.vibrate([0, 100, 150, 300])
        }
      }
    },
    [db, route.params.feature, route.params.id],
  )

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Header title="Criar nova transação" titleSize="small" goBackButton />

        <Form onSubmit={handleToCreateNewGoal} ref={formRef}>
          <Input
            ref={titleRef}
            title="Título"
            field="title"
            paddingBottom={15}
            maxLength={24}
            returnKeyType="next"
            onEndEditing={() => {
              typeRef.current?.focus()
            }}
          />
          <Input
            ref={typeRef}
            title="Tipo"
            field="feature"
            paddingBottom={15}
            returnKeyType="next"
            onEndEditing={() => {
              amountRef.current?.focus()
            }}
          />

          <Input
            ref={amountRef}
            type="amount"
            title="Valor da transação"
            field="initialValue"
            paddingBottom={15}
            maxLength={22}
            returnKeyType="next"
          />

          <Button
            onPress={() => formRef.current?.submitForm()}
            name="Confirmar"
          />
        </Form>
      </Container>
    </ScrollView>
  )
}

export default CreateGoal
