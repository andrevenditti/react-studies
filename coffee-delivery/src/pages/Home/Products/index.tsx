import { Card } from '../../../components/Card'
import coffeItems from '../../../data/coffe.json'

import { Container, CardAmount, TitleProducts } from './styles'

export function Products() {
  return (
    <Container>
      <TitleProducts>Nossos cafés</TitleProducts>
      <CardAmount>
        {coffeItems.map((coffee) => {
          return <Card key={coffee.id} {...coffee} />
        })}
      </CardAmount>
    </Container>
  )
}
