import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogo from '../../assets/coffeeLogo.svg'
import { Cart, CartContainer, Container, Location } from './styles'

export function Header() {
  return (
    <Container>
      <img src={coffeeLogo} alt="" />
      <CartContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
          <strong>3</strong>
        </Cart>
      </CartContainer>
    </Container>
  )
}
