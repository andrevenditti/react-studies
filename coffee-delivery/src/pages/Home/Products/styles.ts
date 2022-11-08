import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`
export const TitleProducts = styled.h2`
  font-size: 3.2rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 5.4rem;
`

export const CardAmount = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
`

export const Card = styled.li`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 20px;
  position: relative;
  margin-bottom: 32px;
  max-width: 256px;

  img {
    position: relative;
    top: -40px;
    right: -54px;
    text-align: center;
    margin-bottom: -24px;
  }

  h3 {
    font-size: 2rem;
    text-align: center;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 8px;
  }

  p {
    font-size: 1.4rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 32px;
  }
`

export const Attributes = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;

  span {
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 16px;
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 4px 8px;
    margin-bottom: 16px;
  }
`

export const Buy = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 4px;

  span {
    font-size: 1.4rem;

    strong {
      font-size: 2.4rem;
      font-family: 'Baloo 2', cursive;
    }
  }

  form {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    div {
      background: ${(props) => props.theme['base-input']};
      margin-right: 8px;
      height: 40px;
      padding: 0 8px;
    }

    div > svg {
      color: ${(props) => props.theme.purple};
    }

    input {
      width: 20px;
      border: 0;
      background: transparent;
    }
  }
`

export const ButtonBuy = styled.button`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-dark']};
  border: 0;
  border-radius: 8px;
  padding: 8px;
  transition: 0.1s background-color;

  :hover {
    background-color: ${(props) => props.theme.purple};
  }
`
