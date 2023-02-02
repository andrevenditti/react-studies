import styled from 'styled-components'

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  margin-top: 15px;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 32px;

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }

    div {
      flex-direction: column;

      span {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.6rem;
        line-height: 130%;
        margin-bottom: 2px;
        display: block;
      }

      p {
        font-size: 1.4rem;
        line-height: 130%;
      }
    }
  }
`

export const PaymentOption = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;

  button {
    align-items: center;
    border: 0;
    background: ${(props) => props.theme['base-button']};
    display: flex;
    flex: 1;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    gap: 1.2rem;
    padding: 16px;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`
