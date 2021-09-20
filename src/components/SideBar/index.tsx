import StickyBox from 'react-sticky-box'

import { List } from '../List'
import { FollowSuggestion } from '../FollowSuggestion'
import { News } from '../News'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles'

export function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>     
      <StickyBox>
      <Body>
        <List 
          title="Quem seguir"
          elements={[
            <FollowSuggestion 
              name="Douglas Munaro"
              nickname="@douglass_fm"
            />
          ]}
        />
        <List 
          title="O que está acontecendo"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
        />
        <List 
          title="O que está acontecendo"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
        />
        <List 
          title="O que está acontecendo"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
        />
      </Body>
      </StickyBox>
    </Container>
  )
}