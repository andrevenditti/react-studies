import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  gap: 3.2rem;
`

export const ColumnOne = styled.div`
  width: 58%;
  margin-bottom: 32px;
`

export const TitleXs = styled.h4`
  font-size: 1.8rem;
`

export const AddressContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  margin-top: 15px;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 32px;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
      flex-direction: column;

      span {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1.6rem;
        line-height: 130%;
        display: block;
        margin-bottom: 2px;
      }

      p {
        font-size: 1.4rem;
        line-height: 130%;
      }
    }
  }
`

export const FormDelivery = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 1.2rem;
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  padding: 12px;
  border: 1px solid ${(props) => props.theme['base-button']};
`

export const InputTextCep = styled(BaseInput)`
  width: 200px;
`

export const InputTextRua = styled(BaseInput)`
  width: 100%;
`

export const InputTextNumber = styled(BaseInput)`
  width: 200px;
`

export const InputTextComplemento = styled.div`
  flex: 1;
  position: relative;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  input {
    border: 0;
    background: transparent;
    padding: 12px;
  }

  span {
    font-style: italic;
    font-size: 12px;
    display: block;
    position: absolute;
    right: 12px;
    top: 13px;
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputTextBairro = styled(BaseInput)`
  width: 200px;
`

export const InputTextCidade = styled(BaseInput)`
  flex: 1;
`

export const InputTextUf = styled(BaseInput)`
  width: 60px;
`

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

  div {
    background: ${(props) => props.theme['base-button']};
    padding: 16px;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    flex: 1;

    svg {
      color: ${(props) => props.theme.purple};
    }

    span {
      font-size: 1.2rem;
    }
  }
`
export const ColumnTwo = styled.div`
  width: 42%;
`

export const CoffeeSelected = styled.div`
  margin-top: 15px;
  padding: 40px;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
`

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

export const TotalOrders = styled.div`
  margin-top: 24px;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;

    :not(:last-child) {
      padding-bottom: 12px;
    }

    :last-child {
      font-size: 2rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
      padding-bottom: 24px;
    }
  }
`

export const ButtonConfirm = styled.button`
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  line-height: 160%;
  padding: 12px 8px;
  width: 100%;

  transition: 0.1s background-color;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
