import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentContainer, PaymentOption } from './styles'

export function PaymentOptions() {
  return (
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
        <button>
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </button>
        <button>
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </button>
        <button>
          <Money size={16} />
          DINHEIRO
        </button>
      </PaymentOption>
    </PaymentContainer>
  )
}
