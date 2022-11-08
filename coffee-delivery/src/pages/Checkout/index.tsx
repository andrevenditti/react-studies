import expressoTradicional from '../../assets/Home/Coffe/expressoTradicional.png'
// import expressoAmericano from '../../assets/Home/Coffe/expressoAmericano.png'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
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
  CoffeeSelected,
  CoffeeCard,
  CoffeQuantity,
  TotalOrders,
  ButtonConfirm,
} from './styles'

export function Checkout() {
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
        <CoffeeSelected>
          <div>
            <CoffeeCard>
              <div>
                <img src={expressoTradicional} alt="" />
                <div>
                  <span>Expresso Tradicional</span>
                  <div>
                    <CoffeQuantity>
                      <Minus size={16} />
                      <span>1</span>
                      <Plus size={16} />
                    </CoffeQuantity>
                    <button>
                      <Trash size={16} />
                      REMOVER
                    </button>
                  </div>
                </div>
              </div>
              <strong>R$ 9,90</strong>
            </CoffeeCard>
            <CoffeeCard>
              <div>
                <img src={expressoTradicional} alt="" />
                <div>
                  <span>Expresso Tradicional</span>
                  <div>
                    <CoffeQuantity>
                      <Minus size={16} />
                      <span>1</span>
                      <Plus size={16} />
                    </CoffeQuantity>
                    <button>
                      <Trash size={16} />
                      REMOVER
                    </button>
                  </div>
                </div>
              </div>
              <strong>R$ 9,90</strong>
            </CoffeeCard>
          </div>
          <TotalOrders>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <span>R$ 33,20</span>
            </div>
          </TotalOrders>
          <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
        </CoffeeSelected>
      </ColumnTwo>
    </Container>
  )
}
