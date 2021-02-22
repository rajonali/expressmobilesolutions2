
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
import { CartOverview } from './CartOverview'
import React, { useState, useContext, useEffect, componentDidMount } from 'react'


const StripeCartProviderParent = () => {

    const stripePromise = loadStripe("pk_test_51IGhToG3l6YaloTgAakGvMYVjrveEMs7oFJF7akytn6gyne2Lq0GDYmAYxh0iqFMPIclDMwQ1PtGqhq26WvwHYGw001BbrEVn0")

    //const isBrowser = () => typeof window !== "undefined"

    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(typeof window !== "undefined");
    }, [])


    return (

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


    )
}
// try with this


export default StripeCartProviderParent