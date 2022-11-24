import { Minus, Plus, Trash } from 'phosphor-react'
import { useCoffeeDeliveryCart } from '../../../context/CoffeeDeliveryContext'
import { CoffeeCard, CoffeQuantity } from './styles'
import coffeItems from '../../../data/coffe.json'

export interface CoffeeSelectedProps {
  id: number
  quantity: number
}

export function CoffeeSelected({ id, quantity }: CoffeeSelectedProps) {
  const { decreaseCoffeeQuantity, increaseCoffeeQuantity, removeFromCart } =
    useCoffeeDeliveryCart()

  const coffee = coffeItems.find((coffee) => coffee.id === id)

  if (coffee == null) return null

  return (
    <CoffeeCard>
      <div>
        <img src={coffee.imgUrl} alt="" />
        <div>
          <span>{coffee.name}</span>
          <div>
            <CoffeQuantity>
              <button onClick={() => decreaseCoffeeQuantity(id)}>
                <Minus size={16} />
              </button>
              {quantity === 0 ? <span>{``}</span> : <span>{quantity}</span>}
              <button onClick={() => increaseCoffeeQuantity(id)}>
                <Plus size={16} />
              </button>
            </CoffeQuantity>
            <button onClick={() => removeFromCart(id)}>
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <span>
        R$
        <strong>{` ${coffee.price
          .toString()
          .replace('.', ',')
          .padEnd(4, '0')}`}</strong>
      </span>
    </CoffeeCard>
  )
}
