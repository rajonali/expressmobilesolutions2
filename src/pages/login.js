/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */

import React, { useState, useEffect, useContext } from 'react'
import { navigate } from 'gatsby'
import { Header, Form, Input, Button, Segment, Message } from 'semantic-ui-react'
import SEO from '../components/SEO'
import { login } from '../../lib/moltin'
import AuthContext from '../components/Context/AuthContext'
import Layout from '../components/Layout'
import useForm from '../components/Hooks/useForm'
import firebase from "gatsby-plugin-firebase"
import { signInWithEmailAndPassword } from '../firebase/auth'

const LoginPage = ({ location }) => {

  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState([])

  const { token, updateToken, user, setUser} = useContext(AuthContext)


  const formLogin = () => {



    setLoading(true)
    signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
      // Signed in
      setUser(userCredential)
      updateToken(JSON.parse(JSON.stringify(userCredential)).user.stsTokenManager.refreshToken)
      navigate('/myaccount/')


      // ...
    })
  .catch((e) => {
    console.log(e)
    setLoading(false)
    setApiError(e.errors || e)
  });


  }




useEffect(() => {
  if(user) {
    navigate('/myaccount')
  }

}, [user])




const { values, handleChange, handleSubmit, errors } = useForm(
  formLogin,
  validate,
)

const handleErrors = errors => {
  if (!Array.isArray(errors) && !errors.length > 0) {
    return (
      <Message
        error
        header="Sorry"
        content="Please check your login details and try again."
      />
    )
  }
  return errors.map(e => (
    <Message error header={e.title} content={e.detail} key={e.status} />
  ))
}
return (
  <Layout location={location}>
    <div style={{ padding: '100px' }}>
      <SEO title="Login" />
      <Header as="h1">Log in to your account</Header>
      <Form
        onSubmit={handleSubmit}
        loading={loading}
        error={apiError.length !== 0 || Object.entries(errors).length !== 0}
      >
        {apiError.length !== 0 ? handleErrors(errors) : null}
        <Segment>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              fluid
              name="email"
              type="email"
              autoFocus
              onChange={handleChange}
              value={values.email || ''}
            />
          </Form.Field>
          {errors.email && (
            <p data-testid="error" style={{ color: 'red' }}>
              {errors.email}
            </p>
          )}
          <Form.Field>
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              fluid
              name="password"
              type="password"
              value={values.password || ''}
              onChange={handleChange}
            />
          </Form.Field>
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          <Button type="submit" color="#4b00a1">
            Login
          </Button>
        </Segment>
      </Form>
    </div>
  </Layout>
)
}

export default LoginPage

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
  return errors
}
