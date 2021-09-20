import {
  Container,
  TopSide,
  Logo,
  MenuBottom,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  MessageIcon,
  ItemSaveIcon,
  ListIcon,
  PerfilIcon,
  MoreIcon,
  ButtonTweet,
  BottomSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

export function MenuBar() {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuBottom>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuBottom>
        <MenuBottom>
          <ExploreIcon />
          <span>Explorar</span>
        </MenuBottom>
        <MenuBottom>
          <BellIcon />
          <span>Notificações</span>
        </MenuBottom>
        <MenuBottom>
          <MessageIcon />
          <span>Mensagens</span>
        </MenuBottom>
        <MenuBottom>
          <ItemSaveIcon />
          <span>Itens salvos</span>
        </MenuBottom>
        <MenuBottom>
          <ListIcon />
          <span>Listas</span>
        </MenuBottom>
        <MenuBottom>
          <PerfilIcon />
          <span>Perfil</span>
        </MenuBottom>
        <MenuBottom>
          <MoreIcon />
          <span>Mais</span>
        </MenuBottom>
        <ButtonTweet>
          <span>Tweetar</span>
        </ButtonTweet>
      </TopSide>

      <BottomSide>
        <Avatar />
        <ProfileData>
          <strong>Douglas</strong>
          <span>@douglass_fm</span>
        </ProfileData>
        <ExitIcon />

      </BottomSide>

    </Container>
  );
}
