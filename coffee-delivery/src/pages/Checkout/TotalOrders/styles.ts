import styled from 'styled-components'

export const TotalOrdersContainer = styled.div`
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
