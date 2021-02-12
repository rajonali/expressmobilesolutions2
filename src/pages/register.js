/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */

import React, {useState, useContext} from 'react'
import {navigate} from 'gatsby'
import {Header, Form, Input, Button, Segment, Message} from 'semantic-ui-react'
import SEO from '../components/SEO'
import AuthContext from '../components/Context/AuthContext'
import {register} from '../../lib/moltin'
import Layout from '../components/Layout'
import useForm from '../components/Hooks/useForm'
import firebase from "gatsby-plugin-firebase"


const Register = ({location}) => {
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])
  const {updateToken} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [uid, setUID] = useState('')
  const [token, setToken] = useState('')

  const formRegister = () => {
    setLoading(true)


    firebase
         .auth()
         .createUserWithEmailAndPassword(values.email, values.password)
         .then((res) => {
           console.log(res['user']['refreshToken']);
           localStorage.setItem('customerToken', res['user']['refreshToken'])
           localStorage.setItem('mcustomer', res['user']['uid'])   
           updateToken()
           navigate('/myaccount/')
         })
         .catch((error) => {
            console.log(error)
            console.log(error)
            setLoading(false)
            setApiError(error.errors || error)
    
         });

    
  
  }

  const {values, handleChange, handleSubmit, errors} = useForm(
    formRegister,
    validate,
  )

  const handleErrors = errors => {
    if (!Array.isArray(errors) && !errors.length > 0) {
      return (
        <Message error header="Sorry" content="Cannot register at this time." />
      )
    }
    return errors.map(e => (
      <Message error header={e.title} content={e.detail} key={e.status} />
    ))
  }

  return (
    <Layout location={location}>
            <div style={{padding:'100px'}}>

      <SEO title="Register" />
      <Header as="h1">Create an account</Header>
      <Form onSubmit={handleSubmit} loading={loading} error={!!errors}>
        {apiError.length !== 0 ? handleErrors(errors) : null}
        <Segment>
          <Form.Field>
            <label htmlFor="name">Name</label>
            <Input
              id="name"
              fluid
              name="name"
              autoFocus
              onChange={handleChange}
              value={values.name || ''}
            />
          </Form.Field>
          {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

          <Form.Field>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              fluid
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email || ''}
            />
          </Form.Field>
          {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
          <Form.Field>
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              fluid
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password || ''}
            />
          </Form.Field>
          {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
          <Button type="submit" color="#4b00a1">
            Register
          </Button>
        </Segment>
      </Form>
      </div>
    </Layout>
  )
}

export default Register

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  }
  if (!values.name) {
    errors.name = 'A name is required'
  }
  return errors
}
