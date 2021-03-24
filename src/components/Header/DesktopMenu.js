import React, {useState, useEffect} from 'react'
import {Link, withPrefix} from 'gatsby'
import {Menu, Container, Icon} from 'semantic-ui-react'
import ShoppingCartIcon from './ShoppingCartIcon'
import Logo from './Logo'
import header from '../../css_overrides/header.css'

const DesktopMenu = ({location: {pathname}, token, user, cartCount, signout}) => {
  const [activeItem, setActiveItem] = useState(pathname)

  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])

  return (
    <Menu class="headerr" size="huge" borderless pointing style={{backgroundColor:'white'}}>
      <Container text>

        <Menu.Item
          active={activeItem === withPrefix('/')}
          as={Link}
          to="/"
          header
        >
          <Logo />

        </Menu.Item>


        
        <Menu.Item              
              as={Link}
              to="/repairservices/"
              active={activeItem === withPrefix('/repairservices/')}
            >
                            <Icon name="wrench" />

               REPAIRS
            </Menu.Item>

        <Menu.Item              
              as={Link}
              to="/buydevice/"
              active={activeItem === withPrefix('/buydevice/')}
            >
                            <Icon name="mobile" />

               BUY
            </Menu.Item>
            <Menu.Item              
              as={Link}
              to="/selldevice/"
              active={activeItem === withPrefix('/selldevice/')}
            >
                            <Icon name="handshake" />

               SELL
            </Menu.Item>
            <Menu.Item              
              as={Link}
              to="/shopall/"
              active={activeItem === withPrefix('/shopall/')}
            >
                            <Icon name="shopping bag" />

               SHOP
            </Menu.Item>
            <Menu.Item              
              as={Link}
              to="/repairservices/"
              active={activeItem === withPrefix('/repairservices/')}
            >
                            <Icon name="wrench" />

               SUPPORT
            </Menu.Item>

         


            <Menu.Item>

            </Menu.Item>

        {user ? (
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/myaccount/"
              active={activeItem === withPrefix('/myaccount/')}
            >
              <Icon name="user" />
              My Account
            </Menu.Item>
            <Menu.Item onClick={signout}>Sign out</Menu.Item>
            <Menu.Item
              as={Link}
              to="/cart_example/"
              active={activeItem === withPrefix('/cart_example/')}
            >
              <ShoppingCartIcon cartCount={cartCount} name="Cart" />
            </Menu.Item>
          </Menu.Menu>
        ) : (

          <Menu.Menu position="right" style={{justifyContent:'center', alignItems:'center'}}>
            <Menu.Item>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/register/"
              style={{  height:'30%', borderRadius: '5px',
                border: '2px solid #b8ff00', backgroundColor:'#b8ff00'}}
              active={activeItem === withPrefix('/register/')}
            >
              Sign up
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/login/"
              style={{  height:'30%', borderRadius: '5px',
                border: '2px solid #4b00a1', marginLeft:'15px'}}
              active={activeItem === withPrefix('/login/')}
            >
              Sign in
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/cart_example/"
              active={activeItem === withPrefix('/cart_example/')}
            >
              <ShoppingCartIcon cartCount={cartCount} name="Cart" />
            </Menu.Item>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  )
}

export default DesktopMenu
