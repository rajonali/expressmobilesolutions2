/* eslint-disable camelcase */
import React, { useState, useContext, useEffect } from 'react'
import SEO from '../components/SEO'
import CartItemList from '../components/CartItemList'
import CartSummary from '../components/CartSummary'
import CartContext from '../components/Context/CartContext'
import Layout from '../components/Layout'
import Skus from '../components/Products/Skus'
import allproducts from '../images/allproducts.png'
import { Input, Label, Checkbox, Image, Card, Rating, Container, Button } from 'semantic-ui-react'
import '../css_overrides/shopall.css'
import { CartProvider } from 'use-shopping-cart'
import { loadStripe } from '@stripe/stripe-js'


const stripePromise = loadStripe("pk_test_51IGhToG3l6YaloTgAakGvMYVjrveEMs7oFJF7akytn6gyne2Lq0GDYmAYxh0iqFMPIclDMwQ1PtGqhq26WvwHYGw001BbrEVn0")



const Moltin = require('../../lib/moltin')

const Cart = ({ location }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [completed, setCompleted] = useState(false)
  const [meta, setMeta] = useState({})
  const [cartId, setCartId] = useState({})
  const { updateCartCount } = useContext(CartContext)
  const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(typeof window !== "undefined");
    }, [])


  async function getCartItems() {
    const cartIdLocal = await localStorage.getItem('mcart')
    await Moltin.getCartItems(cartIdLocal).then(({ data, meta }) => {
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

    const customer = customerId || { name, email }

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
        data: { id },
      } = await Moltin.checkoutCart(cartId, customer, address)
      await Moltin.payForOrder(id, token, email)
      setCompleted(true)
      updateCartCount(0, cartId)
    } catch (e) {
      console.log(e)
    }
  }

  const handleRemoveFromCart = itemId => {
    Moltin.removeFromCart(itemId, cartId).then(({ data, meta }) => {
      const total = data.reduce((a, c) => a + c.quantity, 0)
      updateCartCount(total, cartId)
      setItems(data)
      setMeta(meta)
    })
  }

  const rest = { completed, items, loading, cartId }

  return (
    <Layout location={location}>
      <div style={{ paddingLeft: '100px', paddingTop: '100px', paddingBottom: '100px' }}>

        <SEO title="Cart" />

        <div style={{ flex: 1, minWidth: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <div style={{ flex: 0.25, display: 'flex', paddingRight: '20px', }}>
            <Card style={{ flex: 1, display: 'flex', height: '800px', padding: '20px' }}>

              <Card.Header><h2 style={{ borderBottom: '5px solid rgb(184, 255, 0)', textAlign: 'left', width: '75%' }}>Filter Search</h2></Card.Header>
              <h3>Prices</h3>


              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                <Input labelPosition='right' type='number' placeholder='Amount' style={{ width: '50%' }}>    <Label>$</Label><input /></Input>

                <Input labelPosition='right' type='number' placeholder='Amount' style={{ width: '50%', }}>    <Label>$</Label><input /></Input>
              </div>

              <h3>Avg. Customer Review</h3>


              <div style={{ display: 'flex', width: '100%', }}>
                <Rating icon='star' size="large" defaultRating={4} maxRating={4} style={{ display: 'flex' }} />


              </div>


              <h3>Brands</h3>


              <div style={{ display: 'flex', flex: 0.10, justifyContent: 'space-around', flexDirection: 'column', alignItems: 'space-around' }}>
                <Checkbox label='Apple' />
                <Checkbox label='Google' />
                <Checkbox label='LG' />
                <Checkbox label='Samsung' />


              </div>


              <h3>Department</h3>


              <div style={{ display: 'flex', flex: 0.10, justifyContent: 'space-around', flexDirection: 'column', alignItems: 'space-around' }}>
                <Checkbox label='Smartphones' />
                <Checkbox label='Accessories' />
                <Checkbox label='Chargers' />
                <Checkbox label='Batteries' />


              </div>


              <h3>Condition</h3>


              <div style={{ display: 'flex', flex: 0.10, justifyContent: 'space-around', flexDirection: 'column', alignItems: 'space-around' }}>
                <Checkbox label='New' />
                <Checkbox label='Used' />



              </div>




            </Card>
          </div>
          <div style={{ flex: 0.75, display: 'flex', backgroundColor: 'blue' }}>
            <Card style={{ width: '100%' }}>
              <CartProvider mode="client-only"
                stripe={stripePromise}
                successUrl={ isBrowser && `${window.location.origin}/page-2/`}
                cancelUrl={ isBrowser && `${window.location.origin}/`}
                currency="USD"
                allowedCountries={['US', 'GB', 'CA']}
                billingAddressCollection={true}
              >

                <Skus />
              </CartProvider>

            </Card>

          </div>
        </div>


      </div>
    </Layout>
  )
}

export default Cart
