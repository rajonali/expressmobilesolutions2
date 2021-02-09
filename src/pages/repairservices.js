/* eslint-disable camelcase */
import React, {useState, useContext, useEffect} from 'react'
import SEO from '../components/SEO'
import CartItemList from '../components/CartItemList'
import CartSummary from '../components/CartSummary'
import CartContext from '../components/Context/CartContext'
import Layout from '../components/Layout'
import { Button, Card, Image } from 'semantic-ui-react'
import iphonesrepairservices from '../images/iphonesrepairservices.jpeg'
import samsungrepairservices from '../images/samsungrepairservices.jpeg'

import tabletrepairservices from '../images/tabletrepairservices.jpeg'
import laptoprepairservices from '../images/laptoprepairservices.jpeg'
import ipadrepairservices from '../images/ipadrepairservices.jpeg'



const Moltin = require('../../lib/moltin')

const Cart = ({location}) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [completed, setCompleted] = useState(false)
  const [meta, setMeta] = useState({})
  const [cartId, setCartId] = useState({})
  const {updateCartCount} = useContext(CartContext)

  async function getCartItems() {
    const cartIdLocal = await localStorage.getItem('mcart')
    await Moltin.getCartItems(cartIdLocal).then(({data, meta}) => {
      setItems(data)
      setCartId(cartIdLocal)
      setMeta(meta)
      setLoading(false)
    })
  }

  useEffect(() => {
    getCartItems()
  }, [])

  const handleCheckout = async data => {
    const cartId = await localStorage.getItem('mcart')
    const customerId = localStorage.getItem('mcustomer')

    const {
      id: token,
      email,
      card: {
        name,
        address_line1: line_1,
        address_city: city,
        address_country: country,
        address_state: county,
        address_zip: postcode,
      },
    } = data

    const customer = customerId || {name, email}

    const address = {
      first_name: name.split(' ')[0],
      last_name: name.split(' ')[1] || '',
      line_1,
      city,
      county: county || '',
      country,
      postcode,
    }

    try {
      const {
        data: {id},
      } = await Moltin.checkoutCart(cartId, customer, address)
      await Moltin.payForOrder(id, token, email)
      setCompleted(true)
      updateCartCount(0, cartId)
    } catch (e) {
      console.log(e)
    }
  }

  const handleRemoveFromCart = itemId => {
    Moltin.removeFromCart(itemId, cartId).then(({data, meta}) => {
      const total = data.reduce((a, c) => a + c.quantity, 0)
      updateCartCount(total, cartId)
      setItems(data)
      setMeta(meta)
    })
  }

  const rest = {completed, items, loading, cartId}

  return (
    <Layout location={location}>
            <div style={{padding:'100px'}}>

      <SEO title="Cart" />
      <center>
<h2>Repair Services</h2>
      <p>

When you’re in need of repair services for your cell phone, tablet, laptop, or other electronics, depend on the professionals at Cell Phone Repair Baton Rouge Towne Center. CPR is your one-stop tech repair shop in Baton Rouge, LA. From cracked screens and water damage to faulty batteries and much more, you can rely on us for solutions to all of the most common issues with your devices.

      </p>
      </center>
      <Card.Group style={{display:'flex', boxShadow:'none', flex:1, justifyContent:'space-around', paddingTop:'40px'}}>
      <Card style={{width:'40%', boxShadow:'none',}}>
      <Image src={iphonesrepairservices} height="40px" wrapped ui={false} />

      <Card.Content>
      <Card.Header style={{padding:'10px'}}>iPhone Repair Services</Card.Header>
      <Card.Description style={{padding:'10px'}}>CPR technicians are professionally trained to repair the latest Apple iPhone models. From smaller repairs like cracked screens, broken home buttons, muffled audio and broken charging ports to more complex issues such as broken LCDs, water damage, and jailbreaking, CPR Cell Phone Repair can fix your broken iPhone.</Card.Description>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button color="primary">LEARN MORE</Button>
        </div>
      </Card.Content>
    </Card.Content>
        </Card>
        <Card style={{width:'40%', boxShadow:'none'}}>
      <Image src={iphonesrepairservices} wrapped ui={false} />

      <Card.Content>
      <Card.Header style={{padding:'10px'}}>Samsung Repair Services</Card.Header>
      <Card.Description style={{padding:'10px'}}>CPR technicians are professionally trained to repair the latest Apple iPhone models. From smaller repairs like cracked screens, broken home buttons, muffled audio and broken charging ports to more complex issues such as broken LCDs, water damage, and jailbreaking, CPR Cell Phone Repair can fix your broken iPhone.</Card.Description>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button color="primary">LEARN MORE</Button>
        </div>
      </Card.Content>
    </Card.Content>
        </Card>
        
  </Card.Group>
  <Card.Group style={{display:'flex', boxShadow:'none', flex:1, justifyContent:'space-around', paddingTop:'20px'}}>
      <Card style={{ boxShadow:'none',}}>
      <Image src={ipadrepairservices} height="40px" wrapped ui={false} />

      <Card.Content>
      <Card.Header style={{padding:'10px'}}>iPad Repair Services</Card.Header>
      <Card.Description style={{padding:'10px'}}>CPR technicians are professionally trained to repair the latest Apple iPhone models. From smaller repairs like cracked screens, broken home buttons, muffled audio and broken charging ports to more complex issues such as broken LCDs, water damage, and jailbreaking, CPR Cell Phone Repair can fix your broken iPhone.</Card.Description>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button color="primary">LEARN MORE</Button>
        </div>
      </Card.Content>
    </Card.Content>
        </Card>
        <Card style={{  boxShadow:'none'}}>
      <Image src={ipadrepairservices} wrapped ui={false} />

      <Card.Content>
      <Card.Header style={{padding:'10px'}}>Tablet Repair Services</Card.Header>
      <Card.Description style={{padding:'10px'}}>CPR technicians are professionally trained to repair the latest Apple iPhone models. From smaller repairs like cracked screens, broken home buttons, muffled audio and broken charging ports to more complex issues such as broken LCDs, water damage, and jailbreaking, CPR Cell Phone Repair can fix your broken iPhone.</Card.Description>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button color="primary">LEARN MORE</Button>
        </div>
      </Card.Content>
    </Card.Content>
        </Card>
        <Card style={{boxShadow:'none'}}>
      <Image src={ipadrepairservices} wrapped ui={false} />

      <Card.Content>
      <Card.Header style={{padding:'10px'}}>Laptop Repair Services</Card.Header>
      <Card.Description style={{padding:'10px'}}>CPR technicians are professionally trained to repair the latest Apple iPhone models. From smaller repairs like cracked screens, broken home buttons, muffled audio and broken charging ports to more complex issues such as broken LCDs, water damage, and jailbreaking, CPR Cell Phone Repair can fix your broken iPhone.</Card.Description>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button color="primary">LEARN MORE</Button>
        </div>
      </Card.Content>
    </Card.Content>
        </Card>
        
  </Card.Group>
      </div>
    </Layout>
  )
}

export default Cart
