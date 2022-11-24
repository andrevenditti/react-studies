import { useCoffeeDeliveryCart } from '../../context/CoffeeDeliveryContext'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  ColumnOne,
  Container,
  FormDelivery,
  InputTextCep,
  InputTextRua,
  InputTextNumber,
  InputTextComplemento,
  InputTextBairro,
  InputTextCidade,
  InputTextUf,
  TitleXs,
  AddressContainer,
  PaymentContainer,
  PaymentOption,
  ColumnTwo,
  CoffeeSelectedContainer,
  ButtonConfirm,
} from './styles'
import { CoffeeSelected } from './CoffeeSelected'
import { TotalOrders } from './TotalOrders'

export function Checkout() {
  const { cartItems } = useCoffeeDeliveryCart()

  return (
    <Container>
      <ColumnOne>
        <TitleXs>Complete seu pedido</TitleXs>
        <AddressContainer>
          <header>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <FormDelivery action="">
            <InputTextCep type="text" placeholder="CEP" required />
            <InputTextRua type="text" placeholder="Rua" required />
            <InputTextNumber type="text" placeholder="Número" required />
            <InputTextComplemento>
              <input type="text" placeholder="Complemento" />
              <span>Opcional</span>
            </InputTextComplemento>
            <InputTextBairro type="text" placeholder="Bairro" required />
            <InputTextCidade type="text" placeholder="Cidade" required />
            <InputTextUf type="text" placeholder="UF" required />
          </FormDelivery>
        </AddressContainer>
        <PaymentContainer>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a dorma que deseja pagar
              </p>
            </div>
          </header>
          <PaymentOption>
            <div>
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </div>
            <div>
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </div>
            <div>
              <Money size={16} />
              <span>DINHEIRO</span>
            </div>
          </PaymentOption>
        </PaymentContainer>
      </ColumnOne>
      <ColumnTwo>
        <TitleXs>Cafés selecionados</TitleXs>
        <CoffeeSelectedContainer>
          <div>
            {cartItems.map((coffee) => {
              return (
                <div key={coffee.id}>
                  <CoffeeSelected {...coffee} />
                </div>
              )
            })}
            <TotalOrders />
          </div>
          <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
        </CoffeeSelectedContainer>
      </ColumnTwo>
    </Container>
  )
}
