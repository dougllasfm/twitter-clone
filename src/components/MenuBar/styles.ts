import styled, { css } from 'styled-components';
import { Email, ExitToApp, LogoTwitter, Home, HashOutline, Notifications, ViewList, Person, MoreCircle, Bookmark } from '../../styles/icons'
import Button from '../Button'

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 30px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }

`
export const TopSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`

const iconCss = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;

  color: var(--white);
`

export const Logo = styled(LogoTwitter)`
  width: 50px;
  height: 30px;

  margin-bottom: 10px;
`

export const MenuBottom = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  
  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 5px;

      font-size: 20px;
    }
    padding: 8.25px 12px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 8.5px;
  }

  & + button:last-child {
    margin-top: 3px;

    width: 40px;
    height: 40px;
    
    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;
      
      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--outline);
  }

  &:hover, &.active {
    span {
      color: var(--white);
    }
  }
`

export const HomeIcon = styled(Home)`
  ${iconCss}
  margin-right: 5px;
`
export const ExploreIcon = styled(HashOutline)`
  ${iconCss}
  margin-right: 5px;
`
export const BellIcon = styled(Notifications)`
  ${iconCss}
  margin-right: 5px;
`
export const MessageIcon = styled(Email)`
  ${iconCss}
  margin-right: 5px;
`
export const ItemSaveIcon = styled(Bookmark)`
  ${iconCss}
  margin-right: 5px;
`
export const ListIcon = styled(ViewList)`
  ${iconCss}
  margin-right: 5px;
`
export const PerfilIcon = styled(Person)`
  ${iconCss}
  margin-right: 5px;
`

export const MoreIcon = styled(MoreCircle)`
  ${iconCss}
  margin-right: 5px;
`

export const ButtonTweet = styled(Button)`
  background: var(--twitter);
  color: var(--twitter);
  border: var(--twitter);
  width: 120px;

  &:hover {
    background: ${(props) => (props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)')}
  }
`

export const BottomSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;
  
  border-radius: 50%;
  background: var(--gray);
`

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction:column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`