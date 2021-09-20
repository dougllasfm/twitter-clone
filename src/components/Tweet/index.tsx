import {
  Container,
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
  RetweetedStatusIcon,
} from './styles';

export function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Douglas</strong>
            <span>@douglass_fm</span>
            <Dot />
            <time>21 de ago</time>
          </Header>
          <Description>Testando tweet de grande caracteres.</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              30
            </Status>
            <Status>
              <RetweetedStatusIcon />
              12
            </Status>
            <Status>
              <LikeIcon />
              548
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
