import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'
import footer from '../../css_overrides/footer.css'
const twitterLink = (
  <a href="https://instagram.com/expressmobilesolutions" style={{color:'#b8ff00'}} alt="instagram link">
    Instagram
  </a>
)
const facebookLink = (
  <a href="https://facebook.com/" style={{color:'#b8ff00'}} alt="facebook link">
    Facebook
  </a>
)
const emailLink = (
  <a href="mailto:exp@exp.com" style={{color:'#b8ff00'}} alt="email link">
    Email
  </a>
)

const Footer = () => (
  <Segment
    vertical
    style={{
      marginBottom: '0px',
      width:'100%', 
      padding: '4em 0em',
      borderTop: '1px solid #f2f2f2',
      backgroundColor:'#4b00a1',
color:'white',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header style={{color:'white'}} as="h4" content="Repair Services" />
            <List>
              <List.Item style={{color:'#b8ff00'}} as={Link} to="/privacy/">
                Smartphone Repair
              </List.Item>
              <List.Item style={{color:'#b8ff00'}} as={Link} to="/terms/">
                iPhone Repair
              </List.Item>
              <List.Item style={{color:'#b8ff00'}} as={Link} to="/terms/">
                iPad Repair
              </List.Item>
              <List.Item style={{color:'#b8ff00'}} as={Link} to="/terms/">
                Tablet Repair
              </List.Item>
              <List.Item style={{color:'#b8ff00'}} as={Link} to="/terms/">
                PC Repair
              </List.Item>
              <List.Item style={{color:'#b8ff00'}} as={Link} to="/terms/">
                Mac Repair
              </List.Item>



            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header style={{color:'white'}} as="h4" content=" Cell Phone Repair Express Mobile Solutions " />
            <List>
              <List.Item style={{color:'#b8ff00'}} as={Link} to="/">
              Free Repair Estimate
              </List.Item>
              <List.Item style={{color:'#b8ff00'}} as={Link} to="/">
              Mail-In Repairs
              </List.Item>
              <List.Item style={{color:'#b8ff00'}} as={Link} to="/">
              Repair Status
              </List.Item>

            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header style={{color:'white'}} as="h4"> © 2021 Express Mobile Solutions Baton Rouge </Header>
            <p style={{color:'white'}}>
            Express Mobile Solutions
<br />
3162 Plank RD
<br />
Baton Rouge, LA 70805
<br />
225-356-7363
            </p>
            <List horizontal style={{display: 'flex'}}>
              <List.Item
                icon="twitter"
                style={{display: 'flex'}}
                content={twitterLink}
              />
              <List.Item
                icon="facebook"
                style={{display: 'flex'}}
                content={facebookLink}
              />
              <List.Item
                icon="mail"
                style={{display: 'flex'}}
                content={emailLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
