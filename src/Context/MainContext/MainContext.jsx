import React, { createContext } from 'react'
import WishlistProvider from '../WishlistContext/WishlsitContext'
import BasketProvider from '../BasketContext'

export const MainContext = createContext()

function MainProvider({children}) {
  return (
    <div>
      <WishlistProvider>
        <BasketProvider>{children}</BasketProvider>
      </WishlistProvider>
    </div>
  )
}

export default MainProvider