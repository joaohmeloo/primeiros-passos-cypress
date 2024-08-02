class MyInfoPage {
    selectorsList(){
        const selectors = {   
                // myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
                firstNameField: "[name='firstName']",
                lastNameField: "[name='lastName']",
                genericField: ".oxd-input--active",
                placeHoldersDate: ".oxd-date-input",
                dateCloseButton: ".--close",
                selectTextButton:".ox'd-select-text",
                saveButton: ".oxd-button--secondary",
                selectorBox: "'.oxd-select-text-input"
        }

        return selectors
    }

    accessMyInfoPage(){
        cy.get(this.selectorsList().myInfoButton).click()
    }

    fillMyInfoInformation(){
     cy.get(this.selectorsList().firstNameField).clear().type("Teste de escrita")
     cy.get(this.selectorsList().lastNameField).clear().type("teste last name")
     cy.get(this.selectorsList().genericField).eq(3).clear().type("Emploree ID")
     cy.get(this.selectorsList().genericField).eq(4).clear().type("Other ID")    
     cy.get(this.selectorsList().genericField).eq(5).clear().type("Drivers License")
     cy.get(this.selectorsList().genericField).eq(6).clear().type("3077492")
     cy.get(this.selectorsList().genericField).eq(7).clear().type("2024/07/29")
     cy.get(this.selectorsList().dateCloseButton).click()
    }

}

export default MyInfoPage