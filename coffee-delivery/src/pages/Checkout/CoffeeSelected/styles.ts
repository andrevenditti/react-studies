import styled from 'styled-components'

export const CoffeeCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  :not(:first-child) {
    padding-top: 24px;
  }

  div {
    display: flex;

    img {
      height: 64px;
      width: 64px;
      margin-right: 20px;
    }

    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 1.6rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
      }

      div {
        flex-direction: row;

        button {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          border: 0;
          border-radius: 6px;
          color: ${(props) => props.theme['base-text']};
          background: ${(props) => props.theme['base-button']};
          padding: 8px;

          svg {
            color: ${(props) => props.theme.purple};
          }
        }
      }
    }
  }

  strong {
    font-size: 1.6rem;
    text-align: right;
  }
`

export const CoffeQuantity = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  margin-right: 8px;
  height: 40px;
  padding: 0 8px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    text-align: center;
    width: 20px;
    background: transparent;
  }
`
