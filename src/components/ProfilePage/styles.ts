import styled, { css } from 'styled-components';

import { LocationOn, Calendar } from '../../styles/icons'
import Button from '../Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: url('https://rockcontent.com/br/wp-content/uploads/sites/2/2019/03/tamanho-imagem-blog-1024x538.png');
  position: relative;
`
export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: url('https://rockcontent.com/br/wp-content/uploads/sites/2/2019/03/tamanho-imagem-blog-1024x538.png');
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`
export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;
  }
  
  > ul {
    display: flex;
    flex-shrink: 0;
    list-style: none;
    margin: 10px 0;

    > li {
      display: flex;
      align-items: center;

      font-size: 15px;
      color: var(--gray);
      margin-right: 12px;

      > svg {
        color: var(--gray);
        margin-right: 4px;
        fill: var(--gray);
      }
    }
  } 
`

const iconCss = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`

export const LocationIcon = styled(LocationOn)`
  ${iconCss}
`
export const CakeIcon = styled(Calendar)`
  ${iconCss}
`

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }

  &:hover {
    background: #1a1a1a;
    transition: 0.2s;
  }
`