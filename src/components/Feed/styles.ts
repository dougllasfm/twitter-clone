import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Tab = styled.div`
  margin-top: 10px;
  padding: 16px 0;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--white);
  border-bottom: 4px solid var(--twitter);

  &:hover {
    background: #1a1a1a;
    transition: 0.4s;
  }
`

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`