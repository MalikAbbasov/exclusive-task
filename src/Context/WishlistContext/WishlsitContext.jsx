import React, { createContext } from 'react'
import useLocalStorage from '../../hook/useLocalStorage'

export const WishlistContext = createContext()

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist",[])

    function addWish(item){
        let elementIndex = wishlist.findIndex((x)=> x.id === item.id)
        if (elementIndex !== -1) {
            setWishlist(wishlist.filter((x)=>x.id !== item.id))
        }
        else{
            setWishlist([...wishlist,item])
            
        }
    }

    const data = {
        wishlist,addWish
    }

  return (
    <div>
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    </div>
  )
}

export default WishlistProvider