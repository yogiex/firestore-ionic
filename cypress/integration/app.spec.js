describe('Web note firebase', () => {

    // beforeEach(() => {
    //     cy.viewport('iphone-x')
    // })
    it('show default web note and list', () => {
        cy.visit('/home')
        cy.contains('Ionic Firebase Storage Firestore').should('be.visible')
    })

    it('should add notes', () => {
        let tmp = Date.now().toString()
        cy.visit('/home')
        cy.get('[data-cy=addNote]').click()
        cy.contains('Add note').should('be.visible')
        cy.get('[id=alert-input-1-0]').type('Diary'+Date.now().toString(),{force:true})
        cy.get('[id=alert-input-1-1]').type('loremm ipsum dolor amet',{force:true})
        cy.contains('ADD').click()
    })
})