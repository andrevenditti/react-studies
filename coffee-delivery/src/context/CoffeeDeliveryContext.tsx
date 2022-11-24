import { createContext, ReactNode, useContext, useState } from 'react'

interface CoffeeDeliveryProviderProps {
  children: ReactNode
}

interface CartItem {
  id: number
  quantity: number
}

interface CoffeeDeliveryContextType {
  cartQuantity: number
  cartItems: CartItem[]
  getItemQuantity: (id: number) => number
  increaseCoffeeQuantity: (id: number) => void
  decreaseCoffeeQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

const CoffeeDeliveryContext = createContext({} as CoffeeDeliveryContextType)

export function useCoffeeDeliveryCart() {
  return useContext(CoffeeDeliveryContext)
}

export function CoffeeDeliveryProvider({
  children,
}: CoffeeDeliveryProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  )

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  function increaseCoffeeQuantity(id: number) {
    setCartItems((prevState) => {
      if (prevState.find((item) => item.id === id) == null) {
        return [...prevState, { id, quantity: 1 }]
      } else {
        return prevState.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCoffeeQuantity(id: number) {
    setCartItems((prevState) => {
      if (prevState.find((item) => item.id === id)?.quantity === 1) {
        return prevState.filter((item) => item.id !== id)
      } else {
        return prevState.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems((prevState) => {
      return prevState.filter((item) => item.id !== id)
    })
  }

  return (
    <CoffeeDeliveryContext.Provider
      value={{
        cartQuantity,
        cartItems,
        getItemQuantity,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CoffeeDeliveryContext.Provider>
  )
}
