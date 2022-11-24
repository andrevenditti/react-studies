import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 80px;
  gap: 3.2rem;
`

export const HeaderSuccess = styled.header`
  margin-bottom: 40px;

  h1 {
    font-size: 3.2rem;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 130%;
    margin-bottom: 4px;
  }

  p {
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderInfo = styled.div`
  padding: 40px;
  border: solid 1px ${(props) => props.theme.purple};
  border-radius: 6px 36px;
  /* background-image: linear-gradient(white, white),
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  background-origin: border-box;
  background-clip: content-box, border-box; */

  div {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }
`

const SVG_COLORS = {
  yellowDark: 'yellow-dark',
  yellowLight: 'yellow',
  purple: 'purple',
} as const

interface SvgProps {
  variantColor: 'yellowDark' | 'yellowLight' | 'purple'
}

export const SvgContainer = styled.i<SvgProps>`
  background-color: ${(props) => props.theme[SVG_COLORS[props.variantColor]]};
  padding: 8px;
  border-radius: 100%;
  svg {
    color: ${(props) => props.theme.white};
  }
`

export const OrderInfoItem = styled.div`
  display: flex;
  gap: 1.2rem;

  div {
    font-size: 1.6rem;
    line-height: 130%;

    span {
      display: block;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
`
