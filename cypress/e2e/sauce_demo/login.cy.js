describe('Test cases for Login page', () => {

    it('test a correct user and a bad password', () => {
        cy.visit('/')
        cy.hash().should('be.empty')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('badsecret_sauce')
        
        cy.get('#login-button').click()

        cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('contain','Epic sadface: Username and password do not match any user in this service')

        cy.url().should('not.contain', 'https://www.saucedemo.com/inventory.html') 

    });

    it('test a incorrect user and a good password', () => {
        cy.visit('/')
        cy.hash().should('be.empty')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type('incorrect_user')
        cy.get('#password').type('secret_sauce')
        
        cy.get('#login-button').click()

        cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('contain','Epic sadface: Username and password do not match any user in this service')

        cy.url().should('not.contain', 'https://www.saucedemo.com/inventory.html') 

    });

    it('test a correct login for standard_user', () => {
        cy.visit('/')
        cy.hash().should('be.empty')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

    });

    it('test a correct login for locked_out_user', () => {
        cy.visit('/')
        cy.hash().should('be.empty')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        
        cy.get('#login-button').click()

        cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('contain','Epic sadface: Sorry, this user has been locked out.')

        cy.url().should('not.contain', 'https://www.saucedemo.com/inventory.html')

    });

    it('test a correct login for problem_user', () => {
        cy.visit('/')
        cy.hash().should('be.empty')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

    });

    it('test a correct login for performance_glitch_user', () => {
        cy.visit('/')
        cy.hash().should('be.empty')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

    });

    it('test a correct login for error_user', () => {
        cy.visit('/')
        cy.hash().should('be.empty')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type('error_user')
        cy.get('#password').type('secret_sauce')
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

    });

    it('test a correct login for visual_user', () => {
        cy.visit('/')
        cy.hash().should('be.empty')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type('visual_user')
        cy.get('#password').type('secret_sauce')
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

    });

})