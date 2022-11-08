import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 92px 0px;
  gap: 5.6rem;
`
export const Title = styled.div`
  margin-bottom: 60px;

  h1 {
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 16px;
  }

  p {
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
const SVG_COLORS = {
  yellowDark: 'yellow-dark',
  yellowLight: 'yellow',
  brown: 'base-text',
  purple: 'purple',
} as const

interface SvgProps {
  variantColor: 'yellowDark' | 'yellowLight' | 'brown' | 'purple'
}

export const SvgContainer = styled.i<SvgProps>`
  background-color: ${(props) => props.theme[SVG_COLORS[props.variantColor]]};
  padding: 8px;
  border-radius: 100%;
  svg {
    color: ${(props) => props.theme.white};
  }
`

export const Benefits = styled.div`
  display: flex;
  gap: 4rem;

  div {
    margin-bottom: 2rem;

    div {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      span {
        font-size: 1.6rem;
      }
    }
  }
`
