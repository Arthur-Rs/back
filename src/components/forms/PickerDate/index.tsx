import React, {
  useState,
  useCallback,
  forwardRef,
  useRef,
  useEffect,
} from 'react'

import { TouchableOpacity, View } from 'react-native'

import DateTimePicker, { Event } from '@react-native-community/datetimepicker'

import { format, Locale, addDays } from 'date-fns'

import * as LocalePTBR from 'date-fns/locale/pt-BR'

import { useField } from '@unform/core'

import { Container, Text, Line, DateText, EmptyDateText } from './styles'

interface PropsPickerDate {
  title: string
  field: string
  paddingTop?: number
  paddingBottom?: number
  onChange?(date: Date): void
}

interface InputReference {
  value: Date
}

const PickerDate = forwardRef<TouchableOpacity, PropsPickerDate>(
  ({ title, field, paddingTop, paddingBottom, onChange }, ref) => {
    const { fieldName, defaultValue, registerField } = useField(field)
    const valueRef = useRef<InputReference>({ value: defaultValue })

    const [focused, setFocused] = useState(false)
    const [date, setDate] = useState<string | null>(null)
    const [show, setShow] = useState(false)
    const [filled, setFilled] = useState(false)

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: valueRef.current,
        path: 'value',
      })
    }, [fieldName, registerField])

    const handleOnChange = useCallback(
      (_: Event, dateValue?: Date) => {
        if (!dateValue) {
          setShow(false)
          setFocused(false)
          return
        }

        const dateFormatter = format(dateValue, "dd 'de' MMMM 'de' yyyy", {
          locale: LocalePTBR as Locale,
        })

        valueRef.current.value = dateValue
        setShow(false)
        setFocused(false)
        setFilled(true)
        setDate(dateFormatter)

        if (onChange) {
          onChange(dateValue)
        }
      },
      [onChange],
    )

    return (
      <View
        style={{
          paddingTop,
          paddingBottom,
        }}>
        <Text>{title}</Text>

        <Container
          activeOpacity={0.8}
          ref={ref}
          focused={focused}
          onPress={() => {
            setShow(true)
            setFocused(true)
          }}>
          {date ? (
            <DateText>{date}</DateText>
          ) : (
            <EmptyDateText>Clique para selecionar uma data</EmptyDateText>
          )}
          {show && (
            <DateTimePicker
              value={addDays(new Date(), 1)}
              minimumDate={addDays(new Date(), 1)}
              mode="date"
              onChange={handleOnChange}
              display="calendar"
            />
          )}
          {filled && <Line />}
        </Container>
      </View>
    )
  },
)

export default PickerDate
