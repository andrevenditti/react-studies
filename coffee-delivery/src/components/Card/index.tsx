import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCoffeeDeliveryCart } from '../../context/CoffeeDeliveryContext'
import {
  CardContent,
  Attributes,
  Buy,
  SelectQuantity,
  ButtonBuy,
} from './styles'

interface CardProps {
  id: number
  imgUrl: string
  attributes: string[]
  price: number
  name: string
  discription: string
}

export function Card({
  id,
  imgUrl,
  attributes,
  price,
  name,
  discription,
}: CardProps) {
  const { decreaseCoffeeQuantity, getItemQuantity, increaseCoffeeQuantity } =
    useCoffeeDeliveryCart()

  const quantity = getItemQuantity(id)

  return (
    <CardContent key={id}>
      <img src={imgUrl} alt="" />
      <Attributes>
        {attributes.map((att: any) => (
          <span key={id}>{att}</span>
        ))}
      </Attributes>
      <h3>{name}</h3>
      <p>{discription}</p>
      <Buy>
        <span>
          R$
          <strong>{` ${price
            .toString()
            .replace('.', ',')
            .padEnd(4, '0')}`}</strong>
        </span>
        <div>
          <SelectQuantity>
            <button onClick={() => decreaseCoffeeQuantity(id)}>
              <Minus size={16} />
            </button>
            {quantity === 0 ? <span>{``}</span> : <span>{quantity}</span>}
            <button onClick={() => increaseCoffeeQuantity(id)}>
              <Plus size={16} />
            </button>
          </SelectQuantity>
          <NavLink to="/checkout">
            <ButtonBuy
              onClick={
                quantity === 0 ? () => increaseCoffeeQuantity(id) : () => {}
              }
            >
              <ShoppingCart size={22} weight="fill" />
            </ButtonBuy>
          </NavLink>
        </div>
      </Buy>
    </CardContent>
  )
}
