import { Container, Title, Benefits, SvgContainer } from './styles'
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import heroImg from '../../assets/Home/heroImg.png'
import { Products } from './Products'

export function Home() {
  return (
    <div>
      <Container>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a{' '}
              <br></br> qualquer hora
            </p>
          </Title>
          <Benefits>
            <div>
              <div>
                <SvgContainer variantColor="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </SvgContainer>
                <span>Compra simples e segura</span>
              </div>
              <div>
                <SvgContainer variantColor="yellowLight">
                  <Timer size={16} weight="fill" />
                </SvgContainer>
                <span>Entrega rápida e rastreada</span>
              </div>
            </div>
            <div>
              <div>
                <SvgContainer variantColor="brown">
                  <Package size={16} weight="fill" />
                </SvgContainer>
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <SvgContainer variantColor="purple">
                  <Coffee size={16} weight="fill" />
                </SvgContainer>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </Benefits>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </Container>
      <Products />
    </div>
  )
}
