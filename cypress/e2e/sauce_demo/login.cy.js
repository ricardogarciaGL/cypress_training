describe('Test cases for Login page', () => {

    beforeEach("load fixture", function () {
        
        cy.fixture("users").then((dataUsers)=>{
            this.dataUsers=dataUsers;
        })

        cy.visit('/')
        cy.hash().should('be.empty')
    });
    

    it('test a correct user and a bad password', function () {
        
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type(this.dataUsers.name_badPass.user)
        cy.get('#password').type(this.dataUsers.name_badPass.pass)
        
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')

        cy.url().should('not.contain', 'https://www.saucedemo.com/inventory.html') 
        
    });

    it('test a incorrect user and a good password', function () {

        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type(this.dataUsers.name_fake.user)
        cy.get('#password').type(this.dataUsers.name_fake.pass)
        
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')

        cy.url().should('not.contain', 'https://www.saucedemo.com/inventory.html') 

    });

    it('test a correct login for standard_user', function () {

        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type(this.dataUsers.name_std.user)
        cy.get('#password').type(this.dataUsers.name_std.pass)
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

        cy.get('.app_logo').should('contain','Swag Labs') //New page headTitle

        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bike Light')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bolt T-Shirt')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Fleece Jacket')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Onesie')
        cy.get('[data-test="inventory-item-name"]').should('contain','Test.allTheThings() T-Shirt (Red)')

    });

    it('test a correct login for locked_out_user', function () {
        
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type(this.dataUsers.name_lck.user)
        cy.get('#password').type(this.dataUsers.name_lck.pass)
        
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should('contain','Epic sadface: Sorry, this user has been locked out.')

        cy.url().should('not.contain', 'https://www.saucedemo.com/inventory.html')

    });

    it('test a correct login for problem_user', function () {
        
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type(this.dataUsers.name_pbl.user)
        cy.get('#password').type(this.dataUsers.name_pbl.pass)
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

        cy.get('.app_logo').should('contain','Swag Labs') //New page headTitle

        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr','src').should('include','/static/media/sl-404.168b1cce.jpg')
        cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').should('have.attr','src').should('include','/static/media/sl-404.168b1cce.jpg')
        cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').should('have.attr','src').should('include','/static/media/sl-404.168b1cce.jpg')
        cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('have.attr','src').should('include','/static/media/sl-404.168b1cce.jpg')
        cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]').should('have.attr','src').should('include','/static/media/sl-404.168b1cce.jpg')
        cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').should('have.attr','src').should('include','/static/media/sl-404.168b1cce.jpg')

    });

    it('test a correct login for performance_glitch_user', function () {
        
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type(this.dataUsers.name_glt.user)
        cy.get('#password').type(this.dataUsers.name_glt.pass)
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bike Light')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bolt T-Shirt')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Fleece Jacket')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Onesie')
        cy.get('[data-test="inventory-item-name"]').should('contain','Test.allTheThings() T-Shirt (Red)')

    });

    it('test a correct login for error_user', function () {
        
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type(this.dataUsers.name_err.user)
        cy.get('#password').type(this.dataUsers.name_err.pass)
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bike Light')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bolt T-Shirt')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Fleece Jacket')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Onesie')
        cy.get('[data-test="inventory-item-name"]').should('contain','Test.allTheThings() T-Shirt (Red)')

    });

    it('test a correct login for visual_user', function () {
        
        cy.url().should('eq', 'https://www.saucedemo.com/')
        
        cy.get('#user-name').type(this.dataUsers.name_vis.user)
        cy.get('#password').type(this.dataUsers.name_vis.pass)
        
        cy.get('#login-button').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') // Login success

        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Backpack')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bike Light')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Bolt T-Shirt')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Fleece Jacket')
        cy.get('[data-test="inventory-item-name"]').should('contain','Sauce Labs Onesie')
        cy.get('[data-test="inventory-item-name"]').should('contain','Test.allTheThings() T-Shirt (Red)')

    });

})