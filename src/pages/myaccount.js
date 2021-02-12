import React, {useState, useEffect, useContext} from 'react'
import {navigate} from 'gatsby'
import SEO from '../components/SEO'
import OrderItemList from '../components/OrderItemList'
import Layout from '../components/Layout'
import AuthContext from '../components/Context/AuthContext'

import {getOrders} from '../../lib/moltin'

const MyAccount = ({location}) => {
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const [included, setIncluded] = useState([])
  const [meta, setMeta] = useState({})
  const {token} = useContext(AuthContext)

  useEffect(() => {
    if (!token) {
      navigate('/login/')
    }
  }, [token])

  return (
    <Layout location={location}>
      <SEO title="My Account" />
      <p>:)</p>
    </Layout>
  )
}
export default MyAccount
