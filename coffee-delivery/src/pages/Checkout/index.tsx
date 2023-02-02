import { useCoffeeDeliveryCart } from '../../context/CoffeeDeliveryContext'
import { useForm } from 'react-hook-form'

import { MapPinLine } from 'phosphor-react'

import {
  ColumnOne,
  Container,
  TitleXs,
  AddressContainer,
  FormDeliveryContainer,
  InputTextCep,
  InputTextRua,
  InputTextNumber,
  InputTextComplemento,
  InputTextBairro,
  InputTextCidade,
  InputTextUf,
  ColumnTwo,
  CoffeeSelectedContainer,
  ButtonConfirm,
} from './styles'
import { CoffeeSelected } from './CoffeeSelected'
import { TotalOrders } from './TotalOrders'
import { PaymentOptions } from './PaymentOptions'

export function Checkout() {
  const { cartItems } = useCoffeeDeliveryCart()

  const { register, handleSubmit, watch } = useForm()

  function handleRegisterAddres(data: any) {
    console.log(data)
  }

  const street = watch('street')
  const isSubmitDisabled = !street

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
          <form>
            <FormDeliveryContainer>
              <InputTextCep
                type="text"
                placeholder="CEP"
                {...register('cep')}
              />
              <InputTextRua
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
              <InputTextNumber
                type="text"
                placeholder="Número"
                {...register('number')}
              />
              <InputTextComplemento>
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                />
                <span>Opcional</span>
              </InputTextComplemento>
              <InputTextBairro
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <InputTextCidade
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              <InputTextUf
                type="text"
                placeholder="UF"
                {...register('state')}
              />
            </FormDeliveryContainer>
          </form>
        </AddressContainer>
        <PaymentOptions />
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
          <ButtonConfirm
            disabled={isSubmitDisabled}
            onClick={handleSubmit(handleRegisterAddres)}
          >
            CONFIRMAR PEDIDO
          </ButtonConfirm>
        </CoffeeSelectedContainer>
      </ColumnTwo>
    </Container>
  )
}
