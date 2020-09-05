import React from 'react'

import { Container, Content, Title } from './styles'

interface BoxTextProps {
  title: string
  content: string
  contentSize?: number
}

const BoxText: React.FC<BoxTextProps> = ({ title, content, contentSize }) => (
  <Container>
    <Title>{title}</Title>
    <Content style={{ fontSize: contentSize || 22 }}>{content}</Content>
  </Container>
)

export default BoxText
