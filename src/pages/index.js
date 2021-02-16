import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import get from 'lodash/get'
import { Image, Header, Grid, Card } from 'semantic-ui-react'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'
import logo from '../images/location.png'
import banner from '../images/banner.png'
import map from '../images/map.png'
import Layout from '../components/Layout'
import '../css_overrides/index.css'
import phone from '../images/phone.svg'
import tablet from '../images/tablet.svg'
import ipad from '../images/ipad.svg'
import android from '../images/android.svg'
import laptop from '../images/laptop.svg'
import mac from '../images/mac.svg'
import lowpricebanner from '../images/lowpricebanner.png'
import waterdamage from '../images/waterdamage.png'
import hours from '../images/hours.png'
import divider from '../images/divider.png'
import Skus from '../components/Products/Skus'
import { CartProvider } from 'use-shopping-cart'
import { loadStripe } from '@stripe/stripe-js'



const StoreIndex = ({ location }) => {

  const stripePromise = loadStripe("pk_test_51IGhToG3l6YaloTgAakGvMYVjrveEMs7oFJF7akytn6gyne2Lq0GDYmAYxh0iqFMPIclDMwQ1PtGqhq26WvwHYGw001BbrEVn0")


  const data = useStaticQuery(graphql`
    
  query IndexQuery {

    staticMap {
      childFile {
    childImageSharp {
      fixed(width: 200, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }        }
  }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)




  const siteTitle = get(data, 'site.siteMetadata.title')
  const products = get(data, 'allMoltinProduct.edges')
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '100%',
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >

          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', textAlign: 'left', lineHeight: '1.5', backgroundColor: '#4b00a1', color: 'white' }}>
            <Image src={banner} />   </div>

        </Header.Content>
      </Header>

      <div style={{display:'flex', flex:1, alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
<h2 style={{padding:'50px'}}>      Repair your device today at Express Mobile Solutions</h2>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column style={{display:'flex', flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
              <Image width="150" height="150" src={phone} style={{}} />
              <h2>iPhone Repairs</h2>
              <p>
Are you in need of an iPhone repair in Baton Rouge, LA? You’re in luck because at Cell Phone Repair Baton Rouge Towne Center, we have seen and fixed it all!</p>
            </Grid.Column>
            <Grid.Column style={{display:'flex', flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            <Image width="150" height="150" src={android} />
            <h2>Smartphone Repairs</h2>

              <p>

From cracked screens to broken charging ports and more, Cell Phone Repair Baton Rouge Towne Center is your one-stop smartphone repair shop in Baton Rouge, LA.</p>      </Grid.Column>
<Grid.Column style={{display:'flex', flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            <Image width="150" height="150" src={ipad} />
            <h2>iPad Repairs</h2>

              <p>Is a damaged iPad slowing you down? Contact CPR Baton Rouge, LA! Our repair experts will have your iPad repaired in before you know it.</p>      </Grid.Column>

          </Grid.Row>

          <Grid.Row>
          <Grid.Column style={{display:'flex', flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            <Image width="150" height="150" src={tablet} />
            <h2>Tablet Repairs</h2>

              <p>Whether you have a tablet by Microsoft, Samsung, Google, or any other brand, you can depend on CPR technicians for all of your tablet repair needs!</p>      </Grid.Column>
              <Grid.Column style={{display:'flex', flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            <Image width="150" height="150" src={mac} />
            <h2>Mac Repairs</h2>

              <p>Are you looking for Mac repair services in Baton Rouge, LA? Rely on the professionals at CPR for all of your Mac repair needs!</p>      </Grid.Column>
              <Grid.Column style={{display:'flex', flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
            <Image width="150" height="150" src={laptop} />
            <h2>Laptop Repairs</h2>

              <p>If your laptop is moving at a snail’s pace, visit Cell Phone Repair Baton Rouge Towne Center! We provide laptop repair, tune-up and virus removal services for all of the most popular laptop brands.</p>      </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="lowpricebanner">
        <Image src={lowpricebanner} />
      </div>
      <div className="popular_products" style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginBottom: '40px', borderBottom: "5px solid #b8ff00 ", backgroundColor: 'white', paddingBottom: '10px', padding: '20px', width: '100%', alignItem: 'center', justifyContent: 'center', display: 'flex', color: 'black', flex: 1 }}> <h1 style={{ fontFamily: 'Helvetica' }}><strong>POPULAR PRODUCTS</strong></h1></div>
       <CartProvider mode="client-only"
       stripe={stripePromise}
       successUrl={`${window.location.origin}/page-2/`}
       cancelUrl={`${window.location.origin}/`}
       currency="USD"
       allowedCountries={['US', 'GB', 'CA']}
       billingAddressCollection={true}
   >

        <Skus />
        </CartProvider>

      </div>


      <div className="store_information" style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop:'50px', alignItems: 'center' }}>
        <div style={{ marginBottom: '40px', borderBottom: "5px solid #b8ff00 ", backgroundColor: 'white', paddingBottom: '10px', padding: '20px', width: '100%', alignItem: 'center', justifyContent: 'center', display: 'flex', color: 'black', flex: 1 }}> <h1 style={{ fontFamily: 'Helvetica' }}><strong>STORE INFORMATION</strong></h1></div>
      </div>

      <div className="map" style={{display:'flex', flex:1, flexDirection:'row',paddingTop:'30px', justifyContent:'space-between'}}>
      <Image style={{ }} height="400px" width="500px" src={"https://www.google.com"+ data.staticMap.childFile.publicURL} />
      <Image style={{}} height="400px" width="650px" src={hours} />  
      </div>
      <div className="waterdamage">
      <Image src={waterdamage} />
      </div>
    </Layout>
  )
}

export default StoreIndex
