import React from 'react'
import styled from 'styled-components/native'

interface Props {
  padTop?: number
  padBottom?: number
}

const BorderBottom = styled.View<Props>`
  width: 85%;
  background: #000;
  opacity: 0.15;
  border-radius: 3px;
  height: 3px;
  margin-top: ${({ padTop }) => padTop || 0}px;
  margin-bottom: ${({ padBottom }) => padBottom || 0}px;
`

const Sepator: React.FC<Props> = ({ padBottom, padTop }) => {
  return <BorderBottom padBottom={padBottom} padTop={padTop} />
}

export default Sepator
