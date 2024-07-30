import userData from '../fixtures/userData.json'
import selectorsList from '../fixtures/selectorsList.json'

describe('Orange GRM Tests', () => {



  it.only ('User Info Update - Success', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    

    cy.get(selectorsList.firstNameField).clear().type("Teste de escrita")
    cy.get(selectorsList.lastNameField).clear().type("teste last name")
    cy.get(selectorsList.genericField).eq(3).clear().type("Emploree ID")
    cy.get(selectorsList.genericField).eq(4).clear().type("Other ID")    
    cy.get(selectorsList.genericField).eq(5).clear().type("Drivers License")
    cy.get(selectorsList.genericField).eq(6).clear().type("2024/07/29")
    cy.get(selectorsList.dateCloseButton).click()
    
    //cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('.oxd-button--medium').eq(0).click()
    cy.get('body').should('contain', 'Success')

  })

  it('Login - Fail (Wrong password)', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials')
  })
}

)