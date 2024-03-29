import React, { useState, useContext, useEffect, componentDidMount } from 'react'
import CartItemList from '../components/CartItemList'
import CartSummary from '../components/CartSummary'
import CartContext from '../components/Context/CartContext'


import { Location } from '@reach/router';

const Moltin = require('../../lib/moltin')

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Skus from '../components/Products/Skus'
import CartOverview from '../components/CartOverview'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe("pk_test_51IGhToG3l6YaloTgAakGvMYVjrveEMs7oFJF7akytn6gyne2Lq0GDYmAYxh0iqFMPIclDMwQ1PtGqhq26WvwHYGw001BbrEVn0")

const CartExample = ({ location }) => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const [completed, setCompleted] = useState(false)
    const [meta, setMeta] = useState({})
    const [cartId, setCartId] = useState({})
    const { updateCartCount } = useContext(CartContext)

    const [isBrowser, setIsBrowser] = useState(false);




    async function getCartItems() {
        const cartIdLocal = await localStorage.getItem('mcart')
        console.log(cartIdLocal)
        await Moltin.getCartItems(cartIdLocal).then(({ data, meta }) => {
            console.log(data)
            setItems(data)
            setCartId(cartIdLocal)
            setMeta(meta)
            setLoading(false)
        })
    }

    useEffect(() => {
        getCartItems();
        setIsBrowser(typeof window !== "undefined");

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



    return (<Layout location={location}>
        <SEO title="Cart Example" />
        <h1 style={{ paddingTop: '60px' }}>Cart Overview</h1>
        <CartProvider
            mode="client-only"
            stripe={stripePromise}
            successUrl={isBrowser && `${location.origin}/page-2/`}
            cancelUrl={isBrowser && `${location.origin}/`}
            currency="USD"
            allowedCountries={['US', 'GB', 'CA']}
            billingAddressCollection={true}
        >
            <CartOverview />
        </CartProvider>
    </Layout>
    )
}

export default CartExample
