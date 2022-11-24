import { TotalOrdersContainer } from './styles'
import { useCoffeeDeliveryCart } from '../../../context/CoffeeDeliveryContext'

export function TotalOrders() {
  const { cartQuantity } = useCoffeeDeliveryCart()

  const deliveryValue = 3.5

  const cartTotalValue = 9.9 * cartQuantity
  const shoppingTotalValue = cartTotalValue + deliveryValue

  return (
    <TotalOrdersContainer>
      <div>
        <p>Total de itens</p>
        <span>R$ {cartTotalValue.toString().replace('.', ',')}</span>
      </div>
      <div>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </div>
      <div>
        <p>Total</p>
        <span>R$ {shoppingTotalValue.toString().replace('.', ',')}</span>
      </div>
    </TotalOrdersContainer>
  )
}
