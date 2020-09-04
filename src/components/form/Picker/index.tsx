import React from 'react';
import { PickerProps } from 'react-native';
import {
  Container, Text, StylePicker,
} from './styles';

interface InputProps extends PickerProps{
  name: string
  data: Array<{
    value: string
    label: string
  }>
}

const Input: React.FC<InputProps> = ({ data, name, ...rest }) => (
  <>
    <Text>{name}</Text>
    <Container>
      <StylePicker {...rest}>
        {data && data.map(({ label, value }) => (
          <StylePicker.Item
            key={value}
            label={label}
            value={value}
          />
        ))}
      </StylePicker>
    </Container>
  </>
);

export default Input;
