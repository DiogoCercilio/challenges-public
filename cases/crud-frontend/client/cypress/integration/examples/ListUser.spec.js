/// <reference types="cypress" />

const sizes = ['iphone-6','ipad-2', 'macbook-13']

context('User interactions', () => {    
    sizes.forEach(size=> {

        it(`Add user (${size})`, () => {
            cy.viewport(size)
            cy.visit('http://localhost:3000')
            cy.get('button').eq(2).click()
            cy.get('#add-user-form').should('be.visible').and('contain', 'Please fill the data below to add a new user:')
            cy.get('#add-user-form button').eq(1).should('have.text', 'Cancel').click()
            cy.get('#add-user-form').should('not.exist')
            
            cy.get('button').eq(2).click()
            cy.get('#add-user-form button').eq(0).should('have.text', 'Add').click()
            cy.get('#add-user-form').should('be.visible').and('contain', 'Please fill the data below to add a new user:')
    
            // https://on.cypress.io/type
            cy.get('input#name').type('Diogo Silva').should('have.value', 'Diogo Silva')
            cy.get('input#username').type('myusername').should('have.value', 'myusername')
            cy.get('input#email').type('myemail@gmail.com').should('have.value', 'myemail@gmail.com')
            cy.get('input#phone').type('(12) 98181-8181').should('have.value', '(12) 98181-8181')
            cy.get('input#gender').should('have.value', 'men')
            cy.get('input#avatar').clear().type('https://randomuser.me/api/portraits/men/90.jpg').should('have.value', 'https://randomuser.me/api/portraits/men/90.jpg')
    
            cy.get('#add-user-form button').eq(0).should('have.text', 'Add').click()
            cy.get('.accordeon-item-title').contains('Diogo Silva').should('exist')
        })  
        
        it(`Edit user (${size})`, () => {
            cy.viewport(size)
            // Edita apenas o primeiro campo do Usuário criado
            cy.get('.accordeon-item-title').contains('Diogo Silva').should('exist').click()
            cy.get('.accordeon-item-content').should('be.visible').and('have.length', 1)
            cy.get('.accordeon-item-content-data-input svg').eq(0).click()
            cy.get('[placeholder="Diogo Silva"]').should('exist').type('My name Edited')
            cy.get(".accordeon-item-content-data-input button").eq(0).click()
            cy.get('.accordeon-item-title').contains('My name Edited').should('exist')
            cy.get('.accordeon-item-title').contains('Diogo Silva').should('not.exist')
    
            // Edita apenas o primeiro campo do Usuário criado
            cy.get('.accordeon-item-title').contains('My name Edited').click()
            cy.get('.accordeon-item-content').should('be.visible').and('have.length', 1)
            cy.get('.accordeon-item-content-data-input svg').eq(0).click()
            
            cy.get('[placeholder="My name Edited"]').should('exist')
            cy.get('[placeholder="myusername"]').should('exist').type('myusernameedited')
            cy.get('[placeholder="myemail@gmail.com"]').should('exist').type('myemailedited@gmail.com')
            cy.get('[placeholder="(12) 98181-8181"]').should('exist').type('11 1111-1111')
            cy.get(".accordeon-item-content-data-input button").eq(0).click()
    
            cy.get('.accordeon-item-content').and('have.length', 0)
            cy.get('.accordeon-item-title').contains('My name Edited').click()
            cy.get('.accordeon-item-content').should('be.visible').and('have.length', 1)
    
            cy.get('.accordeon-item-content-data-input svg').eq(0).click()
            cy.get('[placeholder="myusernameedited"]').should('exist')
            cy.get('[placeholder="myemailedited@gmail.com"]').should('exist')
            cy.get('[placeholder="11 1111-1111"]').should('exist')
            cy.get(".accordeon-item-content-data-input button").eq(1).click()
            cy.get('.accordeon-item-title').contains('My name Edited').should('exist').click()
        })      
    
        it(`Drop user (${size})`, () => {
            cy.viewport(size)
            cy.get('.accordeon-item-title').contains('My name Edited').click()
            cy.get('.accordeon-item-content').should('be.visible').and('have.length', 1)
    
            cy.get('.accordeon-item-content-data-input svg').eq(1).click()
            cy.get('.accordeon-item-title').contains('My name Edited').should('not.exist')
        }) 
    })    
  })
  