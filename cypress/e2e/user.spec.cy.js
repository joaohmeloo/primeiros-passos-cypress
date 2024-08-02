import userData from '../fixtures/userData.json'
import selectorsList from '../fixtures/selectorsList.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()

describe('Orange GRM Tests', () => {
  it.only ('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser()
    dashboardPage.ckeckDashboardPage()
    menuPage.accessMyInfoPage() 
    myInfoPage.fillMyInfoInformation()
        
    // cy.get('.oxd-select-text-input').eq(0).click()
    // cy.get(':nth-child(21) > span').click()
    // cy.get(selectorsList.saveButton).eq(0).click({ force: true })
    //cy.get('.oxd-button--medium').eq(0).click()''''
    // cy.get('body').should('contain', 'Success')

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