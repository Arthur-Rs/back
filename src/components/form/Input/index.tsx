import React,
{ useState,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import {
  TextInputProps,
  TextInput,
} from 'react-native';

import { useField } from '@unform/core';

import {
  MonetaryFormatter,
  GetValueToMoney,
} from '../../../utils/monetary-formatter';

import {
  Container,
  InputArea,
  InputText,
  Text,
  Line,
  ErrorText,
} from './styles';

interface InputProps extends TextInputProps{
  title: string
  field: string
  paddingTop?: number
  type?:'text' | 'amount'
  paddingBottom?: number
  onChangeText?(value: string | number):void
}

interface InputReference {
  value: string | number
}

const Input = forwardRef<TextInput, InputProps>(({
  title,
  field,
  type,
  paddingTop,
  paddingBottom,
  onChangeText,
  ...rest
}, ref) => {
  const { fieldName, defaultValue, error, registerField } = useField(field);
  const valueRef = useRef<InputReference>({ value: defaultValue });

  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(
      type === 'amount'
        ? 'R$ 0,00'
        : defaultValue,
    );

    registerField({
      name: fieldName,
      ref: valueRef.current,
      path: 'value',
    });
  }, [defaultValue, fieldName, registerField, type]);

  const handleInputText = useCallback((text: string) => {
    const numberFormat = GetValueToMoney(text);
    if (type === 'amount') {
      if (isNaN(numberFormat)) {
        setValue('R$ 0,00');
        valueRef.current.value = '0';
        return;
      }

      setValue(MonetaryFormatter(numberFormat));
      valueRef.current.value = numberFormat;
      if (onChangeText) {
        onChangeText(numberFormat);
      }
    } else {
      if (onChangeText) {
        onChangeText(text);
      }
      valueRef.current.value = text;
      setValue(text);
    }
  }, [onChangeText, type]);

  return (
    <Container
      paddingTop={paddingTop || 0}
      paddingBottom={paddingBottom || 0}
    >
      <Text>{title}</Text>
      <InputArea focused={focused}>
        <InputText
          ref={ref}

          onFocus={() => {
            setFocused(true);
            setFilled(true);
          }}

          onBlur={() => {
            setFocused(false);
            setFilled(!!value);
          }}
          value={value}
          {...rest}

          keyboardType={type === 'amount' ? 'numeric' : 'default'}
          onChangeText={handleInputText}
        />
        {filled && <Line />}
      </InputArea>
      {error && <ErrorText>{`* ${error}`}</ErrorText>}
    </Container>
  );
});

export default Input;
