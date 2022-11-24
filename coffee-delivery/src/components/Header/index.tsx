import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import coffeeLogo from '../../assets/coffeeLogo.svg'
import { useCoffeeDeliveryCart } from '../../context/CoffeeDeliveryContext'
import { Cart, CartContainer, Container, Location } from './styles'

export function Header() {
  const { cartQuantity } = useCoffeeDeliveryCart()
  return (
    <Container>
      <NavLink to="/">
        <img src={coffeeLogo} alt="" />
      </NavLink>
      <CartContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </Location>
        <Cart>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            <strong>{cartQuantity}</strong>
          </NavLink>
        </Cart>
      </CartContainer>
    </Container>
  )
}
