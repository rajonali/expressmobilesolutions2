import React, { useState, useEffect } from 'react'
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
import greenhuebg from '../images/greenhuebg.png'
import iconseries from '../images/4icons.png'
import deviceprotection from '../images/protection.png'
import buyselltradebanner from '../images/buyselltradebanner.png'
import techsolutions from '../images/techsolutions.png'
import rugged from '../images/rugged.jpg'
import liquid from '../images/liquid.png'
import tempered from '../images/tempered.jpg'
import slim from '../images/slim.png'

const StoreIndex = ({ location }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, [])


  const stripePromise = loadStripe("pk_test_51IGhToG3l6YaloTgAakGvMYVjrveEMs7oFJF7akytn6gyne2Lq0GDYmAYxh0iqFMPIclDMwQ1PtGqhq26WvwHYGw001BbrEVn0")


  const data = useStaticQuery(graphql`
    
  query IndexQuery {

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
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', textAlign: 'left', lineHeight: '1.5', backgroundColor: '#4b00a1', color: 'white' }}>
            <Image src={banner} />   </div>

        </Header.Content>
      </Header>

      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h2 style={{ padding: '50px' }}>      Repair your device today at Express Mobile Solutions</h2>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image width="150" height="150" src={phone} style={{}} />
              <h2>iPhone Repairs</h2>
              <p>
                Are you in need of an iPhone repair in Baton Rouge, LA? You’re in luck because at Cell Phone Repair Baton Rouge Towne Center, we have seen and fixed it all!</p>
            </Grid.Column>
            <Grid.Column style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image width="150" height="150" src={android} />
              <h2>Smartphone Repairs</h2>

              <p>

                From cracked screens to broken charging ports and more, Cell Phone Repair Baton Rouge Towne Center is your one-stop smartphone repair shop in Baton Rouge, LA.</p>      </Grid.Column>
            <Grid.Column style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image width="150" height="150" src={ipad} />
              <h2>iPad Repairs</h2>

              <p>Is a damaged iPad slowing you down? Contact CPR Baton Rouge, LA! Our repair experts will have your iPad repaired in before you know it.</p>      </Grid.Column>

          </Grid.Row>

          <Grid.Row>
            <Grid.Column style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image width="150" height="150" src={tablet} />
              <h2>Tablet Repairs</h2>

              <p>Whether you have a tablet by Microsoft, Samsung, Google, or any other brand, you can depend on CPR technicians for all of your tablet repair needs!</p>      </Grid.Column>
            <Grid.Column style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image width="150" height="150" src={mac} />
              <h2>Mac Repairs</h2>

              <p>Are you looking for Mac repair services in Baton Rouge, LA? Rely on the professionals at CPR for all of your Mac repair needs!</p>      </Grid.Column>
            <Grid.Column style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image width="150" height="150" src={laptop} />
              <h2>Laptop Repairs</h2>

              <p>If your laptop is moving at a snail’s pace, visit Cell Phone Repair Baton Rouge Towne Center! We provide laptop repair, tune-up and virus removal services for all of the most popular laptop brands.</p>      </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="lowpricebanner">
        <Image src={lowpricebanner} />
      </div>

      <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <Image src={buyselltradebanner} /> 
      </div>
      <div className="popular_products" style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'space-between' }}>
        <div style={{ marginBottom: '40px', borderBottom: "5px solid #b8ff00 ", backgroundColor: 'white', paddingBottom: '10px', padding: '20px', width: '100%', alignItem: 'center', justifyContent: 'center', display: 'flex', color: 'black', flex: 1 }}> <h1 style={{ fontFamily: 'Helvetica' }}><strong>POPULAR PRODUCTS</strong></h1></div>
        <CartProvider mode="client-only"
          stripe={stripePromise}
          successUrl={isBrowser && `${window.location.origin}/page-2/`}
          cancelUrl={isBrowser && `${window.location.origin}/`}
          currency="USD"
          allowedCountries={['US', 'GB', 'CA']}
          billingAddressCollection={true}
        >

          <Skus />
        </CartProvider>

      </div>


      <div class="lowpricebanner">
        <div class="overlayy" style={{ display: 'flex', flex: 1, zIndex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <div>
          
          </div>
          
          <div style={{ display: 'flex', position: 'absolute', flex: 1, zIndex: 3 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}> 
          <div style={{padding:'30px',}}>
          
          <div style={{padding:'10px',}}>
          <div class="box">
    <div class="container">

      <h1 style={{textAlign:'center'}}>Our Services</h1>
     	<div class="row">
			 
			    <div style={{padding:'10px'}} class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
					<div class="card text-center">
                        <div class="card-header">
                        <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                        <div class="title">
							<h4>Instagram</h4>
						</div>

                        </div>
                        
						<div class="card-body">
							<span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
              <a href="#">Learn More</a>

						</div>
                        
                        
					 </div>
				</div>	 
				
        <div style={{padding:'10px'}} class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
               <div class="card text-center">
                             <div class="card-header">
                             <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                             <div class="title">
                   <h4>Instagram</h4>
                 </div>
     
                             </div>
                             
                 <div class="card-body">
                   <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                   <a href="#">Learn More</a>
     
                 </div>
                             
                             
                </div>
             </div>	 
             
				
             <div style={{padding:'10px'}} class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
               <div class="card text-center">
                             <div class="card-header">
                             <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                             <div class="title">
                   <h4>Instagram</h4>
                 </div>
     
                             </div>
                             
                 <div class="card-body">
                   <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                   <a href="#">Learn More</a>
     
                 </div>
                             
                             
                </div>
             </div>	 				
             <div style={{padding:'10px'}} class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
               <div class="card text-center">
                             <div class="card-header">
                             <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                             <div class="title">
                   <h4>Instagram</h4>
                 </div>
     
                             </div>
                             
                 <div class="card-body">
                   <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                   <a href="#">Learn More</a>
     
                 </div>
                             
                             
                </div>
             </div>	 				
             <div style={{padding:'10px'}} class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
               <div class="card text-center">
                             <div class="card-header">
                             <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                             <div class="title">
                   <h4>Instagram</h4>
                 </div>
     
                             </div>
                             
                 <div class="card-body">
                   <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                   <a href="#">Learn More</a>
     
                 </div>
                             
                             
                </div>
             </div>	             
             <div style={{padding:'10px'}} class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
               
               <div class="card text-center">
                             <div class="card-header">
                             <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                             <div class="title">
                   <h4>Instagram</h4>
                 </div>
     
                             </div>
                             
                 <div class="card-body">
                   <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                   <a href="#">Learn More</a>
     
                 </div>
                             
                             
                </div>
             </div>	 
		</div>		
    </div>
</div></div>
</div>

<div style={{padding:'30px',}}>

</div>
</div></div>
          <Image src={greenhuebg} style={{ display: 'flex', flex: 1, zIndex: 2,}} height="1080px" />

        </div>
      </div>


      <div class="deviceprotection">
        <div style={{ marginBottom: '40px', borderBottom: "5px solid #b8ff00 ", backgroundColor: 'white', paddingBottom: '10px', padding: '20px', width: '100%', alignItem: 'center', justifyContent: 'center', display: 'flex', color: 'black', flex: 1 }}> <h1 style={{ fontFamily: 'Helvetica' }}><strong>YOUR DEVICE NEEDS PROTECTION</strong></h1></div>

        <div class="row">
  <div class="col">
    <div class="card h-100 py-2">
    <img class="card-img-top" src={rugged} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Rugged Protection</h5>
        <p class="card-text">Whether you are going hiking or simply need military grade protection. We got you covered.</p>
        <a href="#" class="btn btn-primary">See Cases</a>
      </div>
    </div>
  </div>
  <div class="col">
  <div class="card h-100 py-2">
    <img class="card-img-top" src={liquid} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Liquid Protection</h5>
        <p class="card-text">Whether you are going fishing or giving your goldfish a bath. We got you covered.</p>
        <a href="#" class="btn btn-primary">See Cases</a>
      </div>
    </div>
      </div>
      <div class="col">
  <div class="card h-100 py-2">
    <img class="card-img-top" src={slim} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Slim Protection</h5>
        <p class="card-text">Tired of them thick otty boxes making you look caked up when you put it in your back pocket. We got you covered.</p>
        <a href="#" class="btn btn-primary">See Cases</a>
      </div>
    </div>
      </div>
      <div class="col">
  <div class="card h-100 py-2">
    <img class="card-img-top" src={tempered} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Tempered Protection</h5>
        <p class="card-text">Compliment your device with tempered glass. Impact resistance, anti-scratch, and anti-chip.</p>
        <a href="#" class="btn btn-primary">See Cases</a>
      </div>
    </div>
      </div>

</div>

      


      </div>
      <div class="techsolutions" >
      <Image  src={techsolutions} />
</div>
      <div className="store_information" style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: '50px', alignItems: 'center' }}>
        <div style={{ marginBottom: '40px', borderBottom: "5px solid #b8ff00 ", backgroundColor: 'white', paddingBottom: '10px', padding: '20px', width: '100%', alignItem: 'center', justifyContent: 'center', display: 'flex', color: 'black', flex: 1 }}> <h1 style={{ fontFamily: 'Helvetica' }}><strong>STORE INFORMATION</strong></h1></div>
      </div>

      <div className="map" style={{ display: 'flex', flex: 1, flexDirection: 'row', paddingTop: '30px', justifyContent: 'space-between' }}>
        <Image style={{}} height="400px" width="650px" src={hours} />
      </div>
      <div className="waterdamage">
        <Image src={waterdamage} />
      </div>
    </Layout>
  )
}

export default StoreIndex
