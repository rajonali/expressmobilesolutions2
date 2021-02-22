import '@testing-library/cypress/add-commands'
import React, {useState, useEffect} from 'react'

Cypress.Commands.add('assertRoute', route => {
  cy.url().should('equal', `${window.location.origin}${route}`)
})
