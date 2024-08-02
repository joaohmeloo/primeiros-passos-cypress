import userData from '../fixtures/userData.json'

class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']"
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(userData.userSuccess.username)
        cy.get(this.selectorsList().passwordField).type(userData.userSuccess.password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage