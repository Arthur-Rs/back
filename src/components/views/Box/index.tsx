import React from 'react';

import {
  Container,
  Header,
  BorderBottom,
  Title,
  Body,
} from './styles';

interface BoxProps{
  title: string
}

const Box: React.FC<BoxProps> = ({
  title,
  children,
}) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      <BorderBottom />
    </Header>
    <Body>
      {children}
    </Body>
  </Container>
);

export default Box;
