import { ProfilePage } from '../ProfilePage'

import { 
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
   } from './styles'

export function Main() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Douglas Munaro</strong>
          <span>928 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />
      <BottomMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}