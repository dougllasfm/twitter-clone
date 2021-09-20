import { ReactNode } from 'react'

import { Container, Item, Title } from './styles'

type Props =  {
  title: string,
  elements: ReactNode[],
}

export function List( {title, elements}:Props ) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>
      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  )
}