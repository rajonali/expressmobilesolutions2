import React, { useState } from 'react'

import { useShoppingCart } from 'use-shopping-cart'

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: '#4b00a1',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
    cartDetails,
    decrementItem,
    incrementItem,
    removeItem
  
  } = useShoppingCart()




  const cart = []
  // Note: Object.keys().map() takes 2x as long as a for-in loop
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]

    // all of your basic product data still exists (i.e. name, image, price)
    cart.push(
      <article>
        {/* image here */}
        {/* name here */}
        {/* formatted total price of that item */}
        <p>Line total: {cartEntry.formattedValue}</p>

        {/* What if we want to remove one of the item... or add one */}
        <button
          onClick={() => decrementItem(cartEntry.sku)}
          aria-label={`Remove one ${cartEntry.name} from your cart`}
        >
          -
        </button>
        <p>Quantity: {cartEntry.quantity}</p>
        <button
          onClick={() => incrementItem(cartEntry.sku)}
          aria-label={`Add one ${cartEntry.name} to your cart`}
        >
          +
        </button>

        {/* What if we don't want this product at all */}
        <button
          onClick={() => removeItem(cartEntry.sku)}
          aria-label={`Remove all ${cartEntry.name} from your cart`}
        >
          Remove
        </button>
      </article>
    )
  }



  return (
    <div style={{paddingBottom:'50px'}}>
      <div>
      {cart}
      </div>  
      <p>Number of Items: {cartCount}</p>
      <p>Total: {formattedTotalPrice}</p>

      {/* Redirects the user to Stripe */}
      <button
        style={buttonStyles}
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? 'Loading...' : 'Checkout'}
      </button>
      <button style={buttonStyles} onClick={clearCart}>
        Clear cart
      </button>
    </div>
  )
}

export default Cart

