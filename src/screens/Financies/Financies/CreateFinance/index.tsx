import React, {useCallback, useRef} from 'react';

import {ScrollView, Vibration, TextInput} from 'react-native';

import * as yup from 'yup';

import {FormHandles} from '@unform/core';

import {Container, Form} from './styles';

import {getValidationErrors} from '../../../../utils/get-validation-erros';

import Button from '../../../../components/controllers/Button';
import Input from '../../../../components/form/Input';
import Header from '../../../../components/views/Header';

interface DataSubmit {
  title: string;
  description?: string;
  initialValue?: number;
}

const CreateGoal: React.FC = () => {
  const titleRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);
  const initialValueRef = useRef<TextInput>(null);

  const formRef = useRef<FormHandles>(null);

  const handleToCreateNewGoal = useCallback(async (data: DataSubmit) => {
    try {
      const schema = yup.object().shape({
        title: yup.string().required('É necessário preencher o nome'),

        description: yup.string().notRequired(),

        initialValue: yup.number().notRequired(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        Vibration.vibrate([0, 100, 150, 300]);
      }
    }
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <Container>
        <Header title="Criar nova gestão" goBackButton />

        <Form onSubmit={handleToCreateNewGoal} ref={formRef}>
          <Input
            ref={titleRef}
            title="Título"
            field="title"
            paddingBottom={15}
            maxLength={24}
            returnKeyType="next"
            onEndEditing={() => {
              descriptionRef.current?.focus();
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
              initialValueRef.current?.focus();
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

          <Button
            onPress={() => formRef.current?.submitForm()}
            name="Confirmar"
          />
        </Form>
      </Container>
    </ScrollView>
  );
};

export default CreateGoal;
