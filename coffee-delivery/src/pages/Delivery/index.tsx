import deliveryImage from '../../assets/deliveryImage.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Container,
  HeaderSuccess,
  OrderInfo,
  OrderInfoItem,
  SvgContainer,
  ImageContainer,
} from './styles'

export function Delivery() {
  return (
    <Container>
      <div>
        <HeaderSuccess>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </HeaderSuccess>
        <OrderInfo>
          <OrderInfoItem>
            <SvgContainer variantColor="purple">
              <MapPin size={22} />
            </SvgContainer>
            <div>
              <p>
                Entrega em <strong> Rua João Daniel Martinelli, 102</strong>{' '}
                <span>Farrapos - Porto Alegre, RS</span>
              </p>
            </div>
          </OrderInfoItem>
          <OrderInfoItem>
            <SvgContainer variantColor="yellowLight">
              <Timer size={22} />
            </SvgContainer>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </div>
          </OrderInfoItem>
          <OrderInfoItem>
            <SvgContainer variantColor="yellowDark">
              <CurrencyDollar size={22} />
            </SvgContainer>
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </OrderInfoItem>
        </OrderInfo>
      </div>
      <ImageContainer>
        <img src={deliveryImage} alt="" />
      </ImageContainer>
    </Container>
  )
}
