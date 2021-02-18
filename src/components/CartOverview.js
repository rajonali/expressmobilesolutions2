import React, { useState } from 'react'

import { useShoppingCart } from 'use-shopping-cart'
import { Container, Card, Button, Label } from 'semantic-ui-react'


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
      <Card style={{flex:1, display:'flex', width:'100%'}}>
        <div>
                <div style={{display:'flex', flex:1, flexDirection:'row', justifyContent:'space-around'}}>
<div style={{display:'flex',flex:1, maxWidth:'20%', justifyContent:'flex-start', alignItems:'center'}}>
        <img src={cartEntry.image} height={200} width={200} />
        </div>
        <div style={{display:'flex', flex:1, flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
  {cartEntry.name}
</div>

        {/* name here */}
        {/* formatted total price of that item */}
        {/* What if we want to remove one of the item... or add one */}
        <div style={{display:'flex', flex:1, margin:'0px 20px 0px 20px'}}>


          <div style={{display:'flex',flex:1,  flexDirection:'row',justifyContent:'flex-end', }}>

          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Button
        size="large"
          onClick={() => decrementItem(cartEntry.sku)}
          aria-label={`Remove one ${cartEntry.name} from your cart`}
        >
          -
        </Button>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Label style={{margin:'10px'}}>{cartEntry.quantity}</Label>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Button
                size="large"

          onClick={() => incrementItem(cartEntry.sku)}
          aria-label={`Add one ${cartEntry.name} to your cart`}
        >
          +
        </Button>
        </div>
        </div>
        {/* What if we don't want this product at all */}
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Button
                size="large"

        style={{margin:'20px'}}
          onClick={() => removeItem(cartEntry.sku)}
          aria-label={`Remove all ${cartEntry.name} from your cart`}
        >
          Remove
        </Button>
        </div>
        <div style={{display:'flex', flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <p>{cartEntry.formattedValue}</p>

        </div>

        </div>

        </div>
        </div>
      </Card>
    )
  }



  return (
    <div style={{paddingBottom:'50px'}}>
      <div>
      {cart}
      </div>  
      <div style={{flex:1, display:'flex', flexDirection:'row', paddingTop:20, justifyContent:'flex-end',}}>
      <div style={{flexDirection:'column', flex:1, display:'flex',   maxWidth:'25%'}}>
        <div>
      <div style={{display:'flex',  textAlign:'right', margin:0, flexDirection:'row'}}><h3>Quantity: {cartCount}</h3></div>
      </div>
      <div>
      <div style={{display:'flex', margin:0, flexDirection:'row'}}><h2>Total: {formattedTotalPrice}</h2></div>
      </div>
      </div>
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
      {/* Redirects the user to Stripe */}
    
    </div>
  )
}

export default Cart

