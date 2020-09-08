import React, { useCallback, useRef } from 'react'

import GoalModel from '../../../../storange/models/goal.model'

import {
  ScrollView,
  Vibration,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import * as yup from 'yup'

import { StackActions, useNavigation } from '@react-navigation/native'

import { FormHandles } from '@unform/core'

import { Container, Form } from './styles'

// => Utils
import { getValidationErrors } from '../../../../utils/get-validation-erros'

// => Hooks
import { useStorage } from '../../../../hooks/useStorage'

// => Components
import Button from '../../../../components/controllers/Button'
import Input from '../../../../components/forms/Input'
import PickerDate from '../../../../components/forms/PickerDate'
import Header from '../../../../components/views/Header'

interface DataSubmit {
  title: string
  description?: string
  goal: number
  initialValue?: number
  date?: Date
}

const CreateGoal: React.FC = () => {
  const titleRef = useRef<TextInput>(null)
  const descriptionRef = useRef<TextInput>(null)
  const goalRef = useRef<TextInput>(null)
  const initialValueRef = useRef<TextInput>(null)
  const dateRef = useRef<TouchableOpacity>(null)

  const formRef = useRef<FormHandles>(null)

  const { db } = useStorage()
  const { dispatch } = useNavigation()

  const handleToCreateNewGoal = useCallback(
    async (data: DataSubmit) => {
      try {
        const schema = yup.object().shape({
          title: yup.string().required('É necessário preencher o nome'),

          description: yup.string().notRequired(),

          goal: yup
            .number()
            .required('É necessário preencher o valor de sua meta!'),

          initialValue: yup
            .number()
            .max(
              yup.ref('goal'),
              'Seu valor inicial não poder ser maior que sua meta!',
            )
            .notRequired(),

          date: yup.date().notRequired(),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const goalsCollection = db.collections.get<GoalModel>('goals')

        await db.action(async () => {
          await goalsCollection.create((goal) => {
            goal.title = data.title
            goal.description = data.description
            goal.goal = data.goal
            goal.total = data.initialValue || 0
            goal.date = data.date
          })
        })

        dispatch(StackActions.popToTop())
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          Vibration.vibrate([0, 100, 150, 300])
        }
      }
    },
    [db, dispatch],
  )

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Header title="Criar nova meta" goBackButton />
        <Form onSubmit={handleToCreateNewGoal} ref={formRef}>
          <Input
            ref={titleRef}
            title="Título"
            field="title"
            paddingBottom={15}
            maxLength={24}
            returnKeyType="next"
            onEndEditing={() => {
              descriptionRef.current?.focus()
            }}
          />
          <Input
            ref={descriptionRef}
            title="Descrição (opcional)"
            field="description"
            multiline
            textAlignVertical="top"
            paddingBottom={15}
            numberOfLines={5}
            maxLength={600}
            returnKeyType="next"
            onEndEditing={() => {
              goalRef.current?.focus()
            }}
          />
          <Input
            ref={goalRef}
            type="amount"
            title="Meta"
            field="goal"
            paddingBottom={15}
            maxLength={22}
            returnKeyType="next"
            onEndEditing={() => {
              initialValueRef.current?.focus()
            }}
          />
          <Input
            ref={initialValueRef}
            type="amount"
            title="Valor Inicial (opcional)"
            field="initialValue"
            paddingBottom={15}
            maxLength={22}
            returnKeyType="next"
          />

          <PickerDate
            ref={dateRef}
            title="Data (opcional)"
            field="date"
            paddingBottom={15}
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
