import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import expressoTradicional from '../../../assets/Home/Coffe/expressoTradicional.png'
import expressoAmericano from '../../../assets/Home/Coffe/expressoAmericano.png'

import {
  Container,
  Card,
  CardAmount,
  TitleProducts,
  Attributes,
  Buy,
  ButtonBuy,
} from './styles'

// interface CardProps {
//   image: string
//   attibutes: {}
//   preço: number
//   name: string
//   description: string
// }

export function Products() {
  function handleClickButton() {
    console.log('clicou')
  }

  function handleNewBuy() {
    console.log('clicou')
  }

  function handleNewCoffeeBuy(id: number) {
    event.preventDefault()
    console.log(id)
  }

  const coffes = [
    {
      id: 1,
      img: expressoTradicional,
      attributes: {
        type: 'tradicional',
      },
      name: 'Expresso Tradicional',
      discription: 'O tradicional café feito com água quente e grãos moído',
      price: 9.9,
    },
    {
      id: 2,
      img: expressoAmericano,
      attributes: {
        type: 'tradicional',
      },
      name: 'Expresso Americano',
      discription: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
  ]

  return (
    <Container>
      <TitleProducts>Nossos cafés</TitleProducts>
      <CardAmount>
        {coffes.map((coffee) => {
          return (
            <Card key={coffee.id}>
              <img src={coffee.img} alt="" />
              <Attributes>
                <span>{coffee.attributes.type}</span>
              </Attributes>
              <h3>{coffee.name}</h3>
              <p>{coffee.discription}</p>
              <Buy>
                <span>
                  R$
                  <strong>{` ${coffee.price
                    .toString()
                    .replace('.', ',')
                    .padEnd(4, '0')}`}</strong>
                </span>
                <form onSubmit={handleNewCoffeeBuy(handleNewBuy)} action="">
                  <div>
                    <Minus size={16} onClick={handleClickButton} />
                    <input type="number" min={1} max={9} />
                    <Plus size={16} />
                  </div>
                  <ButtonBuy onClick={handleNewBuy}>
                    <ShoppingCart size={22} weight="fill" />
                  </ButtonBuy>
                </form>
              </Buy>
            </Card>
          )
        })}
      </CardAmount>
    </Container>
  )
}
