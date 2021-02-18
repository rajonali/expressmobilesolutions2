import React, {useState, useEffect, useContext} from 'react'
import {navigate} from 'gatsby'
import SEO from '../components/SEO'
import OrderItemList from '../components/OrderItemList'
import Layout from '../components/Layout'
import AuthContext from '../components/Context/AuthContext'
import firebase from "gatsby-plugin-firebase"
import {getOrders} from '../../lib/moltin'
import AddItemTest from '../components/addItemTest'
import {Container,Label, Button, Input, Form} from 'semantic-ui-react'

const MyAccount = ({location}) => {
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const [included, setIncluded] = useState([])
  const [meta, setMeta] = useState({})



  const {token, user} = useContext(AuthContext)
  

  
  
  const [displayName, setDisplayName] = useState('N/A')
  const [email, setEmail] = useState('N/A')

  
  useEffect(() => {
    if (!user) {
      navigate('/login/')
    }
    else {
    setEmail(firebase.auth().currentUser.email)
    setDisplayName(firebase.auth().currentUser.displayName)

    }
  }, [user])


  return (
    <Layout location={location}>
      <SEO title="My Account" />
      <Container style={{padding:'100px'}}>
      <Form>
    <Form.Field>
      <label>Display Name</label>
      <input placeholder={displayName} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder={displayName} />
    </Form.Field>
    <div style={{display:'flex', flexDirection:'row'}}>
      <Button>Save Changes</Button>
      <Button>Change Password</Button>
      </div>

    </Form>

      </Container>
    </Layout>
  )
}
export default MyAccount
