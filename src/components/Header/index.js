import React, {useContext} from 'react'
import {Responsive} from 'semantic-ui-react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import AuthContext from '../Context/AuthContext'
import CartContext from '../Context/CartContext'

const Header = ({location}) => {
  const {cartCount} = useContext(CartContext)
  const {state, uid, token, signOut} = useContext(AuthContext)
  console.log({uid})
  return (
    <>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <MobileMenu
          location={location}
          token={token}
          cartCount={cartCount}
          signout={signOut}
          state={state}
        />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <DesktopMenu
          location={location}
          token={token}
          cartCount={cartCount}
          signout={signOut}
          state={{state}}
        />
      </Responsive>
    </>
  )
}

export default Header
