import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px;
`
export const Location = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 8px;
  gap: 0.4rem;

  background: ${(props) => props.theme['purple-light']};

  svg {
    color: ${(props) => props.theme.purple};
    fill: ${(props) => props.theme.purple};
  }

  p {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 1.4rem;
  }
`
export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`
export const Cart = styled.div`
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme['yellow-light']};
  position: relative;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    fill: ${(props) => props.theme['yellow-dark']};
  }

  strong {
    position: absolute;
    top: -5px;
    right: -5px;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    font-size: 1.4rem;
    z-index: 1;

    ::before {
      content: '';
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      top: -2px;
      right: -6px;
      background-color: ${(props) => props.theme['yellow-dark']};
      z-index: -1;
    }
  }
`
