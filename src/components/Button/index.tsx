import styled from 'styled-components'

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--white)')};
  color: ${(props) => (props.outlined ? 'var(--white)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--white)' : 'none')};
  
  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;
`