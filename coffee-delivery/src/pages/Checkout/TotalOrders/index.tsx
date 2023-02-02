import { TotalOrdersContainer } from './styles'
import { useCoffeeDeliveryCart } from '../../../context/CoffeeDeliveryContext'

export function TotalOrders() {
  const { cartQuantity } = useCoffeeDeliveryCart()

  const coffePrice = 9.9

  const deliveryValue = 3.5

  const cartTotalValue = coffePrice * cartQuantity
  const shoppingTotalValue = cartTotalValue + deliveryValue

  return (
    <TotalOrdersContainer>
      <div>
        <p>Total de itens</p>
        <span>
          {`R$ ${cartTotalValue.toString().replace('.', ',').padEnd(4, '0')}`}
        </span>
      </div>
      <div>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </div>
      <div>
        <p>Total</p>
        <span>
          {`R$ ${shoppingTotalValue
            .toString()
            .replace('.', ',')
            .padEnd(4, '0')}`}
        </span>
      </div>
    </TotalOrdersContainer>
  )
}
